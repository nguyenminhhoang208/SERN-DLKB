import { QueryInterface, Sequelize } from 'sequelize';

// import { QueryInterface, Sequelize } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
export default {
	async up(queryInterface: QueryInterface, Sequelize: Sequelize | any) {
		await queryInterface.createTable('clinics', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			patientId: {
				type: Sequelize.INTEGER,
			},
			doctorId: {
				type: Sequelize.INTEGER,
			},
			description: {
				type: Sequelize.TEXT,
			},
			files: {
				type: Sequelize.TEXT,
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
		await queryInterface.dropTable('clinics');
	},
};
