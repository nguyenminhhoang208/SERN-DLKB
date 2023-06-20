import express from 'express';
import siteController from '../../controllers/site.controller';
import { asyncHandler } from '../../helpers';
const router: express.Router = express.Router();

router.post('/register', asyncHandler(siteController.register));
router.post('/login', asyncHandler(siteController.login));

router.post('/all-codes', asyncHandler(siteController.getAllCodes));
router.get('/', asyncHandler(siteController.home));

export default router;
