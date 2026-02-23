import { pool } from "../db.js"


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
      items
    } = req.body;

    if (!name || !street || !number || !phone || !email) {
      return res.status(400).json({
        message: "name, street, number, phone sunt obligatorii"
      });
    }

    const results = client.query("SELECT phone FROM clients");
    console.log((await results).rows)

    await client.query("BEGIN");


    (await results).rows.forEach((p) => {
      if (p.phone === phone) return console.log("Clients already exists")
      else{
    const clientResult =
       client.query(
      `INSERT INTO clients (name, phone, email)
       VALUES ($1, $2, $3)
       RETURNING id`,
      [name, phone, email]
    ); 
     

    const clientId = clientResult.rows[0].id;

    // address
    const addressResult =  client.query(
      `INSERT INTO address (client_id, city, number, street, block, floor, scale, apartament)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING id`,
      [clientId, city, number, street, block, floor, scale, apartament]
    );

    const addressId = addressResult.rows[0].id;

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "Order must have items" });
    }

    for (const item of items) {
      const { product, quantity, price } = item;

       client.query(
        `INSERT INTO orders (address_id, product, quantity, price, note_order, total, is_delivered)
         VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        [addressId, product, quantity, price, note, total, false]
      );
    }

     client.query("COMMIT");

    res.status(201).json({ message: "Order created" });
    }
    })


  } catch (err) {
   
    await client.query("ROLLBACK");
    console.error(err);
    next(err);
  } finally {
    client.release();
  }
}
