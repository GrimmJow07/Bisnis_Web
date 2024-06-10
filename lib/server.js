const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();
const port = 3001;

// Buat pool koneksi ke database PostgreSQL
const pool = new Pool({
  user: "your_db_user",
  host: "localhost",
  database: "your_database",
  password: "your_password",
  port: 5432,
});

app.use(bodyParser.json());

// Endpoint untuk autentikasi pengguna
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const query = "SELECT * FROM users WHERE username = $1 AND password = $2";
    const result = await pool.query(query, [username, password]);
    if (result.rows.length === 1) {
      // Autentikasi berhasil
      res.status(200).json({ message: "Login successful" });
    } else {
      // Autentikasi gagal
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
