const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const basename = path.basename(module.filename);

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach(file => {
    const fileName = file.substr(0, file.length - 3);
  //router.use(`/${fileName}`, require(`./${fileName}`).registerRouter());
  });


/**router.get('/',(req,res) => {
	//res.use('/api', require('./home'));
	res.render('homepage')
  //res.render('login');
});


/**router.use('/Signup', (req, res) => {
	res.render('sign-up');
})

**/
//router.use('/', require('./login'));
//router.use('/Signup', require('./sign-up'));
router.use('/api', require('./home'));
router.use('/login', require('./login'));
router.use('/Signup', require('./sign-up'));

/***router.get('/Signup', (req,res)=>{
  console.log("home.js hereee")
  models.User.create({
    firstName: req.body.fistName,
    lastName: req.body.lastName,
    email: req.body.email,
    password_hash: req.body.password,
  }).then((user) => {
    req.login(user,() => {
      res.json({ message: "It WORKED"});
    });
  });
});
***/
//router.use('/api', require('./home'));
module.exports = router;