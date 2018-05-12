const express = require('express');
const models = require('../models');

const router = express.Router();



router.post('/comments', (req, res) => {
	// this is for creating general posts
	// models.Post.create({

	// this is to create a post for the logged in user
	req.user.createComment({
		message: req.body.message,
	}).then((post) => {
		console.log("in then(post) function")
		res.status(200).json({message: "success"})
	}).catch((errors) => {
		res.status(400).json({message: "ERRORS!!"})
	});
});






module.exports = router;