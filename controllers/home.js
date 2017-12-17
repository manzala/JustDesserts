const express = require('express');
const models = require('../models');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');

const router = express.Router();
const app = express();


app.use(express.static('public'));
app.use(cookieParser());
app.use(flash());



const passport = require('../middlewares/authentication');


///////WORKS CREATES DATABASE TABLE /////

router.get('/sign-up', (req, res) => {
  res.send('in sign-up')
})


// This is accessed via fetch and '/api/sign-up'
 router.post('/sign-up', (req,res)=>{
  console.log(req.body)
  //res.send({ data: 'got post for sign-up'})

   console.log("home.js herere")
   models.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
   }).then((user) => {
    console.log("in then() function")
     req.login(user,() => {
      
      console.log("in req.login() function")
      res.json({ message: "It WORKED", user: user});
     });
  }).catch((errors) => {
    res.status(401).json({message: "ERROR"});
   });
 });


router.get('/login', (req, res) => {
  res.send('in login ')
})

router.post('/login', passport.authenticate('local'), (req,res) =>{
  req.flash('login', 'Welcome');
  res.json({ message: 'Logged IN'});
  console.log('At Router');
})



module.exports = router;
