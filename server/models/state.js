'use strict';
module.exports = (sequelize, DataTypes) => {
  let State = sequelize.define('State', {
    name: DataTypes.STRING
  }, {});
  
  State.associate = function(models) {    
    State.hasMany(models.City, {
      foreignKey: 'stateId',
      as: 'cities',
    });    
  };

  return State;
};