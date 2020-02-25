var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
const db = require('./models/index');
const JWT = require('./utils/JWT');


var indexRouter = require('./routes/index');
var booksRouter = require('./routes/books');
var accountsRouter = require('./routes/accounts');
var ordersRouter = require('./routes/orders');
var dashboardRouter = require('./routes/dashboard.js');


var app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);
app.use('/api/v1/accounts', accountsRouter);

app.use(function(req,res,next){
  if(JWT.verifyToken(req.headers['auth'])){
    next();
  } else {
    next(createError(401));
  }
});


app.use('/api/v1/books', booksRouter);
app.use('/api/v1/orders', ordersRouter);
app.use('/api/v1/dashboard',dashboardRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});




db.sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT, () => console.log(`server started on https://localhost:${process.env.PORT}`));
  })
  .catch(error => {
    console.log('Error connecting to DB', error);
  });


module.exports = app;
