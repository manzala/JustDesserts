//All the POSTS by all users


module.exports =(sequelize, DataTypes) => {
	const Comment = sequelize.define('comment', {
		message:{
			type: DataTypes.STRING,
      		allowNull: false,
      		validate: {
       		notEmpty: false,
     	 },
    	},
	})

 	Comment.associate = (models) => {
    models.Comment.belongsTo(models.User);
  }


	return Comment
};