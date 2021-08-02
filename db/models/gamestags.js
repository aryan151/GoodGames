'use strict';
module.exports = (sequelize, DataTypes) => {
  const GamesGenres = sequelize.define('GamesGenres', {
    gameId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  GamesGenres.associate = function(models) {
    // associations can be defined here
  };
  return GamesGenres;
};
