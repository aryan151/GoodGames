'use strict';
module.exports = (sequelize, DataTypes) => {
    const GamesToShelf = sequelize.define('GamesToShelf', {
        gameId: {
            type: DataTypes.INTEGER,
        },
        userShelfId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {});
    GamesToShelf.associate = function (models) {
        // associations can be defined here
        GamesToShelf.hasMany(models.Game, { foreignKey: 'gameId'})
        GamesToShelf.belongsTo(models.UserShelf, { foreignKey: 'userShelfId' })
    };
    return GamesToShelf;
};
