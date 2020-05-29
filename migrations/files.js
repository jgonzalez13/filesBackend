'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Files', {
            id_file: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                unique:true
            },
            year: {
                type:Sequelize.DATE,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            counterpart:{
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: false

            },
            status:{
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty:false
                }
            },
            matter:{
                type: Sequelize.STRING,
                
                allowNull: false,
                validate: {
                    notEmpty:false
                }
            },
            id_customer:{
                type: Sequelize.STRING,
            
                allowNull: false,
                validate: {
                    notEmpty:false
                }
            } 
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Files');
    }
};