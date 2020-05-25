'use strict';
module.exports = (sequelize, DataTypes) => {
  const Audience = sequelize.define('Audiences', {
    type: DataTypes.STRING,
    date: DataTypes.DATE
  }, {});
  Audience.associate = function(models) {
    Audience.belongsTo(models.Files);
  };
  return Audience;
};
