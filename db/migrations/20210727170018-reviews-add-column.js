'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('Reviews', 'rating', Sequelize.INTEGER);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('Reviews', 'rating');

    }
};
