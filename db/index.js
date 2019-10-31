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

// posts sellers data
let postSellerData = (data, callback) => {
  let newData = {
    sellerID: data.sellerID,
    seller: data.seller,
    reviews: data.reviews,
    ratings: data.ratings,
    comments: data.comments
  };
  Seller.collection.insertOne(newData, (err, results) => {
    if (err) {
      console.log(err);
    }
    callback(null, results);
  });
};

// gets sellers data
let getSellerData = (sellerID, callback) => {
  Seller.findOne({ sellerID }, (err, results) => {
    if (err) {
      callback(err, null);
    }
    callback(null, results);
  });
};

// updates sellers data
let putSellerData = (sellerID, values, callback) => {
  Seller.findByIdAndUpdate(sellerID, values, (err, results) => {
    if (err) {
      callback(err, null);
    }
    callback(null, results);
  });
};

// deletes sellers data
let deleteSellerData = (sellerID, callback) => {
  Seller.findOneAndDelete({ sellerID }, (err, results) => {
    if (err) {
      callback(err, null);
    }
    callback(null, results);
  });
};

module.exports = {
  Seller,
  getSellerData,
  postSellerData,
  putSellerData,
  deleteSellerData
};


