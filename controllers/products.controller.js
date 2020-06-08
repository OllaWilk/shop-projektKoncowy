const Product = require('../models/product.model');

exports.getAll = async (req, res) => {

  try {
    const products = await Product.find();
    if (!products) res.status(404).json({ product: 'Not found' });
    else res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getOne = async (req, res) => {

  try {
    console.log(req.params);
    const products = await Product.find({ _id: req.params.id });
    if (!products) res.status(404).json({ product: 'Not found' });
    else res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};