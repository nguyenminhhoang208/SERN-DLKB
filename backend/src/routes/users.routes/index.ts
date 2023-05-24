import express from 'express';
import usersController from '../../controllers/users.controller';
import { asyncHandler } from '../../helpers';
const router: express.Router = express.Router();

// [PATCH] /users/:id
router.patch('/:id', asyncHandler(usersController.updateUser));

// [DELETE] /users/:id
router.delete('/:id', asyncHandler(usersController.deleteUser));

// [GET] /users
router.get('/', asyncHandler(usersController.getAllUser));

export default router;
