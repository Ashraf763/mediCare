require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("./database/db");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Signup endpoint
app.post("/api/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(
      password,
      parseInt(process.env.BCRYPT_SALT_ROUNDS)
    );
    const stmt = db.prepare(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)"
    );
    const result = stmt.run(username, email, hashedPassword);

    const user = { id: result.lastInsertRowid, username, email };
    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({ success: true, user, token });
  } catch (error) {
    if (error.message.includes("UNIQUE constraint failed")) {
      return res
        .status(400)
        .json({ success: false, message: "Username or email already exists" });
    }
    res.status(500).json({ success: false, message: "Error creating user" });
  }
});

// Login endpoint
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = db
      .prepare("SELECT * FROM users WHERE username = ?")
      .get(username);

    if (user && (await bcrypt.compare(password, user.password))) {
      const userData = {
        id: user.id,
        username: user.username,
        email: user.email,
      };
      const token = jwt.sign(userData, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.json({ success: true, user: userData, token });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Error logging in" });
  }
});

// Protected route example
app.get("/api/protected", authenticateToken, (req, res) => {
  res.json({ message: `Hello ${req.user.username}`, user: req.user });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
