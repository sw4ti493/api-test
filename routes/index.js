var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get("/t", function(req, res) {
	res.render('index', {title: 'Node', name: 'This is Node.'});
});

router.get("/t42", function(req, res) {
	res.render('index', {title: 'Node', name: 'This is Node.'});
});

router.get("/app", function(req, res) {
	res.render('restapp', {title: 'Restaurant App'});
});

module.exports = router;
