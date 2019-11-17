const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');

const writeUsers = fs.createWriteStream('allComments.csv');
writeUsers.write('commentsid, reviewerName, reviewerAvatar, reviewerComment, reviewerPhotoInComment, reviewerItem, reviewerItemPhoto, rating, reviewerDate\n', 'utf8');


let writeProducts = function(writer, encoding, callback) {

  // Seeding instructions
  console.log('Seeding initiated at ', Date());
  let i = 400000;
  let id = 0;
  let write = () => {
    let ok = true;
    do {
      let j = 0;
      i -= 1;
      id += 1
        while (j < 25) {
        let commentsid = id;
        let reviewerName = faker.name.firstName();
        let reviewerAvatar = faker.image.avatar();
        let reviewerComment = faker.lorem.sentence();
        let reviewerPhotoInComment = "https://loremflickr.com/300/300";
        let reviewerItem = faker.commerce.productName();
        let reviewerItemPhoto = "https://loremflickr.com/600/600";
        let rating = faker.random.number();
        let reviewerDate = faker.date.recent();

        const data = `${commentsid}, ${reviewerName}, ${reviewerAvatar}, ${reviewerComment}, ${reviewerPhotoInComment}, ${reviewerItem}, ${reviewerItemPhoto}, ${rating}, ${reviewerDate}\n`;

        if ( i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
        j++;
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
})
