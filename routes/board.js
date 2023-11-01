const express = require('express');
const router = express.Router();

/* GET board page. */
router.get('/', function(req, res, next) {
  const query = req.query;
  console.log(`rows ${query.rows}`);
  console.log(`cols ${query.cols}`);
  res.render('board', { title: 'Board Display', query: req.query });
});

module.exports = router;
