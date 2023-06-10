const sequelize = require("sequelize");
require("dotenv");

const sequelizeInstance = new sequelize.Sequelize({
    host: "", 
    username: "", 
    password: process.env.DB_PASSWORD,
    database: "",
    port: 3306,
    dialect: '',
    define: {
        timestamps: true
    },
    logging: false,
});

module.exports = { sequelizeInstance };