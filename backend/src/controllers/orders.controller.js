import { pool } from "../db.js";

export async function createOrders(req, res, next) {
  const client = await pool.connect();

  try {
    const {
      name,
      street,
      number,
      block,
      floor,
      scale,
      apartament,
      city,
      phone,
      email,
      note,
      total,
      items,
    } = req.body;

    if (!name || !street || !number || !phone || !email) {
      return res.status(400).json({
        message: "name, street, number, phone sunt obligatorii",
      });
    }

    const results = await client.query("SELECT phone FROM clients");
    const existsClient = results.rows.find(
      (phoneNumber) => phoneNumber.phone === phone,
    );
    await client.query("BEGIN");

    if (existsClient) {
      return console.log("Clients already exists");
    } else {
      const clientResult = await client.query(
        `INSERT INTO clients (name, phone, email)
       VALUES ($1, $2, $3)
       RETURNING id`,
        [name, phone, email],
      );

      const clientId = await clientResult.rows[0].id;

      // address
      const addressResult = await client.query(
        `INSERT INTO address (client_id, city, number, street, block, floor, scale, apartament)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING id`,
        [clientId, city, number, street, block, floor, scale, apartament],
      );

      const addressId = addressResult.rows[0].id;

      if (!Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ message: "Order must have items" });
      }

      for (const item of items) {
        const { product, quantity, price } = item;

        await client.query(
          `INSERT INTO orders (address_id, product, quantity, price, note_order, total, is_delivered)
         VALUES ($1, $2, $3, $4, $5, $6, $7)`,
          [addressId, product, quantity, price, note, total, false],
        );
      }

      client.query("COMMIT");

      res.status(201).json({ message: "Order created" });
    }
  } catch (err) {
    await client.query("ROLLBACK");
    console.error(err);
    next(err);
  } finally {
    client.release();
  }
}


async function getAllOrders(req, res, next)
{
  const client = await pool.connect()

  const orders  = await client.query("SELECT c.name AS name_client, c.phone AS telefon_client, o.product AS product, o.quantity AS qty, o.note_order AS note, o.created_at AS order_placed, a.city AS city, a.street AS street, a.numer AS number_street, a.block AS block, a.floor AS floor_block, a.scale AS scale_block, a.apartament AS apartament, FROM client c JOIN address a ON c.id = a.client_id")

  client.query("COMMIT");
  res.status(201).json(orders)
}
