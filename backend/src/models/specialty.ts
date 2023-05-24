import { Sequelize, Model } from 'sequelize';

module.exports = (sequelize: Sequelize, DataTypes: any): object => {
	class Specialty extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models: any) {
			// define association here
		}
	}
	Specialty.init(
		{
			name: DataTypes.STRING,
			description: DataTypes.TEXT,
			image: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Specialty',
		}
	);
	return Specialty;
};
