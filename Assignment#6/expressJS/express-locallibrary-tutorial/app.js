var createError = require('http-errors');//Create HTTP errors where needed (for express error handling).
var express = require('express');
var path = require('path'); //core Node library for parsing file and directory paths.
var cookieParser = require('cookie-parser');//convenient method for accessing cookie information
var logger = require('morgan'); // morgan:An HTTP request logger middleware for node.

//Then we require() modules from our routes directory. 
//These modules/files contain code for handling particular sets of related "routes" (URL paths). 
//When we extend the skeleton application, for example to list all books in the library, 
//we will add a new file for dealing with book-related routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//Next, we create the app object using our imported express module,
// and then use it to set up the view (template) engine.
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));//First, we set the 'views' value to specify the folder where the templates will be stored 
app.set('view engine', 'pug');// we set the 'view engine' value to specify the template library (in this case "pug").

// The next set of functions call app.use() to add the middleware libraries into the request handling chain.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//we use the express.static middleware to get Express to serve all the static files in the /public directory in the project root.

//now  we add our (previously imported) route-handling code to the request handling chain.
// The imported code will define particular routes for the different parts of the site:
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// catch 404 and forward to error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//The Express application object (app) is now fully configured. 
//The last step is to add it to the module exports
module.exports = app; //  module.exports object is supplied to the www when this file(app) is imported
