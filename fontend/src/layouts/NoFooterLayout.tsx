import React from 'react';
import Header from './Header';

interface iProps {
	children?: React.ReactNode;
}

const NoFooterLayout: React.FC = ({ children }: iProps): JSX.Element => {
	return (
		<>
			<header>
				<div className='sticky top-0'>
					<div className='w-full px-4 sm-px-0 bg-slate-300 h-[8vh] flex justify-center items-center '>
						<div className='container flex  items-center'>
							<Header />
						</div>
					</div>
				</div>
			</header>
			<main>
				<div className=' flex justify-center'>
					<div className='container pt-6'>{children}</div>
				</div>
			</main>
		</>
	);
};

export default NoFooterLayout;
