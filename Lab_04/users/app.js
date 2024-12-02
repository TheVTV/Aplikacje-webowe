import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Sequelize, DataTypes } from "sequelize";
const app = express();
const PORT = 3001;
const saltRounds = 10;

app.use(express.json());

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.db",
});
const User = sequelize.define("User", {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize.sync();

app.post("/api/register", async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const existingUser = await User.findOne({ where: { Email } });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }
    const PasswordHash = await bcrypt.hash(Password, saltRounds);
    const user = await User.create({ Email, Password: PasswordHash });
    res.status(200).json({ ID: user.ID });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const user = await User.findOne({ where: { Email } });

    if (!user || !(await bcrypt.compare(Password, user.Password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign(
      { ID: user.ID, Email: user.Email },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
