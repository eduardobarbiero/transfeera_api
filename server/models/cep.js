'use strict';
module.exports = (sequelize, DataTypes) => {
  let Cep = sequelize.define('Cep', {
    address: { type: DataTypes.STRING },
    number: { type: DataTypes.STRING },
    district: { type: DataTypes.STRING },
    complement: { type: DataTypes.STRING }    
  }, {});

  Cep.associate = function(models) {
    Cep.belongsTo(models.City, {
      foreignKey: 'cityId',
      onDelete: 'CASCADE',
      as: 'city'
    });
  };

  return Cep;
};