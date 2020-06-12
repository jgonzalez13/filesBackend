'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Customers', [{
      	id_customer: 1,
          userName: "ocaregr",
          direction: "my callezota",
          phone: "00 000 000",
          email: "osacr@gmail.com",
          password: "123",
          token: ""
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
