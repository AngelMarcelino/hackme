const express = require('express');
const router = express.Router();
const { getAllLogs } = require('../services/get-important-logs');

router.get('/', async (req, res) => {
  console.log(req.cookies);
  if (!req.cookies['user']) {
    res.redirect('/account/login')
  } else {
    const logs = await getAllLogs();
    console.log(logs);
    res.render('logs', { logArray: logs, title: 'Logs' });
  }
});

module.exports = router;
