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
        },
        config: {
          cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
          }
        }
      }, 
      {
        method: 'GET',
        path: '/api',
        handler: (request, h) => {
            return 'Api running';
        },
        config: {
          cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
          }
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
        handler: statesController.index,
        config: {
          cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
          }
        }
      },
      { 
        method: 'POST',
        path: '/api/states',
        handler: statesController.create,
        config: {
          cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
          }
        }
      },
      { 
        method: 'DELETE',
        path: '/api/states/{id}',
        handler: statesController.destroy,
        config: {
          cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
          }
        }
      },
      { 
        method: 'PUT',
        path: '/api/states/{id}',
        handler: statesController.update,
        config: {
          cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
          }
        }
      }
    ]    
  );

  // Cities Routes
  server.route(
    [
      { 
        method: 'GET',
        path: '/api/cities',
        handler: citiesController.index,
        config: {
          cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
          }
        }
      },
      { 
        method: 'POST',
        path: '/api/cities',
        handler: citiesController.create,
        config: {
          cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
          }
        }
      },
      { 
        method: 'DELETE',
        path: '/api/cities/{id}',
        handler: citiesController.destroy,
        config: {
          cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
          }
        }
      },
      { 
        method: 'PUT',
        path: '/api/cities/{id}',
        handler: citiesController.update,
        config: {
          cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
          }
        }
      }
    ]
  );

  // Ceps Routes
  server.route(
    [
      { 
        method: 'GET',
        path: '/api/ceps',
        handler: cepsController.index,
        config: {
          cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
          }
        }
      },
      { 
        method: 'POST',
        path: '/api/ceps',
        handler: cepsController.create,
        config: {
          cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
          }
        }
      },
      { 
        method: 'DELETE',
        path: '/api/ceps/{id}',
        handler: cepsController.destroy,
        config: {
          cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
          }
        }
      },
      { 
        method: 'PUT',
        path: '/api/ceps/{id}',
        handler: cepsController.update,
        config: {
          cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
          }
        }
      }
    ]
  );
};