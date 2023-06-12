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

export const publicRoutes: any = {
	home: {
		path: '/',
		component: Home,
	},

	login: {
		path: '/login',
		component: Login,
		noFooter: true,
	},
	register: {
		path: '/register',
		component: Register,
		noFooter: true,
	},
};

export const privateRoutes: any = {
	systemAllUsers: {
		path: '/system/all-users',
		component: AllUsers,
		noFooter: true,
	},

	systemUpdateUsers: {
		path: '/system/update-user/:id',
		component: UpdateUser,
		noFooter: true,
	},
};
