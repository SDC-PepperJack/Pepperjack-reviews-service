// ec2-user
const { Pool } = require('pg');
var fs = require('fs');
var copyFrom = require('pg-copy-streams').from;


const client = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'reviews_services',
  password: 'Password123!',
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

const getSellerComments = (data, callback) => {
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
  getSellerComments
};
