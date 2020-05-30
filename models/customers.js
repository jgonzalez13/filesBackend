'use strict';
module.exports = (sequelize, DataTypes) => {

  const Customers = sequelize.define('Customers', {
    id_customer: DataTypes.INTEGER,
    name: DataTypes.STRING,
    direction: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING

  }, {});
  
  Customers.associate = function(models) {
    Customers.hasMany(models.Files,{
      onDelete: 'cascade' 
    });
    
  };

  return Customers;

};
