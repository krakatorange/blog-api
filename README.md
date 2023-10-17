## blog_api

This is a blog api.

# Installation and Setup

Follow these steps to get the project up and running on your local machine:

# 1. Clone the Repository

```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

# 2. Install Dependencies

```
npm install
```

# 3. Set Up the Database

Ensure you have PostgreSQL installed on your machine. Create a database and update the config.js file or set the appropriate environment variables with your database connection information:

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