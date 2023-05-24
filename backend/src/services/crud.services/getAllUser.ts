import db from '../../models';

const getAllUserService = async (): Promise<any> => {
	const allUser = await db.User.findAll();
	return allUser;
};
export default getAllUserService;
