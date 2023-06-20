import React from 'react';
import LoadingInside from '../../../components/LoadingInside';
import RowUser from './RowUser';

export interface iUser {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	andress: string;
	gender: string;
}

export interface iTableUsersProps {
	users: iUser[];
	children?: React.FC;
}

const TableUsers: React.FC<iTableUsersProps> = ({
	users,
	children,
}: iTableUsersProps): JSX.Element => {
	if (!users || users.length === 0) {
		return (
			<div className=' absolute w-full left-0 top-0'>
				<LoadingInside />
			</div>
		);
	}
	return (
		<div className='flex w-full flex-col  '>
			<div className='sm:mx-6  lg:mx-8'>
				<div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
					<div className='overflow-hidden'>
						<table className='min-w-full text-left text-sm font-light'>
							<thead className=' font-medium dark:border-neutral-500 bg-green-500 text-white'>
								<tr>
									<th scope='col' className='px-6 py-4'>
										#
									</th>
									{Object.keys(users[0])?.map((key) => {
										let th = key.replace(/^\w/, (match) => match.toUpperCase());
										th = th.replace(/[a-z](?=[A-Z])/g, (match) => match + ' ');
										return (
											<th key={key} scope='col' className='px-6 py-4'>
												{th}
											</th>
										);
									})}
									<th scope='col' className='px-6 py-4'>
										Actions
									</th>
								</tr>
							</thead>
							<tbody className='[&>*:nth-child(2n)]:bg-green-50'>
								{users.map((user, index) => {
									return (
										<tr key={index}>
											<td className='whitespace-nowrap px-6 py-4 font-medium'>
												{index + 1}
											</td>
											<RowUser key={index} user={user} />
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TableUsers;
