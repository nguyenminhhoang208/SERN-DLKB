import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import AdminHeader from '../System/AdminHeader';

interface iProps {
	noFooter: boolean;
	children?: React.ReactNode;
}

const DefaultLayout: React.FC<any> = ({
	noFooter,
	children,
}: iProps): JSX.Element => {
	const isAdmin: boolean = true;
	return (
		<>
			<header>
				<div className='sticky top-0 z-10'>
					<div className='w-full px-4 sm-px-0 bg-slate-300 h-[8vh] flex justify-center items-center border-b border-blue-500 '>
						<div className='container flex  items-center '>
							{isAdmin ? <AdminHeader /> : <Header />}
						</div>
					</div>
				</div>
			</header>
			<main>
				<div className=' flex justify-center'>
					<div className='container min-h-[84vh] pt-6'>{children}</div>
				</div>
			</main>
			{!noFooter ? (
				<footer>
					<div className='w-full bg-slate-300 min-h-[8vh] flex justify-center items-center '>
						<div className='container flex  items-center'>
							<Footer />
						</div>
					</div>
				</footer>
			) : undefined}
		</>
	);
};

export default DefaultLayout;
