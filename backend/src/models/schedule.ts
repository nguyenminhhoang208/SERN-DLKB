import { Sequelize, Model } from 'sequelize';

module.exports = (sequelize: Sequelize, DataTypes: any): object => {
	class Schedule extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models: any) {
			// define association here
		}
	}
	Schedule.init(
		{
			currentNumber: DataTypes.STRING,
			maxNumber: DataTypes.STRING,
			date: DataTypes.DATE,
			timeType: DataTypes.STRING,
			doctorId: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Schedule',
		}
	);
	return Schedule;
};
