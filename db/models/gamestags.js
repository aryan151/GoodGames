'use strict';
module.exports = (sequelize, DataTypes) => {
  const GamesGenres = sequelize.define('GamesGenres', {
    gameId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER
  }, {});
  GamesGenres.associate = function(models) {
    // associations can be defined here
  };
  return GamesGenres;
};
