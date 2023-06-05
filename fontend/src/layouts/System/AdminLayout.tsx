import React from 'react';
import AdminHeader from './AdminHeader';

const AdminLayout: React.FC = ({
	children,
}: {
	children?: React.ReactNode;
}): JSX.Element => {
	return (
		<>
			<header>
				<div className='sticky top-0'>
					<div className='w-full px-4 sm-px-0 bg-slate-300 h-[8vh] flex justify-center items-center '>
						<div className='container flex  items-center'>
							<AdminHeader />
						</div>
					</div>
				</div>
			</header>
			<main>
				<div className=' flex justify-center'>
					<div className='container min-h-[84vh] pt-6'>{children}</div>
				</div>
			</main>
		</>
	);
};

export default AdminLayout;
