'use strict';
module.exports = (sequelize, DataTypes) => {

  const Files = sequelize.define('Files', {
    id_file: DataTypes.INTEGER,
    year: DataTypes.DATE,
    counterpart : DataTypes.STRING,
    status:DataTypes.STRING,
    matter:DataTypes.STRING,
    id_customer:DataTypes.INTEGER
  }, {});
  Files.associate = function(models) {
    Files.hasMany(models.Audience, { 
      onDelete: 'cascade' 
    });
  };
  return Files;
};