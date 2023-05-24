import express from 'express';
import {
	getAllUserService,
	updateUserService,
} from '../services/crud.services';
import { OK } from '../utils/response.utils/success.response';
import deleteUserService from '../services/crud.services/deleteUser';

class UsersController {
	// Get all users from db
	getAllUser = async (
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	) => {
		new OK('Successfully', await getAllUserService()).send(res);
	};

	// Update the user's data
	updateUser = async (
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	) => {
		const accessToken = 'hi';
		new OK(
			'Update Successfully!',
			await updateUserService(Number(req.params.id), req.body, accessToken)
		).send(res);
	};

	// Delete User
	deleteUser = async (
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	) => {
		const accessToken = 'hi';
		new OK(
			'Delete Successfully!',
			await deleteUserService(Number(req.params.id), accessToken)
		).send(res);
	};
}

export default new UsersController();
