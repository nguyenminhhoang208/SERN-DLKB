import React from 'react';

const Login = React.lazy(
	() => import('../features/site.features/pages/Site/Login')
);
const Register = React.lazy(
	() => import('../features/site.features/pages/Site/Register')
);
const Home = React.lazy(
	() => import('../features/site.features/pages/Site/Home')
);
const AllUsers = React.lazy(
	() => import('../features/system.features/pages/AllUsers')
);
const UpdateUser = React.lazy(
	() => import('../features/system.features/pages/UpdateUser')
);

interface iValue {
	path: string;
	component: React.FC;
	noFooter?: boolean;
}

export interface iRoute {
	name: string;
	value: iValue;
}

export const publicRoutes: iRoute[] = [
	{
		name: 'home',
		value: {
			path: '/',
			component: Home,
		},
	},

	{
		name: 'login',
		value: {
			path: '/login',
			component: Login,
			noFooter: true,
		},
	},
	{
		name: 'register',
		value: {
			path: '/register',
			component: Register,
			noFooter: true,
		},
	},
];

export const privateRoutes: iRoute[] = [
	{
		name: 'systemAllUsers',
		value: {
			path: '/system/all-users',
			component: AllUsers,
			noFooter: true,
		},
	},
	{
		name: 'systemUpdateUsers',
		value: {
			path: '/system/update-user/:id',
			component: UpdateUser,
			noFooter: true,
		},
	},
];
