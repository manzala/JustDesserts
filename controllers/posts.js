const express = require('express');
const models = require('../models');

const router = express.Router();


// this route is: '/api/posts/'
router.get('/', (req, res) => {
	models.Post.findAll().then((allPosts) => {
		res.json(allPosts);
	});
});

// this route is: '/api/posts/zip/:zipcode'
router.get('/zip/:zipcode', (req, res) => {
	models.Post.findAll({
		where: {
			zip: req.params.zipcode
		}
	}).then((allPosts) => {
		res.json(allPosts);
	});
});


router.post('/', (req, res) => {
	// this is for creating general posts
	// models.Post.create({

	// this is to create a post for the logged in user
	req.user.createPost({
		
	}).then((post) => {

	})
})


module.exports = router;