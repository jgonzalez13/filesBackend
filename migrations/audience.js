'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Audience', {
            id_audience: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                unique:true
            },
            court:{
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            date: {
                type:Sequelize.DATE,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            type:{
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: false
            },
            id_file:{
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty:false
                }
            } 
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Audience');
    }
};