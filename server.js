var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(favicon(__dirname + '/public/images/favicon-96x96.png'));

var routes = require('./routes/home');
var hardline = require('./routes/hardline');
var bf4 = require('./routes/bf4');
var codaw = require('./routes/codaw');
var codbo3 = require('./routes/codbo3');
var rocket = require('./routes/rocket');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('libs', express.static(path.join(__dirname + 'libs')));

app.use(express.static(path.join(__dirname, 'components')));
app.use('controllers', express.static(path.join(__dirname + 'controllers')));



app.use('/', routes);
app.use('/', hardline);
app.use('/', bf4);
app.use('/', codaw);
app.use('/', codbo3);
app.use('/', rocket);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
