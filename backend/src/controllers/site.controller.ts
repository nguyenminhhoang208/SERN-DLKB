import express from 'express';
import HomeService from '../services/site.services/home.service';
import { createUserService } from '../services/crud.services';

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
	) => {
		const response = await createUserService(req.body);
		res.status(201).json(response);
	};
}

export default new Site();
