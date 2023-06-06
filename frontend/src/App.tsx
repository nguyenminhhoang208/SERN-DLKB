import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { iRoute, publicRoutes } from './routes';
import DefaultLayout from './features/site.features/layouts/DefaultLayout';
import { NotFound } from './features/site.features/pages/components/Site';
import Loading from './features/site.features/pages/components/Loading';

const App: React.FC = (): JSX.Element => {
	return (
		<div className='App'>
			<Suspense fallback={<Loading />}>
				<Router>
					<Routes>
						{publicRoutes.map((route: iRoute, index: number): JSX.Element => {
							const Page: React.FC = route.component;
							return (
								<Route
									key={index}
									path={route.path}
									element={
										<DefaultLayout noFooter={route.noFooter ? true : false}>
											<Page />
										</DefaultLayout>
									}
								/>
							);
						})}
						<Route
							path='*'
							element={
								<DefaultLayout noFooter={true}>
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
