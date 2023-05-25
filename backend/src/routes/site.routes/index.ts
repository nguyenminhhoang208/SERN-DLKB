import express from 'express';
import siteController from '../../controllers/site.controller';
import { asyncHandler } from '../../helpers';
const router: express.Router = express.Router();

router.post('/api/v1/register', asyncHandler(siteController.register));
router.post('/api/v1/login', asyncHandler(siteController.login));
router.get('/', asyncHandler(siteController.home));

export default router;
