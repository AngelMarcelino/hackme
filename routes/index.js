var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (!req.cookies['user']) {
  } else {
    res.redirect('/logs')
  }
});

router.get('/main', function(req, res, next){
  res.render('main', {  })
})

module.exports = router;
