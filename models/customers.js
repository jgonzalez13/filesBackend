'use strict';
module.exports = (sequelize, DataTypes) => {

  const Customers = sequelize.define('Customers', {
    id_customer: DataTypes.INTEGER,
    userName: DataTypes.STRING,
    direction: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    token: DataTypes.STRING

  }, {});
  
  Customers.associate = function(models) {
    Customers.hasMany(models.Files,{
      as:'Files',
      sourceKey: 'id_customer',
      onDelete: 'cascade'
    });
    
  };

  return Customers;

};
