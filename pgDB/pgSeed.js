var fs = require('fs');
var {Pool} = require('pg');
var copyFrom = require('pg-copy-streams').from;

var pool = new Pool({
  user: 'jonathanyang',
  host: 'localhost',
  database: 'newtest',
  password: '',
});

// var pool = new Pool();

pool.connect(function(err, client, done) {
  console.log('Connected at ' + Date());
  var stream = client.query(copyFrom('COPY newschema1.newtable FROM STDIN WITH CSV HEADER\;'));
  var fileStream = fs.createReadStream('allReviews.csv');
  fileStream.on('Error', (err) => {
    console.log(`Error reading file: ${err}`);
  });
  stream.on('error', (err) => {
    console.log(`Error copying: ${err}`);
  });
  stream.on('end', () => {
    console.log('Completed copying data to PostgreSQL table at ' + Date());
  });
  fileStream.pipe(stream);
  fileStream.on('end', () => {
    console.log('Data imported');
  });
});