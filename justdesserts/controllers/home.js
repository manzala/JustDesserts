const express = require('express');
const models = require('../models');
const passport = require('../middlewares/authentication');
const router = express.Router();

router.get('/', (req, res) =>{
  res.render('Signup');
});

router.post('/Signup', (req,res)=>{
  models.Users.create({
    firstName: req.body.fistName,
    lastName: req.body.lastName,
    email: req.body.email,
    password_hash: req.body.password,
  }).then((user) => {
    req.login(user,() => {
      res.redirect('/profile');
    });
  });
});