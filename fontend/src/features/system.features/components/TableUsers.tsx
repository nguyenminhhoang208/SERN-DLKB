import React, { useEffect, useState } from 'react';
import Loading from '../../../pages/Loading';
import RowUser from './RowUser';

export interface iUser {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	phonenumber: string;
	andress: string;
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
		return <Loading />;
	}
	return (
		<div className='flex flex-col'>
			<div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
				<div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
					<div className='overflow-hidden'>
						<table className='min-w-full text-left text-sm font-light'>
							<thead className='border-b font-medium dark:border-neutral-500'>
								<tr>
									<th scope='col' className='px-6 py-4'>
										#
									</th>
									{Object.keys(users[0])?.map((key) => {
										return (
											<th key={key} scope='col' className='px-6 py-4'>
												{key.replace(/^\w/, (match) => match.toUpperCase())}
											</th>
										);
									})}
									<th scope='col' className='px-6 py-4'>
										Button
									</th>
								</tr>
							</thead>
							<tbody>
								{users.map((user, index) => {
									return (
										<tr
											key={index}
											className='border-b dark:border-neutral-500'
										>
											<td className='whitespace-nowrap px-6 py-4 font-medium'>
												{index + 1}
											</td>
											<RowUser key={index} user={user} />;
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
