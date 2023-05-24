"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const process_1 = __importDefault(require("process"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
const basename = path_1.default.basename(__filename);
const env = process_1.default.env.NODE_ENV || 'development';
const config = require('../configs/db.config.json')[env];
let db = {};
if (config.use_env_variable) {
    var sequelize = new sequelize_1.Sequelize(process_1.default.env[config.use_env_variable], config);
}
else {
    var sequelize = new sequelize_1.Sequelize(config.database, config.username, config.password, config);
}
fs_1.default.readdirSync(__dirname)
    .filter((file) => {
    return (file.indexOf('.') !== 0 &&
        file !== basename &&
        (file.slice(-3) === '.ts' || file.slice(-3) === '.js'));
})
    .forEach((file) => {
    var model = require(path_1.default.join(__dirname, file))(sequelize, sequelize_1.DataTypes);
    db[model.name] = model;
});
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = sequelize_1.Sequelize;
exports.default = db;
