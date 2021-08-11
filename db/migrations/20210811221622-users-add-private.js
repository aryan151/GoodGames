'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'private', Sequelize.BOOLEAN);
},

down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'private');

}
};
