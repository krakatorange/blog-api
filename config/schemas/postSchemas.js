// config/schemas/postSchemas.js
module.exports = {
    createPost: {
        description: 'Create a new blog post',
        tags: ['Posts'],
        body: {
            type: 'object',
            properties: {
                title: { type: 'string' },
                description: { type: 'string' },
            },
            required: ['title', 'description'],
        },
        response: {
            200: {
                description: 'Successful operation',
                type: 'object',
                properties: {
                    id: { type: 'number' },
                    title: { type: 'string' },
                    description: { type: 'string' },
                    created_at: { type: 'string' },
                    updated_at: { type: 'string' },
                },
            },
        },
    },
    getAllPosts: {
        description: 'Retrieve all blog posts',
        tags: ['Posts'],
        response: {
            200: {
                description: 'Successful operation',
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        id: { type: 'number' },
                        title: { type: 'string' },
                        description: { type: 'string' },
                        created_at: { type: 'string' },
                        updated_at: { type: 'string' },
                    },
                },
            },
        },
    },
    getPost: {
        description: 'Retrieve a specific blog post',
        tags: ['Posts'],
        params: {
            type: 'object',
            properties: {
                postId: { type: 'number' },
            },
            required: ['postId'],
        },
        response: {
            200: {
                description: 'Successful operation',
                type: 'object',
                properties: {
                    id: { type: 'number' },
                    title: { type: 'string' },
                    description: { type: 'string' },
                    created_at: { type: 'string' },
                    updated_at: { type: 'string' },
                },
            },
            404: {
                description: 'Post not found',
                type: 'object',
                properties: {
                    error: { type: 'string' },
                },
            },
        },
    },
    updatePost: {
        description: 'Update a specific blog post',
        tags: ['Posts'],
        params: {
            type: 'object',
            properties: {
                postId: { type: 'number' },
            },
            required: ['postId'],
        },
        body: {
            type: 'object',
            properties: {
                title: { type: 'string' },
                description: { type: 'string' },
            },
            required: ['title', 'description'],
        },
        response: {
            200: {
                description: 'Successful operation',
                type: 'object',
                properties: {
                    id: { type: 'number' },
                    title: { type: 'string' },
                    description: { type: 'string' },
                    created_at: { type: 'string' },
                    updated_at: { type: 'string' },
                },
            },
            404: {
                description: 'Post not found',
                type: 'object',
                properties: {
                    error: { type: 'string' },
                },
            },
        },
    },
    deletePost: {
        description: 'Delete a specific blog post',
        tags: ['Posts'],
        params: {
            type: 'object',
            properties: {
                postId: { type: 'number' },
            },
            required: ['postId'],
        },
        response: {
            200: {
                description: 'Successful operation',
                type: 'object',
                properties: {
                    id: { type: 'number' },
                    title: { type: 'string' },
                    description: { type: 'string' },
                    created_at: { type: 'string' },
                    updated_at: { type: 'string' },
                },
            },
            404: {
                description: 'Post not found',
                type: 'object',
                properties: {
                    error: { type: 'string' },
                },
            },
        },
    },
};