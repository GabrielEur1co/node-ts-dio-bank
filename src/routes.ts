import { Router } from "express";
import { userController } from "./controllers/UserController";

export const router = Router();

router.get("/", userController.getAllUsers);

router.post("/user", userController.createUser);

