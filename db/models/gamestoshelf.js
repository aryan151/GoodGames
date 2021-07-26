'use strict';
module.exports = (sequelize, DataTypes) => {
    const GamesToShelf = sequelize.define('GamesToShelf', {
        gameId: DataTypes.INTEGER,
        userShelfId: DataTypes.INTEGER
    }, {});
    GamesToShelf.associate = function (models) {
        // associations can be defined here
    };
    return GamesToShelf;
};
