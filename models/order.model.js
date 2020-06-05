const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  cart: {
    //DO ROZWIĄZANIA !!
  },
  client: {
    //DO ROZWIĄZANIA !!
  },
}
);

module.exports = mongoose.model('Order', productSchema);
