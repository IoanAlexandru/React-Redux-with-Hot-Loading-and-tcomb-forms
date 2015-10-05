var express = require('express');
var router = express.Router();

var persons = [];

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
