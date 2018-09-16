const express = require('express');
const models = require('../models');

const router = express.Router();



router.post('/profile', (req, res) => {
	// this is for creating general posts
	// models.Post.create({

	// this is to create a post for the logged in user
	req.user.createPost({
		zip : req.body.zipcode,
		title: req.body.title,
		tag: req.body.tag,
		description: req.body.description,

	}).then((post) => {
		console.log("in then(post) function")
		res.status(200).json({message: "success"})
	}).catch((errors) => {
		res.status(400).json({message: "ERRORS!!"})
	});
});


router.get('/search/:search', (req,res) => {
	return models.Post.findAll({
		where:{
			tag: req.params.body.tag
		}
	}).then((allPosts) => {
		res.json(allPosts);
	})
} )

router.post('/search', (req, res) => {
	models.Post.findAll({
		where:{
			tag: req.body.tag
		}
	}).then((post) => {
		console.log("In Then of search post");
		console.log(post);
		res.status(200).json(post);
	}).catch((errors)=> {
		res.status(400).json({message:"Could not complete search"})
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


router.get('/', (req, res) => {
	models.Post.findAll({
		include: [{
			model: models.User}],
		 order:[[ 'createdAt', 'DESC']],	

	}).then((allPosts) => {
		res.json(allPosts);
	});
});

router.post('/', (req, res) => {
	// this is for creating general posts
	// models.Post.create({

	// this is to create a post for the logged in user
	req.user.createPost({
		zip : req.body.zipcode,
		title: req.body.title,
		tag: req.body.tag,
		description: req.body.description,

	}).then((post) => {
		console.log("in then(post) function")
		res.status(200).json({message: "success"})
	}).catch((errors) => {
		res.status(400).json({message: "ERRORS!!"})
	});
});




module.exports = router;