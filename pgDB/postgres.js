
const { Pool } = require('pg');
var fs = require('fs');
var copyFrom = require('pg-copy-streams').from;


const client = new Pool({
  user: 'jonathanyang',
  host: 'localhost',
  database: 'reviews_services',
  password: '',
});

client.connect()
  .then(() => console.log('PostgreSQL connected!- postgres.js'));

const getSellerData = (data, callback) => {
  client.query(data, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res.rows);
    }
  });
};

const getAllData = () => {
  let queryString = 'SELECT * FROM reviews.review';
  client.query(queryString, (err, res) => {
    if (err) {
      console.log('error', err);
    } else {
      console.log('result', res);
    }
  });
};

module.exports = {
  getSellerData,
  getAllData,
  // seedAllData
};