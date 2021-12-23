import { Router } from "express";
import productsRoutes from "./products.js";
import usersRoutes from "./users.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/", usersRoutes);
router.use("/", productsRoutes);

export default router;
