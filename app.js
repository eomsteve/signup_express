const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const mailer = require('express-mailer');
const fileStore = require('session-file-store')(session);
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const resultRouter= require('./routes/result');
const verificationRouter= require('./routes/verification');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  key:'key',
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  store: new fileStore()
}));



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/result', resultRouter);
app.use('/verification',verificationRouter);



// //mailer information
// mailer.extend(app,{
//   host: 'smtp.gmail.com', // hostname
//   secureConnection: true, // use SSL
//   port: 465, // port for secure SMTP
//   transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
//   auth: {
//     user: 'intuseer.sheom@gmail.com',
//     pass: 'djatjdgus1!'
//   }
// });


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
