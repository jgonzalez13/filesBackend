'use strict';
module.exports = (sequelize, DataTypes) => {
  const Files = sequelize.define('Files', {
    year: DataTypes.DATE,
    counterpart: DataTypes.STRING,
    status: DataTypes.STRING,
    metter: DataTypes.STRING,
    location: DataTypes.STRING,
    id_customer: DataTypes.INTEGER
  }, {});
  Files.associate = function(models) {
    // associations can be defined here
    Files.belongsTo(models.Customers
      // ,{
      // foreignKey: 'id_customer',
      // targetKey: 'id_customer'
    // }
    ),
    Files.hasMany(models.Audience
      // , { 
    //   foreignKey: 'id_file',
    //   sourceKey: 'id_file'
    // }
    )
  };
  return Files;
};