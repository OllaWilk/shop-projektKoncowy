const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: Array, required: true },
  flavour: { type: String, required: true },
  price: { type: Number, required: true },
  inCart: { type: Boolean },
  count: { type: Number },

},
  { versionKey: false }
);

module.exports = mongoose.model('Product', productSchema);
