// index.js
const fastify = require('fastify')({ logger: true, ignoreTrailingSlash: true });
const swaggerOptions = require('./config/swaggerOptions');
const dbClient = require('./config/database');
const posts = require('./routes/posts');
require('dotenv').config();

const port = process.env.PORT || 3001;

fastify.decorate('db', dbClient);
fastify.register(require('@fastify/swagger'), {});
fastify.register(require('@fastify/swagger-ui'), swaggerOptions);
fastify.register(posts);

fastify.listen({ port: port }, err => {
    if (err) throw err;
    fastify.log.info(`server listening on ${port}`);
});