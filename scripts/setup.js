const dbClient = require('../config/database');

async function setup() {
    try {
        // Create table if it doesn't exist
        await dbClient.query(`
            CREATE TABLE IF NOT EXISTS posts (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255),
                description TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);

        console.log('Database setup completed successfully.');
    } catch (error) {
        console.error('Database setup failed:', error);
    } finally {
        // Close the database client
        await dbClient.end();
    }
}

setup();