import { QueryInterface, Sequelize } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
export default {
	async up(queryInterface: QueryInterface, Sequelize: Sequelize | any) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */

		return queryInterface.bulkInsert(
			'Users',
			[
				{
					email: 'admin@gmail.com',
					password: '123456',
					firstName: 'Nguyen',
					lastName: 'Rin',
					address: 'HCM',
					gender: 1,
					typeRole: 'ROLE',
					keyRole: 'R1',
				},
			],
			{}
		);
	},

	async down(queryInterface: QueryInterface | any, Sequelize: Sequelize | any) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */

		return queryInterface.bulkDelete('Users', null, {});
	},
};
