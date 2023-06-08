"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { QueryInterface, Sequelize } from 'sequelize';
/** @type {import('sequelize-cli').Migration} */
exports.default = {
    up(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.createTable('Users', {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER,
                },
                email: {
                    type: Sequelize.STRING,
                },
                password: {
                    type: Sequelize.STRING,
                },
                firstName: {
                    type: Sequelize.STRING,
                },
                lastName: {
                    type: Sequelize.STRING,
                },
                andress: {
                    type: Sequelize.STRING,
                },
                // 0 - male
                // 1 - female
                gender: {
                    type: Sequelize.STRING,
                },
                role: {
                    type: Sequelize.STRING,
                },
                phoneNumber: {
                    type: Sequelize.STRING,
                },
                positionId: {
                    type: Sequelize.STRING,
                },
                image: {
                    type: Sequelize.STRING,
                },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
                },
            });
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.dropTable('Users');
        });
    },
};
