import findUserById from '../../helpers/findUser/findUserById';
import { Tuser } from '../../models/user';
import {
	BAD_REQUEST,
	FORBIDDEN,
	NOTFOUND,
	UNAUTHORIZED,
} from '../../utils/response.utils';
import { hashPassword } from '../auth.services';

const updateUserService = async (
	id: number,
	data: any,
	accessToken: string
): Promise<any> => {
	// Handle data from client
	if (!id) {
		throw new BAD_REQUEST('No id for update!');
	}

	if (!data) {
		throw new BAD_REQUEST('No data for update!');
	}
	// Handle Authentication
	if (!accessToken) {
		throw new UNAUTHORIZED();
	}

	// Handle Authorization
	if (false) {
		throw new FORBIDDEN();
	}

	// Check user
	const user: Promise<Tuser> | any = await findUserById(id);
	if (!user) {
		throw new NOTFOUND('ID does not exist!');
	}

	if (data.password) {
		// Hash new password
		const newPw = await hashPassword(data.password);
		data.password = newPw;
	}
	// Update new data for user
	await user.update({
		...user,
		...data,
	});

	// Save new data of user to DB
	const newUser = await user.save();
	if (!newUser) {
		throw new Error();
	}
	return newUser;
};
export default updateUserService;
