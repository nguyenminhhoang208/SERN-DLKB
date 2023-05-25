const jwt = require('jsonwebtoken');
import genarateKeys from './genarateKeys';

interface iData {
	email: string;
	firstName: string;
	lastName: string;
	phonenumber: string;
	roleId: string;
}
interface iKeys {
	publicKey: string;
	privateKey: string;
}

const genarateTokens = async (data: iData) => {
	const keys: iKeys = await genarateKeys();
	const { publicKey, privateKey } = keys;

	const accessToken = jwt.sign(data, privateKey, {
		algorithm: 'RS256',
		expiresIn: '1h',
	});
	const refreshToken = jwt.sign(data, privateKey, {
		algorithm: 'RS256',
		expiresIn: '365d',
	});

	return {
		publicKey,
		accessToken,
		refreshToken,
	};
};

export default genarateTokens;
