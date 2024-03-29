// require('newrelic');
const express = require('express');
const app = express();
const PORT = 5000;
// const db = require('../db');
const pg = require('../pgDB/postgres.js');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('./public'));

//get data from postgreSQL db
app.get('/api/seller/:sellerID', (req, res) => {

  let sellerID = req.params.sellerID;
  // let commentsID = req.params.sellerID;

  let queryString1 = `SELECT sellerid, seller, reviews, ratings FROM reviews WHERE sellerid = '${sellerID}';`;
  let queryString2 = `SELECT commentsid, reviewerName,reviewerAvatar,reviewerComment,reviewerPhotoInComment,reviewerItem,reviewerItemPhoto,rating,reviewerDate FROM comments WHERE commentsid = '${sellerID}';`;

  pg.getSellerData(queryString1, (error, results) => {
    if (error) {
      console.log('error occured getting seller info', error);
    } else {
      let newComments = results[0];
      pg.getSellerComments(queryString2, (error2, results2) => {
        if (error2) {
          console.log('error occured getting seller info', error2);
        } else {
          newComments.comments = results2;
          res.status(200).send(newComments);
        }
      })
    }
  })
});


app.get('/api/seller/', (req, res) => {

  let queryString = 'SELECT sellerid, seller, reviews, ratings FROM reviews WHERE sellerid <= 5';
  pg.getSellerData(queryString, (error, results) => {
    if (error) {
      console.log('error occured getting seller info', error);
      res.status(404).send('Error occured getting seller info');
    }
    res.status(200).send(results);
  });
});


//handle post requests for new seller
// app.post('/api/seller/', (req, res) => {

//   db.postSellerData(req.params, (err, results) => {
//     if (err) {
//       console.log('error occured posting seller info', err);
//       res.status(404).send('Error occured posting seller info');
//     }
//     res.status(200).send(results);
//   });

// });

// //handle get requests for specific seller
// app.get('/api/seller/:sellerID', (req, res) => {

//   db.getSellerData(req.params.sellerID, (err, results) => {
//     if (err) {
//       console.log('error occured getting seller info', err);
//       res.status(404).send('Error occured getting seller info');
//     }
//     res.status(200).send(results);
//   });

// });

// //handle put requests for specifc seller
// app.put('/api/seller/:sellerID', (req, res) => {

//   db.putSellerData(req.params.sellerID, values, (err, results) => {
//     if (err) {
//       console.log('error occured putting seller info', err);
//       res.status(404).send('Error occured putting seller info');
//     }
//     res.status(200).send(results);
//   });

// });

// //handle delete requests for specific seller
// app.delete('/api/seller/:sellerID', (req, res) => {

//   db.deleteSellerData(req.params.sellerID, (err, results) => {
//     if (err) {
//       console.log('error occured deleting seller info', err);
//       res.status(404).send('Error occured deleting seller info');
//     }
//     res.status(200).send(results);
//   });

// });
app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
