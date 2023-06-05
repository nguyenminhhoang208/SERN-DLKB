import React from 'react';
import DefaultLayout from '../layouts/Site/DefaultLayout';
import NoFooterLayout from '../layouts/Site/NoFooterLayout';
import AdminLayout from '../layouts/System/AdminLayout';
// import AllUsers from '../pages/System/AllUsers';

const Login = React.lazy(() => import('../pages/Site/Login'));
const Register = React.lazy(() => import('../pages/Site/Register'));
const Home = React.lazy(() => import('../pages/Site/Home'));
const AllUsers = React.lazy(() => import('../pages/System/AllUsers'));

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
	{
		path: '/system/all-users',
		component: AllUsers,
		layout: AdminLayout,
	},
];

export const privateRoutes: iRoute[] = [];
