'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    name: DataTypes.STRING
  }, {});
  Genre.associate = function(models) {
    // associations can be defined here
    const genreMapping = {
      through: 'GamesGenres',
      foreignKey: 'genreId',
      otherKey: 'gameId'
  }

  Genre.belongsToMany(models.Game, genreMapping)
  };
  return Genre;
};
