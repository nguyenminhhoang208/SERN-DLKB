import { QueryInterface, Sequelize } from 'sequelize';

// import { QueryInterface, Sequelize } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
export default {
	async up(queryInterface: QueryInterface, Sequelize: Sequelize | any) {
		await queryInterface.createTable('schudules', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			currentNumber: {
				type: Sequelize.INTEGER,
			},
			maxNumber: {
				type: Sequelize.INTEGER,
			},
			date: {
				type: Sequelize.DATE,
			},
			timeType: {
				type: Sequelize.STRING,
			},
			doctorId: {
				type: Sequelize.INTEGER,
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
	},
	async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
		await queryInterface.dropTable('schudules');
	},
};
