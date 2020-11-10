const getClient = require('./db-client');

async function getAllLogs() {
  const client = await getClient();
  const query = "SELECT id, logtitle, description, username FROM logs";
  console.log(query);
  const res = await client.query(query);
  console.log(res.rows);
  return res.rows;
}

module.exports = {
  getAllLogs
}
