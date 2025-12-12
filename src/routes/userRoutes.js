import express from 'express';
const router = express.Router();
import { registerUser, loginUser, getCurrentUser } from '../controller/userController.js';
import validateToken from '../middleware/validTokenHandler.js';

router.post('/register', registerUser)

router.post('/login', loginUser)

router.get('/current',validateToken, getCurrentUser)

export default router;