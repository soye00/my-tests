var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var expressSession = require("express-session");
var logger = require('morgan');



require("dotenv").config();  // .env
const cors = require('cors');
const nunjucks = require("nunjucks");

const payRouter = require('./routes/pay');
const cleanerRouter = require('./routes/cleaner');
const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin');
const resRouter = require('./routes/reservation');
const loginRouter = require('./routes/login');

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession({
  secret:'adkjsljkdf',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: false,
  },
  name: "session-cookie",
}))
app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/reservation', resRouter);
app.use('/pay', payRouter);
app.use('/cleaner', cleanerRouter )
app.use('/login', loginRouter);

module.exports = app;
