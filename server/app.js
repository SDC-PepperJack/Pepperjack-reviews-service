const express = require('express');
const app = express();
const PORT = 5000;
const db = require('../db');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('./public'));

//handle post requests for new seller
app.post('/api/seller/', (req, res) => {

  db.postSellerData(req.body, (err, results) => {
    if (err) {
      console.log('error occured posting seller info', err);
      res.status(404).send('Error occured posting seller info');
    }
    res.status(200).send(results);
  });

});

//handle get requests for specific seller
app.get('/api/seller/:sellerID', (req, res) => {

  db.getSellerData(req.params.sellerID, (err, results) => {
    if (err) {
      console.log('error occured getting seller info', err);
      res.status(404).send('Error occured getting seller info');
    }
    res.status(200).send(results);
  });

});

//handle put requests for specifc seller
app.put('/api/seller/:sellerID', (req, res) => {

  const { sellerId } = req.body.sellerID;

  db.putSellerData(sellerId, req.body, (err, results) => {
    if (err) {
      console.log('error occured updating seller info', err);
      res.status(404).send('Error occured updating seller info');
    }
    res.status(200).send(results);
  });

});

//handle delete requests for specific seller
app.delete('/api/seller/:sellerID', (req, res) => {

  db.deleteSellerData(req.params.sellerID, (err, results) => {
    if (err) {
      console.log('error occured deleting seller info', err);
      res.status(404).send('Error occured deleting seller info');
    }
    res.status(200).send(results);
  });

});
app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});