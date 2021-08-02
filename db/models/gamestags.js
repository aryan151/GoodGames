'use strict';
module.exports = (sequelize, DataTypes) => {
  const GamesTags = sequelize.define('GamesTags', {
    gameId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  GamesTags.associate = function(models) {
    // associations can be defined here
  };
  return GamesTags;
};