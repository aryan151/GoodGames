'use strict';
module.exports = (sequelize, DataTypes) => {
    const UserShelf = sequelize.define('UserShelf', {
        userId: DataTypes.INTEGER,
        name: DataTypes.STRING
    }, {});
    UserShelf.associate = function (models) {
        // associations can be defined here
        UserShelf.belongsTo(models.User, { foreignKey: 'userId' })
    };
    return UserShelf;
};
