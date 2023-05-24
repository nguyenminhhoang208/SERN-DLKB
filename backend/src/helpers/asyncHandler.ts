import express from 'express';

const asyncHandler = (fn: Function) => {
	return (
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	) => {
		fn(req, res, next).catch(next);
	};
};

export default asyncHandler;
