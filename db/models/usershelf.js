'use strict';
module.exports = (sequelize, DataTypes) => {
    const UserShelf = sequelize.define('UserShelf', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false,
        }
    }, {});
    UserShelf.associate = function (models) {
        // associations can be defined here
    UserShelf.belongsTo(models.User, { foreignKey: 'userId' });

    const columnMapping = {
            through: 'GamesToShelf',
            foreignKey: 'userShelfId',
            otherKey: 'gameId'
        }

    UserShelf.belongsToMany(models.Game, columnMapping);


    UserShelf.hasMany(models.GamesToShelf, {
        foreignKey: "userShelfId",
        onDelete: "cascade",
        hooks: true
    })
}
    return UserShelf;
};
