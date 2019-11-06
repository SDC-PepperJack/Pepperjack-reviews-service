const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
// let writer = csvWriter();
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

// const faker = require('faker');
// const fs = require('fs');
let getComments = () => {
  let comments = [];

  for (let i = 0; i < 10; i++) {
    let currentComment = {
      id: i,
      reviewerName: faker.name.firstName(),
      reviewerAvatar: faker.image.avatar(),
      reviewerComment: faker.lorem.sentence(),
      reviewerPhotoInComment: faker.image.imageUrl(),
      reviewerItem: faker.commerce.productName(),
      reviewerItemPhoto: faker.image.image(),
      rating: faker.random.number(),
      reviewerDate: faker.date.recent()
    };
    comments.push(currentComment);
  }
  return JSON.stringify(comments);
};

const writeUsers = fs.createWriteStream('allReviews.csv');
writeUsers.write('sellerid, seller, reviews, ratings, comments\n', 'utf8');


let writeProducts = function(writer, encoding, callback) {
  console.log('Seeding initiated at ', Date());
  let i = 10000000;
  // let i = 10;
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
      let comments = `"${getComments()}"`;

      const data = `${sellerid}, ${seller}, ${reviews}, ${ratings}, ${comments}\n`;

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

writeProducts(writeUsers, 'utf-8', () => {
  writeUsers.end();
  console.log('Seeding 10 records completed at ', Date());
});