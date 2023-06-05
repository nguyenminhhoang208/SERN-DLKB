import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './pages/Loading';
import { iRoute, publicRoutes } from './routes';
import DefaultLayout from './layouts/Site/DefaultLayout';
import { NotFound } from './pages/Site';

const App: React.FC = (): JSX.Element => {
	return (
		<div className='App'>
			<Suspense fallback={<Loading />}>
				<Router>
					<Routes>
						{publicRoutes.map((route: iRoute, index: number): JSX.Element => {
							const Layout: React.FC | any = route.layout;
							const Page: React.FC = route.component;
							return (
								<Route
									key={index}
									path={route.path}
									element={
										<Layout>
											<Page />
										</Layout>
									}
								/>
							);
						})}
						<Route
							path='*'
							element={
								<DefaultLayout>
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
