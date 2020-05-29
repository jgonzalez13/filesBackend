'use strict';
module.exports = (sequelize, DataTypes) => {

  const Audience = sequelize.define('Audiences', {
    id: DataTypes.INTEGER,
    court:DataTypes.STRING,
    date: DataTypes.DATE,
    type:DataTypes.STRING,
    id_file:DataTypes.STRING

  }, {});
  
  Audience.associate = function(models) {
    Audience.belongsTo(models.Files,{
      onDelete: 'cascade' 
    });
    
  };
  return Audience;

};

