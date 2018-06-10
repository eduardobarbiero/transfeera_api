'use strict';
module.exports = (sequelize, DataTypes) => {
  var City = sequelize.define('City', {
    name: DataTypes.STRING
  }, {});  

  City.associate = (models) => {
    City.belongsTo(models.State, {
      foreignKey: 'stateId',
      onDelete: 'CASCADE',
      as: 'state'
    });

    City.hasMany(models.Cep, {
      foreignKey: 'cityId',
      as: 'ceps',
    });    
  };
  
  return City;
};