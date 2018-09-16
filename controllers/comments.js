const express = require('express');
const models = require('../models');

const router = express.Router();


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
	// this is for creating general posts
	// models.Post.create({

	// this is to create a post for the logged in user
	req.user.createComment({
		message: req.body.message
	}).then((post) => {
		console.log("in then(post) function")
		res.status(200).json({message: "success"})
	}).catch((errors) => {
		res.status(400).json({message: "ERRORS!!"})
	});
});







module.exports = router;