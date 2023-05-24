import { Sequelize, Model } from 'sequelize';

module.exports = (sequelize: Sequelize, DataTypes: any): object => {
	class Allcode extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models: any) {
			// define association here
		}
	}
	Allcode.init(
		{
			key: DataTypes.STRING,
			type: DataTypes.STRING,
			valueEn: DataTypes.STRING,
			valueVi: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Allcode',
		}
	);
	return Allcode;
};
