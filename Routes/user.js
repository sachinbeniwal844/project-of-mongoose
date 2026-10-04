import express from "express";
import { login, signup } from "../Controllers/user.js";

const router = express.Router();

// signup
// @api - /api/user/signup
router.post('/signup',signup);

// logibn
// @api - /api/user/login
router.post('/login',login)

export default router;
