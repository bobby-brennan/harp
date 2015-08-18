var Router = module.exports = require('express').Router();

Router.get('/', function(req, res) {
  res.render('home');
})
