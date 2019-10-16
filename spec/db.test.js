const getSellerData = require('../db/index.js').getSellerData;


describe('Get Seller Data', () => {
  test('should retrieve one seller from the database', () => {
    let sellerID = '5da4d59880b5950f90eafc6e';

    getSellerData(sellerID, (err, results) => {

      expect(results.seller).toBe('JadenPink');
      expect(results.reviews).toBe(1319);
      expect(results.comments.length).toBe(25);

    });
  });
});