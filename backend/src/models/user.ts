import { Sequelize, Model } from 'sequelize';

export type Tuser = {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	address: string;
	gender: string;
	image: string;
	role: string;
	positionId: string;
	phoneNumber: string;
};

module.exports = (sequelize: Sequelize, DataTypes: any): object => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models: any) {
			// define association here
		}
	}
	User.init(
		{
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			andress: DataTypes.STRING,
			gender: DataTypes.STRING,
			image: DataTypes.STRING,
			role: DataTypes.STRING,
			positionId: DataTypes.STRING,
			phoneNumber: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'User',
		}
	);
	return User;
};
