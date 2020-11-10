const { Client } = require('pg');

async function getClient() {
  const client = new Client()
  await client.connect()
  return client;
}

module.exports = getClient;
