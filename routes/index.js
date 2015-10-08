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
    res.render('login', {error: req.flash('error')});
});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.post('/login', function(req, res, next){
  passport.authenticate('local', function(err, user, info){
    if (err) { return next(err); }
    if (!user) { 
      req.flash('error', 'Invalid user credentials')
      return res.redirect('/login'); 
    }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect(req.session.returnTo || '/admin');
    });        
  })(req,res,next)
});

router.get('/persons', function(req, res, next){
	res.send(persons);
})

module.exports = router;
