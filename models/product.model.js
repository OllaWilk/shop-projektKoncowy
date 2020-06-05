const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  img: { type: Array, required: true },
  price: { type: Number, required: true },
  flavour: { type: Array },
  info: { type: String, required: true },
  inCart: { type: Boolean },
  count: { type: Number },
  count: { type: Number },
},
  { versionKey: false }
);

module.exports = mongoose.model('Product', productSchema);
