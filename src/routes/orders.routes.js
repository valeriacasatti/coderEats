import { Router } from "express";
import { OrdersController } from "../controllers/orders.controller.js";

const router = Router();

router.get("/:id", OrdersController.getOrder);
router.post("/", OrdersController.createOrder);
router.put("/:id", OrdersController.modifyStatusOrder);

export { router as ordersRouter };