'use strict';

const { genUser } = require("../util");

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Users', genUser(50), {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Users', null, {truncate: true, cascade: true, restartIdentity: true});

  }
};
