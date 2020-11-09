
const { Client, ClientBase } = require('pg')
async function getClient() {
    const client = new Client()
    await client.connect()
    return client;
}

async function findUser(email, password) {
  console.log(process.env.PGUSER);
  const client = await getClient();
  const query = 'SELECT id, name, email FROM users WHERE email = \'' + email + '\' AND password = \'' + password + '\'';
  console.log(query);
  const res = await client.query(query);
  console.log(email, password);
  console.log(res.rows[0]);
  return res.rows[0];
}
module.exports = {
    findUser
};
