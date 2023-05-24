import { Sequelize, Model } from 'sequelize';

module.exports = (sequelize: Sequelize, DataTypes: any): object => {
	class History extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models: any) {
			// define association here
		}
	}
	History.init(
		{
			patientId: DataTypes.INTEGER,
			doctorId: DataTypes.INTEGER,
			description: DataTypes.TEXT,
			files: DataTypes.TEXT,
		},
		{
			sequelize,
			modelName: 'History',
		}
	);
	return History;
};
