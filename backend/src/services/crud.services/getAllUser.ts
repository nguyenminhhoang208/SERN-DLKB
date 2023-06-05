import db from '../../models';

const getAllUserService = async (): Promise<any> => {
	const allUser = await db.User.findAll({
		attributes: [
			'id',
			'firstName',
			'lastName',
			'email',
			'phonenumber',
			'andress',
		],
	});
	return allUser;
};
export default getAllUserService;
