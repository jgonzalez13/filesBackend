'use strict';
module.exports = (sequelize, DataTypes) => {
  const Files = sequelize.define('Files', {
    title: DataTypes.STRING
  }, {});
  Files.associate = function(models) {
    Files.hasMany(models.Audience, { 
      onDelete: 'cascade' 
    });
  };
  return Files;
};
