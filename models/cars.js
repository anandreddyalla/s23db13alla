// models/cars.js
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  cars_make: String,
  cars_model: String,
  cars_year: Number,
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
