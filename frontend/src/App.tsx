import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { privateRoutes, publicRoutes } from './routes';

import { useSelector } from 'react-redux';
import DefaultLayout from './features/site.features/layouts/DefaultLayout';
import Loading from './features/site.features/pages/Loading';
import { NotFound } from './features/site.features/pages/Site';
import Logout from './features/site.features/pages/Site/Logout';

const App: React.FC = (): JSX.Element => {
	const [routes, setRoutes] = useState<any>(publicRoutes);
	const [routesArr, setRoutesArr] = useState<any>(Object.keys(publicRoutes));

	const user = useSelector((state: any) => state.authenSlice);
	const isAdmin: boolean = user?.role === 'R1';
	useEffect(() => {
		if (isAdmin) {
			setRoutes((prev: any) => ({ ...prev, ...privateRoutes }));
			setRoutesArr((prev: any) => prev.concat(Object.keys(privateRoutes)));
		}
	}, []);

	return (
		<div className='App relative'>
			<Suspense fallback={<Loading />}>
				<Router>
					<Routes>
						{routesArr.map((route: any, index: number): JSX.Element => {
							const Page: React.FC = routes[route].component;
							const path: string = routes[route].path;
							const noFooter: boolean = !!routes[route].noFooter;
							return (
								<Route
									key={index}
									path={path}
									element={
										<DefaultLayout noFooter={noFooter}>
											<Page />
										</DefaultLayout>
									}
								/>
							);
						})}
						<Route path='/logout' element={<Logout />} />
						<Route
							path='*'
							element={
								<DefaultLayout noFooter>
									<NotFound />
									{/* <Loading /> */}
								</DefaultLayout>
							}
						/>
					</Routes>
				</Router>
			</Suspense>
		</div>
	);
};

export default App;
