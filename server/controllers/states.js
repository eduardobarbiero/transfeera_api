const State = require('../models').State;

module.exports = {
  create(req, res) {
    return State
      .create({
        name: req.payload.name,
      })
      .then(state => state)
      .catch(error => error);
  },
  index(req, res) {
    return State
      .all()
      .then(states => states)
      .catch(error => error);
  },
  findById(req, res) {
    return State
      .findById(req.params.id)
      .then(state => state)
      .catch(error => error);
  },
  destroy(req, res) {
    return State
      .destroy(
        {
          where: {
            id: req.params.id,
          }
        }
      )
      .then(state => true)
      .catch(error => false);
  },
  update(req, res) {    
    return State
      .update(
        {
          name: req.payload.name
        },
        {
          where: { id: req.params.id }
        }
      )
      .then(state => true)
      .catch(error => false);
  }    
};