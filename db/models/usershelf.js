'use strict';
module.exports = (sequelize, DataTypes) => {
    const UserShelf = sequelize.define('UserShelf', {
        userId: DataTypes.INTEGER,
        name: DataTypes.STRING
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
    };
    return UserShelf;
};
