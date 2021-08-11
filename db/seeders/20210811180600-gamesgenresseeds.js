'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('GamesGenres', [
      {gameId:1,genreId:9,createdAt: new Date(), updatedAt: new Date()},
      {gameId:1,genreId:10,createdAt: new Date(), updatedAt: new Date()},

      {gameId:2,genreId:9,createdAt: new Date(), updatedAt: new Date()},
      {gameId:2,genreId:3,createdAt: new Date(), updatedAt: new Date()},

      {gameId:3,genreId:5,createdAt: new Date(), updatedAt: new Date()},

      {gameId:4,genreId:9,createdAt: new Date(), updatedAt: new Date()},
      {gameId:4,genreId:5,createdAt: new Date(), updatedAt: new Date()},


      {gameId:5,genreId:9,createdAt: new Date(), updatedAt: new Date()},
      {gameId:5,genreId:5,createdAt: new Date(), updatedAt: new Date()},


      {gameId:6,genreId:1,createdAt: new Date(), updatedAt: new Date()},
      {gameId:6,genreId:9,createdAt: new Date(), updatedAt: new Date()},

      {gameId:7,genreId:10,createdAt: new Date(), updatedAt: new Date()},


      {gameId:8,genreId:3,createdAt: new Date(), updatedAt: new Date()},
      {gameId:8,genreId:5,createdAt: new Date(), updatedAt: new Date()},

      {gameId:9,genreId:9,createdAt: new Date(), updatedAt: new Date()},
      {gameId:9,genreId:5,createdAt: new Date(), updatedAt: new Date()},



      {gameId:10,genreId:5,createdAt: new Date(), updatedAt: new Date()},


      {gameId:11,genreId:1,createdAt: new Date(), updatedAt: new Date()},
      {gameId:11,genreId:7,createdAt: new Date(), updatedAt: new Date()},


      {gameId:12,genreId:1,createdAt: new Date(), updatedAt: new Date()},
      {gameId:12,genreId:7,createdAt: new Date(), updatedAt: new Date()},


      {gameId:13,genreId:5,createdAt: new Date(), updatedAt: new Date()},


      {gameId:14,genreId:7,createdAt: new Date(), updatedAt: new Date()},


      {gameId:15,genreId:9,createdAt: new Date(), updatedAt: new Date()},
      {gameId:15,genreId:5,createdAt: new Date(), updatedAt: new Date()},


      {gameId:16,genreId:7,createdAt: new Date(), updatedAt: new Date()},

      {gameId:17,genreId:9,createdAt: new Date(), updatedAt: new Date()},
      {gameId:17,genreId:5,createdAt: new Date(), updatedAt: new Date()},




     ], {});

  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('GamesGenres', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
