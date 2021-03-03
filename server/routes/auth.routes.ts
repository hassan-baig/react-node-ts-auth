import { Router } from 'express';
import * as AuthController from '../controllers/auth'

export const AuthRoutes = (router: Router) => {
  router.route("/auth/login").post(AuthController.login);

  return router;
};
