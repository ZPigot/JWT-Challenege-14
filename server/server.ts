import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql', // Change to your database dialect (e.g., 'postgres', 'sqlite', etc.)
});

import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

const RefreshDatabase = false; // Set to true if you want to force database refresh
sequelize.sync({ force: RefreshDatabase }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}); // <-- Add this closing parenthesis