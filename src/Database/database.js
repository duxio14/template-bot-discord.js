const sequelize = require("sequelize");
const config = require("../../config.json");

const sequelizeInstance = new sequelize.Sequelize({
    host: config.database.host, 
    username: config.database.username, 
    password: config.database.password,
    database: config.database.databaseName,
    port: config.database.port,
    dialect: config.database.dialect,
    define: {
        timestamps: true
    },
    logging: config.database.databaseLogs,
});

module.exports = { sequelizeInstance };