const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());

const SECRET_KEY = "Ashraf";

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const db = new sqlite3.Database("database.db", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connetced to database");
  }
});

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE, password TEXT)"
  );
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  db.run(
    "INSERT INTO users (username, password) VALUES (?, ?)",
    username,
    hashedPassword,
    (err) => {
      if (err) {
        res.status(400).json({ message: "Username already exists" });
      } else {
        res.json({ message: "User created successfully" });
      }
    }
  );
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const selectUserQuery = `SELECT * FROM users WHERE username = '${username}'`;
  const dbUser = db.get(selectUserQuery, async (err, user) => {
    if (err) {
      res.status(500).json({ message: "Server Error" });
    }

    if (!user || user === undefined) {
      res.status(401).json({ message: "Invalid Username or Password" });
    } else {
      isPasswordMatch = await bcrypt.compare(password, user?.password);

      if (isPasswordMatch) {
        const token = jwt.sign({ username: user.username }, SECRET_KEY);
        res.status(200).json({ token });
      } else {
        res.status(401).json({ message: "Invalid Username or Password" });
      }
    }
  });
});

app.listen("5000", () => {
  console.log("Server is running on port 5000");
});
