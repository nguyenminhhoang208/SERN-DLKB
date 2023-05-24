import db from '../../models';

class HomeService {
	home = async (data: object = {}): Promise<object> => {
		const responseData = await db.User.findAll(data);

		return responseData;
	};
}

export default new HomeService();
