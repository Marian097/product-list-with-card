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


 export async function getAllOrders(req, res) {
  const client = await pool.connect();

  try {
    const { rows } = await client.query(`
      SELECT
        c.name       AS name_client,
        c.phone      AS telefon_client,
        o.product    AS product,
        o.quantity   AS qty,
        o.note_order AS note,
        o.created_at AS order_placed,
        a.city       AS city,
        a.street     AS street,
        a.number     AS number_street,
        a.block      AS block,
        a.floor      AS floor_block,
        a.scale      AS scale_block,
        a.apartament AS apartament
      FROM clients c
      JOIN address a ON a.client_id = c.id
      JOIN orders  o ON o.address_id = a.id
      ORDER BY o.created_at DESC;
    `);

    return res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  } finally {
    client.release();
  }
}


export async function getOrdersDelivered(req, res){
  const orderClient = await pool.connect();

  try{
     const {rows} = orderClient.query(`SELECT
                              c.name AS name_client,
                              c.phone AS phone_client,
                              a.city AS city_client,
                              a.street AS street_client,
                              a.block AS block_client,
                              a.floor AS floor_client,
                              a.scale AS scale_client,
                              a.apartament AS  apartament_client,
                              a.number AS number_street_client,
                              o.product AS prod_order,
                              o.quantity AS qty_order,
                              o.price AS price_product,
                              o.note_order AS note_order,
                              o.total AS total_price_order,
                              o.created_at AS place_order FROM clients c JOIN
                              address a ON c.id = a.client_id JOIN orders o ON a.id = o.address_id
                              WHERE is_delivered = true`)
      return res.status(200).json(rows)

  }
  catch (err){
    console.error(err)
  }
  finally{
    orderClient.release()
  }
}


export async function getOrdersNotDelivered(req, res){
  const orderClient = await pool.connect();

  try{
     const {rows} = orderClient.query(`SELECT
                              c.name AS name_client,
                              c.phone AS phone_client,
                              a.city AS city_client,
                              a.street AS street_client,
                              a.block AS block_client,
                              a.floor AS floor_client,
                              a.scale AS scale_client,
                              a.apartament AS  apartament_client,
                              a.number AS number_street_client,
                              o.product AS prod_order,
                              o.quantity AS qty_order,
                              o.price AS price_product,
                              o.note_order AS note_order,
                              o.total AS total_price_order,
                              o.created_at AS place_order FROM clients c JOIN
                              address a ON c.id = a.client_id JOIN orders o ON a.id = o.address_id
                              WHERE is_delivered = false`)
      return res.status(200).json(rows)

  }
  catch (err){
    console.error(err)
  }
  finally{
    orderClient.release()
  }
}