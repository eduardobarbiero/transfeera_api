const City = require('../models').City;

const State = require('../models').State;

module.exports = {
  create(req, res) {
    return City
      .create({
        name: req.payload.name,
        stateId: req.payload.stateId
      })
      .then(city => city)
      .catch(error => error);
  },
  index(req, res) {
    return City
      .findAll({ include: [{ model: State, as: 'state'}] })
      .then(cities => cities)
      .catch(error => error);
  },
  destroy(req, res) {
    return City
      .destroy(
        {
          where: {
            id: req.params.id,
          }
        }
      )
      .then(city => true)
      .catch(error => false);
  },
  update(req, res) {    
    return City
      .update(
        {
          name: req.payload.name,
          stateId: req.payload.stateId
        },
        {
          where: { id: req.params.id }
        }
      )
      .then(city => true)
      .catch(error => false);
  }    
};