'use strict';
module.exports = (sequelize, DataTypes) => {

  const Audience = sequelize.define('Audience', {
    id_customer: DataTypes.INTEGER,
    name: DataTypes.STRING,
    direction: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING

  }, {});
  
  Audience.associate = function(models) {
    Audience.hasMany(models.Files,{
      onDelete: 'cascade' 
    });
    
  };

  return Audience;

};