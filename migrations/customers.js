'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Customers', {
      id_customer: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique:true
      },
      name: {
          type:Sequelize.STRING,
          allowNull: false,
          validate: {
              notEmpty: true
          }
      },
      direction:{
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
              notEmpty: true
          }
      },
      phone:{
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: false,
          unique:true
      },
      email:{
          type: Sequelize.STRING,
          unique:true,
          allowNull: false,
          validate: {
              notEmpty:true
          }
      }
    });

  },
   down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Customers');
    }
};