import React from 'react';
import { iUser } from './TableUsers';

interface iRowUser {
	user: iUser;
	children?: React.FC;
}

const RowUser: React.FC<iRowUser> = ({
	user,
	children,
}: iRowUser): JSX.Element => {
	const handleEditUser = () => {
		console.log(user.id);
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
					className='mr-3 bg-transparent hover:bg-slate-300 text-slate-500 font-semibold hover:text-white py-2 px-4 border border-slate-300 hover:border-transparent rounded'
				>
					Edit
				</button>
				<button
					onClick={handleRemoveUser}
					className='bg-transparent hover:bg-slate-300 text-slate-500 font-semibold hover:text-white py-2 px-4 border border-slate-300 hover:border-transparent rounded'
				>
					Remove
				</button>
			</td>
		</>
	);
};

export default RowUser;
