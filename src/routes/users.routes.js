import { Router } from "express";
import { UsersController } from "../controllers/users.controller.js";

const router = Router();

router.post("/", UsersController.createUser);
router.get("/", UsersController.getUsers);
router.get("/:id", UsersController.getUserById);

export { router as usersRouter };
