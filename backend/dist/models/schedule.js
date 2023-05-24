"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Schedule extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Schedule.init({
        currentNumber: DataTypes.STRING,
        maxNumber: DataTypes.STRING,
        date: DataTypes.DATE,
        timeType: DataTypes.STRING,
        doctorId: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Schedule',
    });
    return Schedule;
};
