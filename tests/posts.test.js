// test/posts.test.js
'use strict'
const { test } = require('tap')
const build = require('../index');

test('should create a new post', async t => {
    const index = build()

    const response = await index.inject({
        method: 'POST',
        url: '/api/posts',
        payload: {
            title: 'Sample Title',
            description: 'Sample Description'
        }
    })
    t.equal(response.statusCode, 200, 'returns a status code of 200');
})