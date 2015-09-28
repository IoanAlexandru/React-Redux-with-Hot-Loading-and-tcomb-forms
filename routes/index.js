var express = require('express');
var router = express.Router();

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
  }]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addpersons', function(req, res, next){
	persons = req.body;
	res.json(persons);
});

router.get('/persons', function(req, res, next){
	res.send(persons);
})

module.exports = router;
