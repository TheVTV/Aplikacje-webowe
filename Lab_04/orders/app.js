import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { Sequelize, DataTypes } from "sequelize";
import jwt from "jsonwebtoken";
const app = express();
const PORT = 3003;
const BOOKPORT = 3000;

app.use(express.json());

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.db",
});

function verifyToken(req, res, next) {
  const token = req.header("Authorization");
  if (!token)
    return res.status(403).json("A token is required for authentication");

  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json("Invalid token");
  }
}

const Order = sequelize.define("Order", {
  OrderID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  BookID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  UserID: {
    type: DataTypes.INTEGER,
    // allowNull: false,
  },
});

sequelize.sync();

app.get("/api/orders/:id", async (req, res) => {
  try {
    const orders = await Order.findAll({ where: { userId: req.params.id } });
    if (orders.length === 0) {
      return res.status(404).send("This user doesn't have any orders!");
    }
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

async function isBookOk(id) {
  try {
    const bookExistsResponse = await fetch(
      `http://localhost:${BOOKPORT}/api/books/${id}`
    );
    const bookExists = await bookExistsResponse.json();
    if (!bookExistsResponse.ok || !bookExists) {
      return false;
    }
    return true;
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
}

app.post("/api/orders", verifyToken, async (req, res) => {
  try {
    const UserID = req.user.ID;
    const { BookID, Quantity } = req.body;
    if (!isBookOk) {
      return res.status(400).send("Book doesn't exist");
    }
    const newOrder = await Order.create({ BookID, Quantity, UserID });
    res.status(200).json({ orderId: newOrder.orderId });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.delete("/api/orders/:id", verifyToken, async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).send("Order not found");
    }
    if (order.UserID !== req.user.ID) {
      return res
        .status(403)
        .send("You are not authorized to delete this order");
    }
    await order.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.patch("/api/orders/:id", verifyToken, async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).send("Order not found");
    }
    if (order.UserID !== req.user.ID) {
      return res
        .status(403)
        .send("You are not authorized to update this order");
    }

    const { BookID, Quantity } = req.body;
    await order.update({ BookID, Quantity });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
