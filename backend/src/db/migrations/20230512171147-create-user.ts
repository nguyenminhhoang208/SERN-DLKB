import { QueryInterface, Sequelize } from 'sequelize';

// import { QueryInterface, Sequelize } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
export default {
	async up(queryInterface: QueryInterface, Sequelize: Sequelize | any) {
		await queryInterface.createTable('Users', {
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
				type: Sequelize.BOOLEAN,
			},
			roleId: {
				type: Sequelize.STRING,
			},
			phonenumber: {
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
	},
	async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
		await queryInterface.dropTable('Users');
	},
};
