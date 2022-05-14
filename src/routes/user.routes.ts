import { Router } from 'express';
import UserController from '../controllers/user/user.controller';
import userValidate from '../middlewares/user';

const router = Router();

const userController = new UserController();

router.post('/', userValidate, userController.create);

export default router;