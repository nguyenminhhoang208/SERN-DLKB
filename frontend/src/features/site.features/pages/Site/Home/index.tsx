import React from 'react';

const MainHomePage = React.lazy(() => import('./components/MainHomePage'));
const SliderHomePage = React.lazy(() => import('./components/SliderHomePage'));

const Home: React.FC = (): JSX.Element => {
	return (
		<>
			<MainHomePage />
			<div className='[&>*:nth-child(2n)]:bg-gray-50 py-10'>
				<SliderHomePage />
			</div>
		</>
	);
};

export default Home;
