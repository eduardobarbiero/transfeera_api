const Cep = require('../models').Cep;
const City = require('../models').City;

module.exports = {
  create(req, res) {
    return Cep
      .create({
        address: req.payload.address,
        number: req.payload.number,
        complement: req.payload.complement,
        district: req.payload.district,        
        cityId: req.payload.cityId
      })
      .then(city => city)
      .catch(error => error);
  },
  index(req, res) {
    return Cep
      .all({ include: [{ model: City, as: 'city'}] })
      .then(ceps => ceps)
      .catch(error => error);
  },
  findById(req, res) {
    return Cep
      .findById(req.params.id, { include: [{ model: City, as: 'city'}] })
      .then(cep => cep)
      .catch(error => error);
  },
  destroy(req, res) {
    return Cep
      .destroy(
        {
          where: {
            id: req.params.id,
          }
        }
      )
      .then(cep => true)
      .catch(error => false);
  },
  update(req, res) {    
    return Cep
      .update(
        {
          address: req.payload.address,
          number: req.payload.number,
          complement: req.payload.complement,
          district: req.payload.district,          
          cityId: req.payload.cityId
        },
        {
          where: { id: req.params.id }
        }
      )
      .then(cep => true)
      .catch(error => false);
  }    
};