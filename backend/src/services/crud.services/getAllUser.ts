import db from '../../models';

const getAllUserService = async (): Promise<any> => {
	const allUser = await db.User.findAll({
		attributes: [
			'id',
			'firstName',
			'lastName',
			'email',
			'phoneNumber',
			'andress',
			'gender',
		],
	});
	return allUser;
};
export default getAllUserService;
