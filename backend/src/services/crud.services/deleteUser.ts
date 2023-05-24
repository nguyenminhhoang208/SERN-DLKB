import { findUserById } from '../../helpers/findUser';
import { Tuser } from '../../models/user';
import { FORBIDDEN, NOTFOUND, UNAUTHORIZED } from '../../utils/response.utils';

const deleteUserService = async (
	id: number,
	accessToken: string
): Promise<object | undefined> => {
	// Authentication checked!
	if (!accessToken) {
		throw new UNAUTHORIZED('You must log in first!');
	}

	// Authorization Checked!
	if (false) {
		throw new FORBIDDEN();
	}

	// Check data from client
	const user: Promise<Tuser> | any = await findUserById(id);
	if (!user) {
		throw new NOTFOUND('ID does not exist!');
	}

	// Delete User
	user.destroy();

	return user;
};

export default deleteUserService;
