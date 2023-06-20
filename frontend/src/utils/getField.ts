import myAxios from './myAxios';

// do not select key
const getField = async (type: string, key?: string) => {
	const res: any = await myAxios.post('/all-codes', {
		type,
		key,
	});
	const data = res.metadata;
	const field = await data.reduce((result: any, codes: any) => {
		const { key, valueVi: value } = codes;
		result.push({ key, value });
		return result;
	}, []);
	return field;
};

export default getField;
