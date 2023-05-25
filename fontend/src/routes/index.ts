import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import NoFooterLayout from '../layouts/NoFooterLayout';

const Login = React.lazy(() => import('../pages/Login'));
const Register = React.lazy(() => import('../pages/Register'));
const Home = React.lazy(() => import('../pages/Home'));

export interface iRoute {
	path: string;
	component: React.FC;
	layout: React.FC;
}

export const publicRoutes: iRoute[] = [
	{
		path: '/',
		component: Home,
		layout: DefaultLayout,
	},
	{
		path: '/login',
		component: Login,
		layout: NoFooterLayout,
	},
	{
		path: '/register',
		component: Register,
		layout: NoFooterLayout,
	},
];

export const privateRoutes: iRoute[] = [];
