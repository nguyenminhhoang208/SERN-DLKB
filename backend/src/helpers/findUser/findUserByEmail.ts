import db from '../../models';
import { Tuser } from '../../models/user';

const findUserByEmail = async (email: string): Promise<Tuser> => {
	return await db.User.findOne({ where: { email } });
};

export default findUserByEmail;
