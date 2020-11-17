const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
require('dotenv').config()

//Mongo connection
mongoose
  .connect(process.env.DB, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true})
  .then((e) => {
    console.log('DB connected');
  })
  .catch(error => {
  });

//Controllers
const cashierController = require('./controller/cashier.controller');
const foodController = require('./controller/foodmenu.controller');
const orderController = require('./controller/order.controller');

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

//Default Route
app.get('/', (req, res) => {
    res.status(200).send({success: true, data: 'Welcome to Dataraction'});
});

// Start Cashier Route
app.post('/cashier/add', cashierController.addCashier);
app.get('/cashier/:id', cashierController.getCashier);
app.get('/cashiers', cashierController.getCashiers);
// End Cashier Route

// Start Food Menu Route
app.post('/menu/add', foodController.addFood);
app.get('/menu', foodController.getFoodMenu);
app.delete('/menu/:id', foodController.removeFood);
// End Food Menu Route

// Start Order Route
app.post('/order/add', orderController.addOrder);
app.get('/order/:id', orderController.getOrder);
app.get('/orders', orderController.getOrders);
app.put('/order/fulfil/:id', orderController.fulfilOrder);
app.put('/order/cancel/:id', orderController.cancelOrder);
// End Order Route

app.listen(port, '0.0.0.0', (e) => {
    console.log('listening on port 3000');
});