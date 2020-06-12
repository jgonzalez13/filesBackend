'use strict';
module.exports = (sequelize, DataTypes) => {
  const Audience = sequelize.define('Audience', {
    court: DataTypes.STRING,
    date: DataTypes.DATE,
    type: DataTypes.STRING,
    id_file: DataTypes.INTEGER
  }, {});
  Audience.associate = function(models) {
    // associations can be defined here
    Audience.belongsTo(models.Files
    //   ,{
    //   foreignKey: 'id_file',
    //   targetKey: 'id_file'
    // }
    );
  };
  return Audience;
};