const express = require('express');
const models = require('../models');
const passport = require('../middlewares/authentication');

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.post('/', this.submit);

    return router;
  },
  index(req, res) {
   res.render('sign-up');
  },
  submit(req, res) {
    console.log("submit function was reached");
    models.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    }).then((user) => {
      req.login(user, () =>
          res.sendStatus(200)
       );
    }).catch(() => {
      res.sendStatus(401);
    });
  },
};
