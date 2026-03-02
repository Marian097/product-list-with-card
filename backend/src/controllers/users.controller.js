import { pool } from "../db.js";

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
    const { name, email, password, role  } = req.body;

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
      "INSERT INTO users (name, email, password_hash) VALUES (1$, 2$, 3$) RETURNING id",
      [name, email, hashPass],
    );

    const userId = resultsUsers.rows[0].id;

    const roleUsers = await users.query("INSERT INTO users_role (users_id, role) VALUES (1$, 2$) RETURNING id", [userId, role])
    const roleId = roleUsers.rows[0].id

    users.query("COMMIT")
    res.status(201).json({ message: "User create" });


  } catch (err){
    next(err)
  } finally {
    users.release()
  }
}
