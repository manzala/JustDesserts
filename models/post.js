//All the POSTS by all users


module.exports =(sequelize, DataTypes) => {
	const Post = sequelize.define('post', {
		zip:{
			type: DataTypes.STRING,
      		allowNull: false,
      		validate: {
       		notEmpty: true,
     	 },
    	},
		title:{
			type: DataTypes.STRING,
      		allowNull: false,
      		validate: {
       		notEmpty: true,
     	 },
    	},
    	tag:{
			type: DataTypes.STRING,
      		allowNull: false,
      		validate: {
       		notEmpty: true,
     	 },
    	},
    	description:{
			type: DataTypes.STRING,
      		allowNull: false,
      		validate: {
       		notEmpty: true,
     	 },
    	},


	})

 	Post.associate = (models) => {
    models.Post.belongsTo(models.User);
  }


	return Post 
};