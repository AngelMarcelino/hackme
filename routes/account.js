var express = require('express');
var router = express.Router();
var userManager = require('../services/user-manager');

/* GET home page. */
router.get('/login', function(req, res, next) {
  console.log(req.cookies);
  if (req.cookies['user']) {
    res.redirect('/logs');
  } else {
    res.render('login', { title: 'Iniciar sesión' });
  }
});

router.post('/login', async function(req, res, next) {
  console.log(req.body);
  if (req.cookies['user']) {
    return res.redirect('/account/login');
  }
  try {
    const result = await userManager.findUser(req.body.email, req.body.password);
    if (result) {
      res.cookie('user', req.body.email, {
        maxAge: 24 * 60 * 60 * 1000 
      });
      res.redirect('/logs');
    } else {
      res.render('login', { title: 'Iniciar sesión', form: { email: req.body.email }, message: 'Correo y/o contraseña incorrectos' });
      console.log(req.body);
    }
  } catch (e){
    console.log(e);
    res.status(500)
      .end();
  }
});


router.get('/logout', async function(req, res, next) {
  try {
    res.clearCookie('user');
    res.redirect('/account/login')
  } catch (e) {
    console.log(e);
    res.status(500)
      .end();
  }
});

module.exports = router;
