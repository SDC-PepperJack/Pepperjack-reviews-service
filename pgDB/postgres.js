
const { Pool } = require('pg');

const client = new Pool({
  user: 'jonathanyang',
  host: 'localhost',
  database: 'newtest',
  password: '',
});

client.connect()
  .then(() => console.log('PostgreSQL connected!- postgres.js'));

const getSellerData = (data, callback) => {
  client.query(data, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};



module.exports = {
  getSellerData
};