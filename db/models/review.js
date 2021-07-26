'use strict';
module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
        content: DataTypes.TEXT,
        userId: DataTypes.INTEGER,
        gameId: DataTypes.INTEGER
    }, {});
    Review.associate = function (models) {
        // associations can be defined here
        Review.belongsTo(models.User, { foreignKey: 'userId' });
        Review.belongsTo(models.Game, { foreignKey: 'gameId' })
    };
    return Review;
};
