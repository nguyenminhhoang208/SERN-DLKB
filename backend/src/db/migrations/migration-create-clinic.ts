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
			name: {
				type: Sequelize.STRING,
			},
			address: {
				type: Sequelize.STRING,
			},
			description: {
				type: Sequelize.TEXT,
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
	},
	async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
		await queryInterface.dropTable('clinics');
	},
};
