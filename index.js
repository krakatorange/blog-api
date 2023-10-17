// index.js
'use strict'
const fastify = require('fastify')({ logger: true, ignoreTrailingSlash: true });
const swaggerOptions = require('./config/swaggerOptions');
const dbClient = require('./config/database');
const posts = require('./routes/posts');
require('dotenv').config();

function build(opts={}) {
    fastify.decorate('db', dbClient);
    fastify.register(require('@fastify/swagger'), {});
    fastify.register(require('@fastify/swagger-ui'), swaggerOptions);
    const index = fastify.register(posts);

    return index
}

module.exports = build