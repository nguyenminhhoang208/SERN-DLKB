import React, {useEffect} from 'react';
import LoadingInside from '../../../../components/LoadingInside';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {logout} from '../../authenSlice';

const Logout: React.FC = (): JSX.Element => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		const action = logout(null);
		dispatch(action);
		navigate('/');
	}, []);
	return (
		<div className='w-full h-screen'>
			<LoadingInside />
		</div>
	);
};

export default Logout;
