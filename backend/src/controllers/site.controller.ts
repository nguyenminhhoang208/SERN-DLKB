// @ts-ignore
import express from 'express';
import HomeService from '../services/site.services/home.service';
import { createUserService } from '../services/crud.services';
import { OK } from '../utils/response.utils';
import loginService from '../services/site.services/login.service';
import getCodesService from '../services/site.services/getCodes.service';

class Site {
	home = async (
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	) => {
		return res.status(200).render('homepage.ejs', {
			data: JSON.stringify(await HomeService.home()),
		});
	};
	register = async (
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	): Promise<void> => {
		new OK('Register Successfully!', await createUserService(req.body)).send(
			res
		);
	};

	login = async (
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	): Promise<void> => {
		new OK('Login Successfully!', await loginService(req.body)).send(res);
	};

	getAllCodes = async (
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	): Promise<void> => {
		new OK('Successfully!', await getCodesService(req.body)).send(res);
	};
}

export default new Site();
