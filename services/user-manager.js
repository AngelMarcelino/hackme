const getClient = require('./db-client');

async function findUser(email, password) {
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
