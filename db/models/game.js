'use strict';
module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define('Game', {
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        releaseDate: DataTypes.DATE,
        imageURL: DataTypes.STRING,
    }, {});
    Game.associate = function (models) {
        // associations can be defined here
        Game.hasMany(models.Review, { foreignKey: 'gameId' });


        const columnMapping = {
            through: 'GamesToShelf',
            foreignKey: 'gameId',
            otherKey: 'userShelfId'
        }
        Game.belongsToMany(models.UserShelf, columnMapping);
    };
    return Game;
};


