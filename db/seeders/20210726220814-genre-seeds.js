'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Genres', [
        {name:'Sandbox', createdAt: new Date(), updatedAt: new Date()},
        {name:'Real-time strategy', createdAt: new Date(), updatedAt: new Date()},
        {name:'Shooter', createdAt: new Date(), updatedAt: new Date()},
        {name:'MOBA', createdAt: new Date(), updatedAt: new Date()},
        {name:'RPG', createdAt: new Date(), updatedAt: new Date()},
        {name:'Sports', createdAt: new Date(), updatedAt: new Date()},
        {name:'Simulation', createdAt: new Date(), updatedAt: new Date()},
        {name:'Horror', createdAt: new Date(), updatedAt: new Date()},
        {name:'Action-adventure', createdAt: new Date(), updatedAt: new Date()},
        {name:'Puzzle', createdAt: new Date(), updatedAt: new Date()},
        {name:'Party', createdAt: new Date(), updatedAt: new Date()},
        {name:'Platformer', createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Genres', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
