import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { Sequelize, DataTypes } from "sequelize";
import jwt from "jsonwebtoken";
const app = express();
const PORT = 3000;

app.use(express.json());

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

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.db",
});
const Book = sequelize.define("Book", {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Title: DataTypes.STRING,
  Author: DataTypes.STRING,
  Date: DataTypes.INTEGER,
});

sequelize.sync();

app.get("/api/books", async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.get("/api/books/:id", async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.post("/api/books", verifyToken, async (req, res) => {
  try {
    const { Title, Author, Date } = req.body;
    const book = await Book.create({ Title, Author, Date });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.delete("/api/books/:id", verifyToken, async (req, res) => {
  try {
    const result = await Book.destroy({ where: { id: req.params.id } });
    if (result) {
      res.status(200).json({ message: "Book deleted" });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
