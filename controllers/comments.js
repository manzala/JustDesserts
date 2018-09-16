const express = require('express');
const models = require('../models');

const router = express.Router();


<<<<<<< HEAD
//this route is: '/api/posts/'
router.get('/comments', (req, res) => {
	models.Post.findAll({
		where: {
			userId: req.user.id,
		},
		include: [{
			model: models.User
		}],
		 order:[[ 'createdAt', 'DESC']],
	}).then((allPosts) => {
		res.json(allPosts);
	});
});
router.post('/profile', (req, res) => {
=======

router.post('/comments', (req, res) => {
>>>>>>> 5909a3324cb4ce29579f1b1d61db8aa6092ae039
	// this is for creating general posts
	// models.Post.create({

	// this is to create a post for the logged in user
	req.user.createComment({
<<<<<<< HEAD
		message: req.body.message
=======
		message: req.body.message,
>>>>>>> 5909a3324cb4ce29579f1b1d61db8aa6092ae039
	}).then((post) => {
		console.log("in then(post) function")
		res.status(200).json({message: "success"})
	}).catch((errors) => {
		res.status(400).json({message: "ERRORS!!"})
	});
});






<<<<<<< HEAD

=======
>>>>>>> 5909a3324cb4ce29579f1b1d61db8aa6092ae039
module.exports = router;