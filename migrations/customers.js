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
      userName:{
        type: Sequelize.STRING,
        unique:true,
        allowNull: false,
        validate: {
            notEmpty:true
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
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
      },
      email:{
          type: Sequelize.STRING,
          unique:true,
          allowNull: false,
          validate: {
              notEmpty:true
          }
      },
      password:{
            type: Sequelize.STRING,
            unique:true,
            allowNull: false,
            validate: {
                notEmpty:true
            }
        },
        token:{
            type: Sequelize.STRING,
            unique:true,
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
