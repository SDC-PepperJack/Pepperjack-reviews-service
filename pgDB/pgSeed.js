var fs = require('fs');
var {Pool} = require('pg');
var copyFrom = require('pg-copy-streams').from;

var pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'reviews_services',
  password: 'Password123!',
});

//var pool = new Pool();

pool.connect(function(err, client, done) {
  console.log('Connected at ' + Date());
  //var stream = client.query(copyFrom('COPY reviews FROM STDIN WITH CSV HEADER\;'));
  //var fileStream = fs.createReadStream('allSellers.csv');
  //fileStream.on('Error', (err) => {
    //console.log(`Error reading file: ${err}`);
  //});
  //stream.on('error', (err) => {
    //console.log(`Error copying: ${err}`);
  //});
  //stream.on('end', () => {
    //console.log('Completed copying data to PostgreSQL table reviews at ' + Date());
  // });
  // fileStream.pipe(stream);
  // fileStream.on('end', () => {
    // console.log('Data imported');
  // });

  var stream2 = client.query(copyFrom('COPY comments FROM STDIN WITH CSV HEADER\;'));
  var fileStream2 = fs.createReadStream('allComments.csv');
  fileStream2.on('Error', (err) => {
    console.log(`fileStream2 Error reading file: ${err}`);
  });
  stream2.on('error', (err) => {
    console.log(`fileStream2 Error copying: ${err}`);
  });
  stream2.on('end', () => {
    console.log('Completed copying data to PostgreSQL table comments at ' + Date());
  });
  fileStream2.pipe(stream2);
  fileStream2.on('end', () => {
    console.log('Data imported');
  });


});
