import { QueryInterface, Sequelize } from 'sequelize';

// import { QueryInterface, Sequelize } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
export default {
	async up(queryInterface: QueryInterface, Sequelize: Sequelize | any) {
		await queryInterface.createTable('bookings', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			statusId: {
				type: Sequelize.STRING,
			},
			doctorId: {
				type: Sequelize.INTEGER,
			},
			patientId: {
				type: Sequelize.INTEGER,
			},
			date: {
				type: Sequelize.DATE,
			},
			timeType: {
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
	},
	async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
		await queryInterface.dropTable('bookings');
	},
};
