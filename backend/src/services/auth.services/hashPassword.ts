const bcrypt = require('bcrypt');
const saltRounds = 10;
const hashPassword = async (password: string | number): Promise<string> => {
	return await bcrypt.hash(password, saltRounds);
};

export default hashPassword;
