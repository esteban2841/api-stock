import express from "express";
import UserController from "../../adapters/controllers/UserController";

const router = express.Router();

router.put("/purchase", UserController.stockPurchase);

export default router;
