import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { privateRoutes, publicRoutes } from './routes';

import DefaultLayout from './features/site.features/layouts/DefaultLayout';
import Loading from './features/site.features/pages/Loading';
import { NotFound } from './features/site.features/pages/Site';

const isAdmin = false;

const App: React.FC = (): JSX.Element => {
	const routesArr = isAdmin
		? Object.keys(privateRoutes)
		: Object.keys(publicRoutes);
	const routes = isAdmin ? privateRoutes : publicRoutes;
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
						<Route
							path='*'
							element={
								<DefaultLayout noFooter>
									<NotFound />
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
