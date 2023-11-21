import { Router } from "express";
import { BusinessController } from "../controllers/business.controller.js";

const router = Router();

router.post("/", BusinessController.createBusiness);
router.get("/", BusinessController.getAllBusiness);
router.get("/:id", BusinessController.getById);
router.put("/:id/products", BusinessController.addProduct);

export { router as businessRouter };
