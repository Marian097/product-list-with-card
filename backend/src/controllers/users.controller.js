import { pool } from "../db.js";
import jwt from "jsonwebtoken";

const argon2 = require("argon2");

async function hashPassword(password) {
  return await argon2.hash(password);
}

async function verifyPassword(password, hash) {
  return await argon2.verify(hash, password);
}

export async function createUsers(req, res, next) {
  const users = await pool.connect();
  let passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

  try {
    const { name, email, password, role } = req.body;

    if (!name && !email && !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    if (!passRegex.test(password)) {
      return res.status(400).json({
        message:
          "Password must be 8-15 chars, include upper, lower, number and special char",
      });
    }
    const hashPass = await hashPassword(password);
    const resultsUsers = await users.query(
      "INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id",
      [name, email, hashPass],
    );

    const userId = resultsUsers.rows[0].id;

    const roleUsers = await users.query(
      "INSERT INTO users_role (users_id, role) VALUES ($1, $2) RETURNING id",
      [userId, role],
    );

    const roleId = roleUsers.rows[0].id;

    users.query("COMMIT");
    res.status(201).json({ message: "User create" });
  } catch (err) {
    next(err);
  } finally {
    users.release();
  }
}

async function LoginUser(req, res, next) {
  const client = await pool.connect();

  try {
    const { email, password } = req.body;

    const results = await client.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (results.rows.length === 0) {
      return res.status(401).json({ message: "User not found" });
    }

    const user = results.rows[0];

    const isValid = await verifyPassword(password, user.password_hash);

    if (!isValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const payload = { sub: user.id, email: user.email, role: user.role };

    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });

    const refreshToken = jwt.sign(
      { sub: user.id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "7d" },
    );


    return res
      .status(201)
      .json({
        message: "Login succesfull",
        access_token: accessToken,
        token_type: "Bearer",
        expires_in: 900,
      });
  } catch (error) {
    next(error);
  } finally {
    client.release();
  }
}
