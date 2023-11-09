var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



require('dotenv').config();
const connectionString =
  process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function () {
  console.log("Connection to DB succeeded")
});


var Car = require('./models/cars'); 

async function recreateDB() {
  await Car.deleteMany();

  let instance1 = new
    Car({
      cars_make: "Toyota", cars_model: 'Camry',
      cars_year: 2022
    });
  instance1.save().then(doc => {
    console.log("First object saved")
  }
  ).catch(err => {
    console.error(err)
  });
  let instance2 = new
    Car({
      cars_make: "Honda", cars_model: 'Civic',
      cars_year: 2021
    });
  instance2.save().then(doc => {
    console.log("Second object saved")
  }
  ).catch(err => {
    console.error(err)
  });
  let instance3 = new
    Car({
      cars_make: "Suzuki", cars_model: 'Alto',
      cars_year: 2021
    });
  instance3.save().then(doc => {
    console.log("Third object saved")
  }
  ).catch(err => {
    console.error(err)
  });
}
  let reseed = true;
if (reseed) { recreateDB();
}



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const carsRouter = require('./routes/cars');
const boardRouter = require('./routes/board');
const resourceRouter = require('./routes/resource');


var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.use('/cars', carsRouter);

app.use('/board', boardRouter);

app.use('/resource', resourceRouter);

app.get('/choose', function (req, res) {
  res.render('choose', { title: 'Choose' });
});


app.use(function (req, res, next) {
  next(createError(404));
});


app.use(function (err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
