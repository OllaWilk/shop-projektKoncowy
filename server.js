const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const helmet = require('helmet');
const app = express();


// const cartRoutes = require('./routes/cart.routes');
// const orderRoutes = require('./routes/order.routes');
const productRoutes = require('./routes/products.routes');


/* MIDDLEWARE */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
//app.use('/api', cartRoutes);
//app.use('/api', orderRoutes);
app.use('/api', productRoutes);


/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ data: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '/client/build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

/* MONGOOSE */
mongoose.connect('mongodb://localhost:27017/bulletinBoard', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));


/* START SERVER */
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});

module.exports = server;