// routes/posts.js
const fastifyPlugin = require('fastify-plugin');
const postSchemas = require('../config/schemas/postSchemas');

async function routes(fastify, options) {
    // Create post
    fastify.route({
        method: 'POST',
        url: '/api/posts',
        schema: postSchemas.createPost,
        handler: async (request, reply) => {
            const { title, description } = request.body;
            const { rows } = await fastify.db.query(
                'INSERT INTO posts (title, description) VALUES ($1, $2) RETURNING *;',
                [title, description]
            );
            return rows[0];
        },
    });

    // Get all posts
    fastify.route({
        method: 'GET',
        url: '/api/posts',
        schema: postSchemas.getAllPosts,
        handler: async (request, reply) => {
            const { rows } = await fastify.db.query('SELECT * FROM posts;');
            return rows;
        },
    });

    // Get a post
    fastify.route({
        method: 'GET',
        url: '/api/posts/:postId',
        schema: postSchemas.getPost,
        handler: async (request, reply) => {
            const { postId } = request.params;
            const { rows } = await fastify.db.query(
                'SELECT * FROM posts WHERE id = $1;',
                [postId]
            );
            return rows[0] || reply.code(404).send({ error: 'Post not found' });
        },
    });

    // Update a post
    fastify.route({
        method: 'PUT',
        url: '/api/posts/:postId',
        schema: postSchemas.updatePost,
        handler: async (request, reply) => {
            const { postId } = request.params;
            const { title, description } = request.body;
            const { rows } = await fastify.db.query(
                'UPDATE posts SET title = $1, description = $2, updated_at = NOW() WHERE id = $3 RETURNING *;',
                [title, description, postId]
            );
            return rows[0] || reply.code(404).send({ error: 'Post not found' });
        },
    });

    // Delete a post
    fastify.route({
        method: 'DELETE',
        url: '/api/posts/:postId',
        schema: postSchemas.deletePost,
        handler: async (request, reply) => {
            const { postId } = request.params;
            const { rows } = await fastify.db.query(
                'DELETE FROM posts WHERE id = $1 RETURNING *;',
                [postId]
            );
            return rows[0] || reply.code(404).send({ error: 'Post not found' });
        },
    });
}

module.exports = fastifyPlugin(routes);