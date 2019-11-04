const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
let writer = csvWriter();
let counter = 1;

let getComments = () => {
  let comments = [];

  for (let i = 0; i < 2; i++) {
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

const writeSellers = () => {
  writer.pipe(fs.createWriteStream('allReviews.csv'));
  console.log('Seeding initiated at ', Date());

  for (var i = 1; i <= 10000000; i++) {
    writer.write({
      sellerid: i,
      seller: faker.internet.userName(),
      reviews: faker.random.number(),
      ratings: Math.floor(Math.random() * 5 + 1),
      comments: getComments()
    });
    counter++;
  }
  writer.end();
  console.log('Seeding completed at ', Date());
};

writeSellers();