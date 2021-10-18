'use strict';

const { genGenre } = require("../util");

module.exports = {
  up: async (queryInterface, Sequelize) => {
      let genres = await genGenre()

      await queryInterface.bulkInsert('Genres', [{name: 'Unknown Genre',  createdAt: new Date(),
      updatedAt: new Date()}], {});

      return queryInterface.bulkInsert('Genres', genres, {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Genres', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
