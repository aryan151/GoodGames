'use strict';

const { genGenre } = require("../util");

module.exports = {
  up: async (queryInterface, Sequelize) => {
      let genres = await genGenre()
      console.log(genres)
      return queryInterface.bulkInsert('Genres', genres, {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Genres', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
