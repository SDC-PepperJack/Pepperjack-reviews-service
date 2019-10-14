const express = require('express');
const app = express();
const PORT = 5000;
const db = require('../db');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static('./public'));

//handle request for a certain seller
app.get('/api/:sellerID', (req, res) => {

  db.getSellerData(req.params.sellerID, (err, results) => {
    if (err) {
      console.log('error occured getting seller info', err);

    }

    res.send(results);

  });

});


app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});