import { Router } from "express";
import * as controllers from "../controllers/products.js";
import restrict from '../helpers/restrict.js'

const router = Router();

router.get("/products", controllers.getProducts);
router.get("/products/:id", controllers.getProduct);
router.post("/products", restrict, controllers.createProduct);
router.put("/products/:id", restrict, controllers.editProduct);
router.delete("/products/:id", restrict, controllers.deleteProduct);

export default router;
