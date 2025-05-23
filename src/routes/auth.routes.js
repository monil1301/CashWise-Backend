import express from 'express';
import authController from '../controllers/auth.controller.js';
const router = express.Router();

router.post('/registerUser', authController.registerUser);
router.post('/loginUser', authController.loginUser);

export default router;
