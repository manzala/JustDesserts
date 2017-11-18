const express = require('express');
const models = require('../models');

const router = express.Router();
const app = express();

const passport = require('../middlewares/authentication');




// router.get('/', (req, res) => {
//   res.json({
//     msg: "Successful GET to '/' route"
//   });
// });

// router.post('/', (req, res) => {
//   res.json({
//     msg: "Successful POST to '/' route"
//   });
// });

// router.put('/:id', (req, res) => {
//   res.json({
//     msg: "Successful PUT to '/' route",
//     id: req.params.id
//   });
// });

// router.delete('/:id', (req, res) => {
//   res.json({
//     msg: "Successful DELETE to '/' route",
//     id: req.params.id
//   });
// });
///////////

///////WORKS CREATES DATABASE TABLE /////


// This is accessed via fetch and '/api/sign-up'
 router.post('/sign-up', (req,res)=>{
   console.log("home.js herere")
   models.User.create({
    firstName: req.body.firstName,
     lastName: req.body.lastName,
     email: req.body.email,
     password_hash: req.body.password,
   }).then((user) => {
    console.log("in then() function")
     req.login(user,() => {
      res.json({ message: "It WORKED"});
      console.log("in req.login() function")
      res.json({ message: "It WORKED", user: user});
     });
  }).catch((errors) => {
    res.json({message: "ERROR"});
   });
 });



router.post('/login', passport.authenticate('local'), (req,res) =>{
  res.json({ message: 'Logged IN'});
})

// router.get('profile', (res,req)=>{
//   passport.redirectIfNotLoggedIn('../justdesserts/src/App.js'),
//   res.render('profile');
// })

//var port = process.env.API_PORT || 3000;
// app.use('/api', router);
//app.listen(3000, () => console.log('Server listening on port 3001!') );

module.exports = router;
