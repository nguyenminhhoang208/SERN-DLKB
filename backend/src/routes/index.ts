import express from 'express';
import siteRoutes from './site.routes';
import usersRoutes from './users.routes';

const routes = (app: express.Application): void => {
	// [USE] /users
	app.use('/users', usersRoutes);
	// [USE] /
	app.use('/', siteRoutes);

	// Handle 404 Not Found!
	app.use(
		(
			req: express.Request,
			res: express.Response,
			next: express.NextFunction
		) => {
			const error: any = new Error('Not Found!');
			error.status = 404;
			res.status(404).json(error);
			// next(error);
		}
	);

	// Handle server  Error!
	app.use(
		(
			err: express.ErrorRequestHandler | any,
			req: express.Request,
			res: express.Response,
			next: express.NextFunction
		) => {
			const statusCode = err.status || 500;
			const message = err.message || 'Internal Server Error!';
			return res.status(statusCode).json({
				statusCode,
				message,
			});
		}
	);
};

export default routes;
