require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const SECRET_KEY = "Ashraf";

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("connetcted to MongoDB"))
  .catch((err) => console.log("error connetcting to mongoDB", err));

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

const User = mongoose.model("User", userSchema);

app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password);

    if (!username || !password) {
      return res.status(400).send("username and password are required");
    }

    const existingUser = await User.findOne({ $or: [{ username }] });
    console.log(existingUser);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUSer = new User({ username, password: hashedPassword });
    await newUSer.save();
    res.status(200).json("User Created Successfully");
  } catch (error) {
    res.status(400).json("server error: ", error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json("username and password required");
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json("Invalid Credentials");
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json("Invalid Credentials");
    }
    const token = jwt.sign({ username: user.username }, SECRET_KEY);

    res.json({ token });
  } catch (error) {
    res.status(500).send("server error: ", error);
    console.log(error);
  }
});

app.listen("5000", () => {
  console.log("Server is running on port http://localhost:5000");
});
