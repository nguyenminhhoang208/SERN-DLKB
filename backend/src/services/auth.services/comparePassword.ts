const bcrypt = require('bcrypt');
const comparePassword = async (
	passwordFromClient: any,
	passwordFromDB: any
): Promise<boolean> => {
	return await bcrypt.compare(passwordFromClient, passwordFromDB);
};

export default comparePassword;
