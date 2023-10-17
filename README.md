## blog_api

This is a blog api.

# Installation and Setup

Follow these steps to get the project up and running on your local machine:

# 1. Clone the Repository

```
git clone https://github.com/krakatorange/blog_api.git
cd blog_api
```

# 2. Install Dependencies

```
npm install
```

# 3. Set Up the Database

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

# 4. Start the Server

```
npm start
```

or in dev:

```
nodemon start
```

Your server will now be running at http://localhost:3001 and swagger documentation for the API can be found at http://localhost:3001/documentation.