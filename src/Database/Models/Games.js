const sequelize = require("sequelize");
const {sequelizeInstance} = require("../database");

const Games = sequelizeInstance.define('Games', {
	guildId: {
		type: sequelize.STRING,
		unique: true,
	}
});

module.exports = {
  Games
};

