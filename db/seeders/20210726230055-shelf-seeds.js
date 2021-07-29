'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('UserShelves', [
            { userId: 1, name: 'Want to play', createdAt: new Date(), updatedAt: new Date() },
            { userId: 1, name: 'Currently Playing', createdAt: new Date(), updatedAt: new Date() },
            { userId: 1, name: 'Played', createdAt: new Date(), updatedAt: new Date() },
            { userId: 1, name: 'My Faves', createdAt: new Date(), updatedAt: new Date() },
            { userId: 2, name: 'Want to play', createdAt: new Date(), updatedAt: new Date() },
            { userId: 2, name: 'Currently Playing', createdAt: new Date(), updatedAt: new Date() },
            { userId: 2, name: 'Played', createdAt: new Date(), updatedAt: new Date() },
            { userId: 3, name: 'Want to play', createdAt: new Date(), updatedAt: new Date() },
            { userId: 3, name: 'Currently Playing', createdAt: new Date(), updatedAt: new Date() },
            { userId: 3, name: 'Played', createdAt: new Date(), updatedAt: new Date() },
            { userId: 3, name: 'Kids Games', createdAt: new Date(), updatedAt: new Date() },
            { userId: 4, name: 'Want to play', createdAt: new Date(), updatedAt: new Date() },
            { userId: 4, name: 'Currently Playing', createdAt: new Date(), updatedAt: new Date() },
            { userId: 4, name: 'Played', createdAt: new Date(), updatedAt: new Date() },
            { userId: 5, name: 'Want to play', createdAt: new Date(), updatedAt: new Date() },
            { userId: 5, name: 'Currently Playing', createdAt: new Date(), updatedAt: new Date() },
            { userId: 5, name: 'Played', createdAt: new Date(), updatedAt: new Date() },

            { userId: 1, name: 'friends are playing', createdAt: new Date(), updatedAt: new Date() },
            { userId: 1, name: 'never play again', createdAt: new Date(), updatedAt: new Date() },
            { userId: 1, name: 'management sims', createdAt: new Date(), updatedAt: new Date() },
            { userId: 2, name: 'maybe...', createdAt: new Date(), updatedAt: new Date() },
            { userId: 2, name: 'for the kids', createdAt: new Date(), updatedAt: new Date() },
            { userId: 3, name: 'never play again', createdAt: new Date(), updatedAt: new Date() },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('UserShelves', null, {truncate: true, cascade: true, restartIdentity: true});
    }
};
