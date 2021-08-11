'use strict';
module.exports = (sequelize, DataTypes) => {
  const GamesGenres = sequelize.define('GamesGenres', {
    gameId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER
  }, {});
  GamesGenres.associate = function(models) {
    // associations can be defined here
    GamesGenres.belongsTo(models.Game, {foreignKey: 'gameId' })
    GamesGenres.belongsTo(models.Genre, {foreignKey: 'genreId'})
  };
  return GamesGenres;
};
