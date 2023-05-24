import db from '../../models';
import { Tuser } from '../../models/user';

const findUserById = async (id: number): Promise<Tuser> => {
	return await db.User.findOne({ where: { id } });
};

export default findUserById;
