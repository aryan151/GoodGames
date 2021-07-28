'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        hashedPassword: DataTypes.STRING
    }, {});
    User.associate = function (models) {
        // associations can be defined here
        User.hasMany(models.Review, { foreignKey: 'userId' })
        User.hasMany(models.UserShelf, { foreignKey: 'userId' })
    };
    return User;
};
