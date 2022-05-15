import { Router } from 'express';
import LoginController from '../controllers/login/login.controller';
import isValidLogin from '../middlewares/login';

const router = Router();

const loginController = new LoginController();

router.post('/', isValidLogin, loginController.create);

export default router;