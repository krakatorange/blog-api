// server.js
'use strict'
const server = require('./index')({ logger: { level: 'info' } })
require('dotenv').config();

const port = process.env.PORT || 3000;

server.listen({ port: port }, err => {
    if (err) throw err;
    server.log.info(`server listening on ${port}`);
});