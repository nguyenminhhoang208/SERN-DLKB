import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import myAxios from '../../../../utils/myAxios';
import Form from '../../../../components/Form';
import {publicRoutes} from '../../../../routes';
import getField from '../../../../utils/getField';

const Register: React.FC = (): JSX.Element => {
	const navigate = useNavigate();
	const [message, setMessage] = useState<string>('');
	const [fields, setFields] = useState<any>([
		{
			fieldName: 'Email',
			name: 'email',
			type: 'email',
		},
		{
			fieldName: 'Mật khẩu',
			name: 'password',
			type: 'password',
		},
		{
			fieldName: 'Nhập lại mật khẩu',
			name: 'rePassword',
			type: 'password',
		},
		{
			fieldName: 'Họ',
			name: 'firstName',
			type: 'text',
		},
		{
			fieldName: 'Tên',
			name: 'lastName',
			type: 'text',
		},
		{
			fieldName: 'Địa chỉ',

			name: 'andress',
			type: 'text',
		},
		{
			fieldName: 'Số điện thoại',
			name: 'phoneNumber',
			type: 'text',
		},
	]);

	const handleSubmit = async (e: React.FormEvent, data: any) => {
		try {
			e.preventDefault();
			// set default select field
			const selects = fields.filter((field: any) => field.type === 'select');
			selects.forEach((select: any) => {
				if (!data[select.name]) {
					data[select.name] = select.selectOptions[0].key;
				}
			});
			await myAxios.post('/register', data);
			navigate(publicRoutes.home.path);
		} catch (error: any) {
			setMessage(error.response.data.message);
		}
	};
	useEffect(() => {
		if (fields.length < 9) {
			(async () => {
				try {
					let selectOptions = await getField('role', 'R1');

					const fieldRoles = {
						fieldName: 'Bạn là',

						name: 'role',
						type: 'select',
						selectOptions,
					};

					selectOptions = await getField('gender');

					const fieldGenders = {
						fieldName: 'Giới tính',
						name: 'gender',
						type: 'select',
						selectOptions,
					};

					await setFields((prev: any) => {
						return prev.concat(fieldGenders, fieldRoles);
					});
				} catch (error: any) {
					setMessage(error.response.data.message);
				}
			})();
		}
	}, []);
	return (
		<div className='mt-[18vh] w-full'>
			<Form
				nameForm='Đăng ký'
				fields={fields}
				authen
				message={message}
				submit={handleSubmit}
			/>
		</div>
	);
};

export default Register;
