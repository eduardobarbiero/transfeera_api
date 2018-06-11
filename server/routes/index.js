const statesController = require('../controllers').states;
const citiesController = require('../controllers').cities;
const cepsController = require('../controllers').ceps;

module.exports = (server) => {

  // System Routes
  server.route(
    [
      {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'System running';
        }
      }, 
      {
        method: 'GET',
        path: '/api',
        handler: (request, h) => {
            return 'Api running';
        }
      }, 
    ]
  );

  // States Routes
  server.route(
    [
      { 
        method: 'GET',
        path: '/api/states',
        handler: statesController.index
      },
      { 
        method: 'POST',
        path: '/api/states',
        handler: statesController.create
      },
      { 
        method: 'DELETE',
        path: '/api/states/{id}',
        handler: statesController.destroy
      },
      { 
        method: 'PUT',
        path: '/api/states/{id}',
        handler: statesController.update
      }
    ]    
  );

  // Cities Routes
  server.route(
    [
      { 
        method: 'GET',
        path: '/api/cities',
        handler: citiesController.index
      },
      { 
        method: 'POST',
        path: '/api/cities',
        handler: citiesController.create
      },
      { 
        method: 'DELETE',
        path: '/api/cities/{id}',
        handler: citiesController.destroy
      },
      { 
        method: 'PUT',
        path: '/api/cities/{id}',
        handler: citiesController.update
      }
    ]
  );

  // Ceps Routes
  server.route(
    [
      { 
        method: 'GET',
        path: '/api/ceps',
        handler: cepsController.index
      },
      { 
        method: 'POST',
        path: '/api/ceps',
        handler: cepsController.create
      },
      { 
        method: 'DELETE',
        path: '/api/ceps/{id}',
        handler: cepsController.destroy
      },
      { 
        method: 'PUT',
        path: '/api/ceps/{id}',
        handler: cepsController.update
      }
    ]
  );
};