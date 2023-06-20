import React from 'react';
import {iUser} from './TableUsers';
import {useNavigate} from 'react-router-dom';
import {privateRoutes} from '../../../routes';

interface iRowUser {
	user: iUser;
	children?: React.FC;
}

const RowUser: React.FC<iRowUser> = ({
	user,
	children,
}: iRowUser): JSX.Element => {
	const navigate = useNavigate();
	const handleEditUser = () => {
		localStorage.setItem('userUpdate', JSON.stringify(user));

		navigate(privateRoutes.systemUpdateUser.path.replace(':id', '') + user.id);
	};
	const handleRemoveUser = () => {
		console.log(user.id);
	};
	return (
		<>
			{Object.values(user).map((value) => {
				return (
					<td key={value} className='whitespace-nowrap px-6 py-4'>
						{value}
					</td>
				);
			})}

			<td className='whitespace-nowrap px-6 py-4 '>
				<button
					onClick={handleEditUser}
					className='mr-3 bg-white hover:bg-yellow-400 text-slate-500 font-semibold hover:text-white py-2 px-4 border border-slate-300 hover:border-transparent rounded'
				>
					Edit
				</button>
				<button
					onClick={handleRemoveUser}
					className='bg-white hover:bg-red-500 text-slate-500 font-semibold hover:text-white py-2 px-4 border border-slate-300 hover:border-transparent rounded'
				>
					Remove
				</button>
			</td>
		</>
	);
};

export default RowUser;
