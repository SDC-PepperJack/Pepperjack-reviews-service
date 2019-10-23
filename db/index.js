const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/sellers', { useNewUrlParser: true });


let sellerSchema = mongoose.Schema({
  sellerID: { type: Number, unique: true },
  seller: String,
  reviews: Number,
  ratings: Number,
  comments: Array,
});

let Seller = mongoose.model('Seller', sellerSchema);


let getSellerData = (sellerID, callback) => {

  Seller.findOne({ sellerID }, (err, results) => {
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
