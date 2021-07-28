'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('Games', 'imageURL', Sequelize.STRING);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('Games', 'imageURL');

    }
};
