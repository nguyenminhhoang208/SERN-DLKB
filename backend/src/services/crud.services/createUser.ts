import db from '../../models';
import {
	BAD_REQUEST,
	CONFLICT,
} from '../../utils/response.utils/error.response';
import { hashPassword } from '../auth.services';
import { Tuser } from './../../models/user';
import findUserByEmail from '../../helpers/findUser/findUserByEmail';

const createUserService = async (data: Tuser) => {
	// Check data from the client
	if (!data) {
		throw new BAD_REQUEST();
	}

	// Check email
	const { email, password, ...orther } = data;

	const user: Promise<Tuser> | any = await findUserByEmail(email);
	if (user) {
		throw new CONFLICT('Email already exists!');
	}

	// Hash password
	const hashPw = await hashPassword(password);
	if (!hashPw) {
		return {
			statusCode: 500,
			message: 'Error!',
		};
	}

	// Create new user
	const newData = { email, password: hashPw, ...orther };
	await db.User.create(newData);
	return {
		statusCode: 201,
		message: 'Created!',
	};
};
export default createUserService;
