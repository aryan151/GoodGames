'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('GamesToShelves', [
            {gameId: 1, userShelfId: 1, createdAt: new Date(), updatedAt: new Date()},
            {gameId: 2, userShelfId: 2, createdAt: new Date(), updatedAt: new Date()},
            {gameId: 3, userShelfId: 2, createdAt: new Date(), updatedAt: new Date()},
            {gameId: 4, userShelfId: 3, createdAt: new Date(), updatedAt: new Date()},
            {gameId: 5, userShelfId: 3, createdAt: new Date(), updatedAt: new Date()},
            {gameId: 9, userShelfId: 4, createdAt: new Date(), updatedAt: new Date()},

            {gameId: 1, userShelfId: 5, createdAt: new Date(), updatedAt: new Date()},
            {gameId: 2, userShelfId: 5, createdAt: new Date(), updatedAt: new Date()},
            {gameId: 6, userShelfId: 6, createdAt: new Date(), updatedAt: new Date()},
            {gameId: 7, userShelfId: 7, createdAt: new Date(), updatedAt: new Date()},
            {gameId: 8, userShelfId: 7, createdAt: new Date(), updatedAt: new Date()},
            {gameId: 10, userShelfId: 7, createdAt: new Date(), updatedAt: new Date()},
            {gameId: 11, userShelfId: 7, createdAt: new Date(), updatedAt: new Date()},

            {gameId: 2, userShelfId: 8, createdAt: new Date(), updatedAt: new Date()},
            {gameId: 4, userShelfId: 8, createdAt: new Date(), updatedAt: new Date()},
            {gameId: 5, userShelfId: 8, createdAt: new Date(), updatedAt: new Date()},
            {gameId: 6, userShelfId: 9, createdAt: new Date(), updatedAt: new Date()},
            {gameId: 7, userShelfId: 9, createdAt: new Date(), updatedAt: new Date()},
            {gameId: 8, userShelfId: 11, createdAt: new Date(), updatedAt: new Date()},

            {gameId: 4, userShelfId: 12, createdAt: new Date(), updatedAt: new Date()},
            {gameId: 5, userShelfId: 13, createdAt: new Date(), updatedAt: new Date()},
            {gameId: 6, userShelfId: 13, createdAt: new Date(), updatedAt: new Date()},
            {gameId: 8, userShelfId: 13, createdAt: new Date(), updatedAt: new Date()},
            {gameId: 9, userShelfId: 13, createdAt: new Date(), updatedAt: new Date()},
            {gameId: 11, userShelfId: 14, createdAt: new Date(), updatedAt: new Date()},

            {gameId: 1, userShelfId: 15, createdAt: new Date(), updatedAt: new Date()},
            {gameId: 2, userShelfId: 16, createdAt: new Date(), updatedAt: new Date()},
            {gameId: 3, userShelfId: 17, createdAt: new Date(), updatedAt: new Date()},
            {gameId: 4, userShelfId: 17, createdAt: new Date(), updatedAt: new Date()},
            {gameId: 8, userShelfId: 17, createdAt: new Date(), updatedAt: new Date()},
            {gameId: 10, userShelfId: 17, createdAt: new Date(), updatedAt: new Date()},
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('GamesToShelves', null, {truncate: true, cascade: true, restartIdentity: true});
    }
};
