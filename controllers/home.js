const express = require('express');
const models = require('../models');

const router = express.Router();
const app = express();

const passport = require('../middlewares/authentication');




router.get('/', (req, res) => {
  res.json({
    msg: "Successful GET to '/' route"
  });
});

router.post('/', (req, res) => {
  res.json({
    msg: "Successful POST to '/' route"
  });
});

router.put('/:id', (req, res) => {
  res.json({
    msg: "Successful PUT to '/' route",
    id: req.params.id
  });
});

router.delete('/:id', (req, res) => {
  res.json({
    msg: "Successful DELETE to '/' route",
    id: req.params.id
  });
});
///////////


router.get('/sign-up', (req, res) =>{
  res.render('sign-up');
});

router.post('/sign-up', (req,res)=>{
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


router.get('/login', (req,res)=>{
  res.render('login');
})

router.post('/login', (req,res) =>{
 passport.authenticate('local', {
      successRedirect: '../justdesserts/src/App.js',
      failureRedirect: '/login',
    })(req, res);
})

router.get('profile', (res,req)=>{
  passport.redirectIfNotLoggedIn('../justdesserts/src/App.js'),
  res.render('profile');
})

var port = process.env.API_PORT || 3000;
// app.use('/api', router);
app.listen(3000, () => console.log('Server listening on port 3001!') );

module.exports = router;
