
const { Pool } = require('pg');
var fs = require('fs');
var copyFrom = require('pg-copy-streams').from;


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

const getAllData = () => {
  let queryString = 'SELECT * FROM newschema1.newtable';
  client.query(queryString, (err, res) => {
    if (err) {
      console.log('error', err);
    } else {
      console.log('result', res.rows);
    }
  });
};

module.exports = {
  getSellerData,
  getAllData,
  // seedAllData
};