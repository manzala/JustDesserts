const express = require('express');
const models = require ('../models');

module.exports = {
	registerRouter(){
		const router = express.Router();

		router.get('/', this.index);
		router.get('/:email', this.show);

		return router;
	},

	index(req, res){
		models.User.findAll({
		}).then((allUsers) => {
			res.render('email', {allUsers});
		});
	},

	show(req, res){
		models.User.findOne({
			where:{
				email: req.params.email,
			},
		}).then((user) => {
			if(user){	
				res.render('users/single', {user: user});
			} else{
				res.redirect('/users');
			}
		}).catch(() => {
			res.redirect('/users');
		});
	},
};