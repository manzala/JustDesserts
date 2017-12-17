const express = require('express');
const password = require('../middlewares/authentication');
const Require = require('../middlewares/redirect');

module.exports = {
	registerRouter(){
		const router = express.Router();

		router.get('/api', Redirect.ifLoggedIn('/profile'), this.index);
		router.post('/', this.login);

		return router;
	},

	index(req, res){
		res.render('/profile', {error: req.flash('error')});
	},

	login(req, res){
		passport.authentication('local' , {
			successRedirect: '/profile',
			failureRedirect: '/login',
			failureFlah: true,
			successFlash: true,
		}) (req, res);

	},
};