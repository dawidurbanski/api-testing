const { MongoClient } = require("mongodb");
var dotenv = require("dotenv");

dotenv.config();

// Replace the placeholder with your Atlas connection string
const uri = process.env.MONGO_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

async function db(operation) {
  try {
    await client.connect();
    await operation(client);
  } finally {
    // await client.close();
  }
}

module.exports = db;
