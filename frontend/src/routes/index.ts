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

export interface iRoute {
	path: string;
	component: React.FC;
	noFooter?: boolean;
}

export const publicRoutes: iRoute[] = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/login',
		component: Login,
		noFooter: true,
	},
	{
		path: '/register',
		component: Register,
		noFooter: true,
	},
	{
		path: '/system/all-users',
		component: AllUsers,
		noFooter: true,
	},
	{
		path: '/system/update-user/:id',
		component: UpdateUser,
		noFooter: true,
	},
];

export const privateRoutes: iRoute[] = [];
