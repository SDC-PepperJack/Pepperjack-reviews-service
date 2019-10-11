const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/sellers', { useNewUrlParser: true });


let sellerSchema = mongoose.Schema({
  seller: String,
  reviews: Number,
  ratings: Number,
  comments: Array,
});

let Seller = mongoose.model('Seller', sellerSchema);


let getSellerData = (seller, callback) => {

  Seller.findOne({ seller }, (err, results) => {
    if (err) {
      callback(err, null);
    }

    callback(null, results);
  });

};


module.exports = {
  Seller,
  getSellerData
};
