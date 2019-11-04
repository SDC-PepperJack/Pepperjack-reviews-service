
const { Pool } = require('pg');

const client = new Pool({
  user: 'jonathanyang',
  host: 'localhost',
  database: 'newtest',
  password: '',
});

client.connect()
  .then(() => console.log('PostgreSQL seeding connected.'))
  // .then(() => {
  //   client.query(
  //     `CREATE SCHEMA reviews
  //       CREATE TABLE reviews-services(
  //         sellerID BIGINT NOT NULL,
  //         seller VARCHAR(50),
  //         reviews INT,
  //         ratings INT,
  //         comments ARRAY
  //       )
  //     `, (err, res) => {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         console.log(res);
  //       }
  //     }
  //   );
  // .catch(() => console.log('Error with seeding'));
  // });