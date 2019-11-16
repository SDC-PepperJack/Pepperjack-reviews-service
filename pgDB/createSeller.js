const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');

const writeUsers = fs.createWriteStream('allSellers.csv');
writeUsers.write('sellerid, seller, reviews, ratings\n', 'utf8');


let writeProducts = function(writer, encoding, callback) {

  // getComments function creates an array of objects that represent comments for a seller.


  // Seeding instructions
  console.log('Seeding initiated at ', Date());
  let i = 400000;
  let id = 0;
  let write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      let sellerid = id;
      let seller = faker.internet.userName();
      let reviews = faker.random.number();
      let ratings = Math.floor(Math.random() * 5 + 1);

      const data = `${sellerid}, ${seller}, ${reviews}, ${ratings}\n`;

      if ( i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  };
  write();
};

// invoke seeding function
writeProducts(writeUsers, 'utf-8', () => {
  writeUsers.end();
  console.log('Seeding 10 million seller records completed at ', Date());
});

// PREVIOUS CODE, NO LONGER IN USE.
// let counter = 1;

// const writeSellers = () => {
//   writer.pipe(fs.createWriteStream('allReviews.csv'));
//   console.log('Seeding initiated at ', Date());

//   for (var i = 1; i <= 10000000; i++) {
//     writer.write({
//       sellerid: i,
//       seller: faker.internet.userName(),
//       reviews: faker.random.number(),
//       ratings: Math.floor(Math.random() * 5 + 1),
//       comments: getComments()
//     });
//     counter++;
//   }
//   writer.end();
//   console.log('Seeding completed at ', Date());
// };

// writeSellers();