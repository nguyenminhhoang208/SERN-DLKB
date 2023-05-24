import { DataTypes, Sequelize } from 'sequelize';
import process from 'process';
import path from 'path';
import fs from 'fs';
// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../configs/db.config.json')[env];
let db: any = {};

if (config.use_env_variable) {
	var sequelize: any = new Sequelize(
		process.env[config.use_env_variable]!,
		config
	);
} else {
	var sequelize: any = new Sequelize(
		config.database,
		config.username,
		config.password,
		config
	);
}

fs.readdirSync(__dirname)
	.filter((file: string) => {
		return (
			file.indexOf('.') !== 0 &&
			file !== basename &&
			(file.slice(-3) === '.ts' || file.slice(-3) === '.js')
		);
	})
	.forEach((file: string) => {
		var model = require(path.join(__dirname, file))(sequelize, DataTypes);
		db[model.name] = model;
	});

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
