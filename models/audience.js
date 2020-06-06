'use strict';
module.exports = (sequelize, DataTypes) => {

  const Audience = sequelize.define('Audiences', {
    id_audience: DataTypes.INTEGER,
    court:DataTypes.STRING,
    date: DataTypes.DATE,
    type:DataTypes.STRING,
    id_file:DataTypes.STRING

  }, {});
  
  Audience.associate = function(models) {
    Audience.belongsTo(models.Files,{
      foreignKey: 'id_file',
      targetKey: 'id_file',
      onDelete: 'cascade' 
    });
    
  };
  return Audience;

};

