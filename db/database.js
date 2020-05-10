import { Client } from "https://deno.land/x/mysql/mod.ts";

// connect
const client = await new Client().connect({
  hostname: "127.0.0.1",
  user: "root",
  db: "deno_tbc",
  password: "juslin",
});

// create database
await client.execute(`CREATE DATABASE IF NOT EXISTS deno_tbc`);
await client.execute(`USE deno_tbc`);

// creating tables
// verification si une table du nom exist. si vrai, supprimer cette table
await client.execute(`DROP TABLE IF EXISTS beers`);

// verifier si une table du nom de `beers` exists sinon creer
await client.execute(`
        CREATE TABLE IF NOT EXISTS beers (
            id SERIAL PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            brand VARCHAR(50) NOT NULL,
            is_premium BOOLEAN,
            registration_date TIMESTAMP
        )
    `);

export default client;
