'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('GamesToShelves', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            gameId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'Games' }
            },
            userShelfId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'UserShelves' }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('GamesToShelves');
    }
};
