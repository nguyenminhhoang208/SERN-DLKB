import { findUserByEmail } from '../../helpers/findUser';
import { BAD_REQUEST, NOTFOUND, OK } from '../../utils/response.utils';
import { comparePassword, genarateTokens } from '../auth.services';

interface iData {
	email: string;
	password: string;
}

const loginService = async (data: iData) => {
	const { email, password } = data;

	// check data from client
	if (!email) {
		throw new BAD_REQUEST('No email in request!');
	}
	if (!password) {
		throw new BAD_REQUEST('No password in request!');
	}

	// check email in db
	const user = await findUserByEmail(email);
	if (!user) {
		throw new NOTFOUND('Email already exist!');
	}

	const verifyPw: boolean = await comparePassword(password, user.password);
	if (!verifyPw) {
		throw new BAD_REQUEST('Password incorrect!');
	}
	const newData = {
		email: user.email,
		firstName: user.firstName,
		lastName: user.lastName,
		roleId: user.roleId,
		phoneNumber: user.phoneNumber,
	};

	const tokens = await genarateTokens(newData);
	if (!tokens) {
		throw new Error();
	}
	const { publicKey, accessToken, refreshToken } = tokens;
	return {
		...newData,
		...tokens,
	};
};

export default loginService;
