'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Users', [

        {username: 'John Smith', email: 'johnsmith@gmail.com', hashedPassword: '$2y$12$aJTw0.m0Bb/x1cjPHqiy1.lxvNzha3IjhbNzETXDHsd3qd8XBUCRC', private: false, createdAt: new Date(), updatedAt: new Date()},

        {username: 'Ryuko Matoi', email: 'rkmat@scissor.org', hashedPassword: '$2y$12$LvyCfR7cSnV00Q6.LF.of.0WFpxx6Aao2OYpIXqPk2wRalkBDCzZO', private: true, createdAt: new Date(), updatedAt: new Date()},

        {username: 'Phillip Dean', email: 'phd@college.edu', hashedPassword: '$2y$12$/gTJEHmwNNOinBvdAKGgzurfpnRT6w9ZTLRJLX09iZ.J3ZVV4j88C', private: false, createdAt: new Date(), updatedAt: new Date()},

        {username: 'Jane Smith', email: 'janesmith@gmail.com', hashedPassword: '$2y$12$RR729MLRtWD5zUYw42VoPeFLA94TLUmr0awS.3ohhSRQm/7SA6q4m', private: true, createdAt: new Date(), updatedAt: new Date()},

        {username: 'Jean Gray', email: 'jeangray@gmail.com', hashedPassword: '$2y$12$/Uf7CsAtGdnYY0VuHGVee.JTgqtlV2/obFDT4IsU6VBya7qLpalUq', private: false, createdAt: new Date(), updatedAt: new Date()},

      ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {truncate: true, cascade: true, restartIdentity: true});

  }
};
