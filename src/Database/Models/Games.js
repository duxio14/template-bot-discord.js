const sequelize = require("sequelize");
const {sequelizeInstance} = require("../database");

export const Games = sequelizeInstance.define('Games', {
	guildId: {
		type: sequelize.STRING,
		unique: true,
	}
});
