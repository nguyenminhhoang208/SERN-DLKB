import { Express } from 'express';
import process from 'process';

const app: Express = require('./src/app');
const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log('server run at: http://localhost:' + PORT);
});
