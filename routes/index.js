var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


var session = require('express-session');
var bodyParser = require('body-parser');
var passport = require('passport');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
	secret : "secret",
	saveUninitialized: true,
	resave: true
}))

app.use(passport.initialize());
app.use(passport.session());

app.listen(3333);

module.exports = router;
