const axios = require('axios');


describe('API Routes', () => {
  test('A get request to /api/:sellerID to get a seller', async () => {
    try {
      var response = await axios.get('http://localhost:5000/api/5da4d59880b5950f90eafc6c');
    } catch (err) {
      console.error(err);
    }
    expect(response.status).toBe(200);
    expect(response.data.seller).toBe("WannaSell");
    expect(response.data.ratings).toBe(4);
    expect(response.data.reviews).toBe(2263);
    expect(response.data.comments.length).toBe(25);
  });
});





