import React, {useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';

import {AnyAction, Dispatch} from '@reduxjs/toolkit';
import {useNavigate} from 'react-router-dom';
import Form from '../../../../components/Form';
import myAxios from '../../../../utils/myAxios';
import {login} from '../../authenSlice';

const Login: React.FC = (): JSX.Element => {
	const [messageError, setMessageError] = useState<string>('');

	const dispatch: Dispatch<AnyAction> = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = useCallback(async (e: React.FormEvent, data: any) => {
		e.preventDefault();
		let res: any;
		await setTimeout(async () => {
			try {
				res = await myAxios.post('/login', data);
				const action = login(res.metadata);
				dispatch(action);
				navigate('/');
			} catch (error: any) {
				setMessageError(error?.response?.data?.message);
			}
		}, 500);
	}, []);

	return (
		<div className='mt-[18vh] w-full'>
			<Form
				nameForm='Đăng nhập'
				fields={[
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
				]}
				authen
				message={messageError}
				submit={handleSubmit}
			/>
		</div>
	);
};

export default Login;
