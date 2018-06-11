const supertest = require("supertest");
const assert = require('assert');
const server = require('../index')

let service = supertest.agent(server.listener);

// States test server
require('./state')(service, assert);

// City test server
require('./city')(service, assert);

// CEP test server
require('./cep')(service, assert);