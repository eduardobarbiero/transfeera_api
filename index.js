'use strict';

const Hapi = require('hapi');

const server = Hapi.server({
    port: process.env.NODE_PORT || 3000,
    host: 'localhost',    
    routes: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    }
});

require('./server/routes')(server);

const init = async () => {

    await server.start();    
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

module.exports = server;

init();