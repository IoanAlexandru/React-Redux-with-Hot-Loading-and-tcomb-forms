var express = require('express');
var router = express.Router();
var passport = require('passport');

var persons = [{
    name: "Ioan",
    surname: "Alexandru",
    email: "lordjedi32@yahoo.com",
    age: 27,
    gender: "Male"
  }, {
    name: "Petrache",
    surname: "Denisa",
    email: "deny.sa_md@yahoo.com",
    age: 21,
    gender: "Female"    
  }];

/* GET home page. */
router.get('/' , function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addpersons', function(req, res, next){
	persons = req.body;
	res.json(persons);
});

router.get('/login', function(req, res) {
    res.render('login');
});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.post('/login',
  passport.authenticate('local'), function(req,res,next){
    res.redirect('/admin')
  }
);

router.get('/persons', function(req, res, next){
	res.send(persons);
})

module.exports = router;
