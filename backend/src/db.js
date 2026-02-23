import dotenv from "dotenv"
import pg from "pg";


dotenv.config()


console.log("DATABASE_URL:", process.env.DATABASE_URL); 

export const pool = new pg.Pool({
    connectionString:process.env.DATABASE_URL,
})