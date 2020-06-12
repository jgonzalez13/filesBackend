'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customers = sequelize.define('Customers', {
    userName: DataTypes.STRING,
    direction: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    token: DataTypes.STRING
  }, {});
  Customers.associate = function(models) {
    // associations can be defined here
    Customers.hasMany(models.Files
      // {
      // foreignKey: 'id_customer',
      // sourceKey: 'id_customer',
      // onDelete: 'cascade'
    // }
    );
  };
  return Customers;
};