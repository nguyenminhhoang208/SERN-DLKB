import { Op } from 'sequelize';
import db from '../../models';
import { BAD_REQUEST } from '../../utils/response.utils/error.response';

const getCodesService = async ({
	type,
	key,
}: {
	type: string;
	key?: string;
}) => {
	if (!type) throw new BAD_REQUEST('No type in req');
	// return type;
	if (key) {
		const res = await db.Allcode.findAll({
			where: {
				type,
				// don't select this key
				key: {
					[Op.ne]: key,
				},
			},
		});

		return res;
	}
	const res = await db.Allcode.findAll({
		where: {
			type,
		},
	});

	return res;
};

export default getCodesService;
