# Blog API

This is a blog API, written in Node.js, using the Fastify web framework and a PostgreSQL database.

## Installation and Setup

Follow these steps to get the project up and running on your local machine:

### Prerequisites

* Node
* PostgreSQL

### 1. Cloning the Repository

```
git clone https://github.com/krakatorange/blog_api.git
cd blog_api
```

### 2. Installing the Dependencies

```
npm install
```

### 3. Setting Up the Database

Ensure you have PostgreSQL installed on your machine. Create a database and set the appropriate environment variables with your database connection information in the format below:

```
DB_USER=username
DB_HOST=host
DB_NAME=database
DB_PASS=password
DB_PORT=5432
API_HOST=localhost
```

Run the setup script to create the necessary database table:

```
node scripts/setup.js
```

### 4. Starting the Server

```
npm start
```

or in dev:

```
nodemon start
```

Your server will now be running at http://localhost:3001 and swagger documentation for the API can be found at http://localhost:3001/documentation.

### 5. Testing the API

We can send RESTful requests to our API via the following curl commands (or via Postman/Thunder Client):

Create a new blog post:

```
curl -X POST http://localhost:3001/api/posts \
-H "Content-Type: application/json" \
-d '{"title": "Sample Title", "description": "Sample Description"}'
```

Retrieve a list of all blog posts:

```
curl -X GET http://localhost:3001/api/posts
```

Retrieve a specific blog post (replace {postId} with the actual ID of the post):

```
curl -X GET http://localhost:3001/api/posts/{postId}
```

Update a specific blog post (replace {postId} with the actual ID of the post):

```
curl -X PUT http://localhost:3001/api/posts/{postId} \
-H "Content-Type: application/json" \
-d '{"title": "Updated Title", "description": "Updated Description"}'
```

Delete a specific blog post (replace {postId} with the actual ID of the post):

```
curl -X DELETE http://localhost:3001/api/posts/{postId}
```
