import { Router } from "express";
import { loginAuth } from "../controllers/AuthController";

const router = Router();

router.post("/login", loginAuth);

export default router;
