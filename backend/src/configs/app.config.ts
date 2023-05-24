import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

const appConfig = (app: express.Application) => {
	// config
	dotenv.config();

	app.use(morgan('dev')); // log request
	app.use(compression()); // giảm kích thước giữ liệu gửi đi
	app.use(helmet()); // bảo vệ thông tin

	// view engine
	app.use(express.static('../public'));
	app.set('view engine', 'ejs');
	app.set('views', './src/views');

	// parse application/x-www-form-urlencoded
	app.use(express.urlencoded({ extended: true }));

	// parse application/json
	app.use(express.json());
};

export default appConfig;
