const express = require('express');
const redirect = require('../middlewares/redirect');

module.exports = {
	registerRouter(){
		const router = express.Router();

		router.post('/', this.logout);

		return router;
	},

	logout(req, res){
		req.logout();
		res.redirect('/');
	},
};