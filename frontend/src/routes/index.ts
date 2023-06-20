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
	() => import('../features/system.features/pages/users/AllUsers')
);
const UpdateUser = React.lazy(
	() => import('../features/system.features/pages/users/UpdateUser')
);

const UpdatePost = React.lazy(
	() => import('../features/system.features/pages/posts/UpdatePost')
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
		path: '/system/user/all-users',
		component: AllUsers,
		noFooter: true,
	},

	systemUpdateUser: {
		path: '/system/user/update/:id',
		component: UpdateUser,
		noFooter: true,
	},

	systemUpdatePost: {
		path: '/system/post/update',
		component: UpdatePost,
		noFooter: true,
	},
};
