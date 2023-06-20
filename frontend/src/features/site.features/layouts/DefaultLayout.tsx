import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

interface iProps {
	noFooter: boolean;
	children?: React.ReactNode;
}

const DefaultLayout: React.FC<any> = ({
	noFooter,
	children,
}: iProps): JSX.Element => {
	return (
		<>
			<header>
				<div className=' fixed w-full top-0 z-20'>
					<div className='w-full px-4 sm:px-0 bg-mainColor h-[8vh] flex justify-center items-center text-white font-semibold '>
						<div className='container h-full flex justify-between items-center  '>
							<Header />
						</div>
					</div>
				</div>
			</header>
			<main>
				<div className=' flex justify-center flex-col'>{children}</div>
			</main>
			{!noFooter && (
				<footer>
					<Footer />
				</footer>
			)}
		</>
	);
};

export default DefaultLayout;
