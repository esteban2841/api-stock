import express from "express";
import StocksHistoryController from "../../adapters/controllers/StocksHistoryController";

const router = express.Router();

router.get("/history", StocksHistoryController.fetchStockData);
router.get("/history/:symbol", StocksHistoryController.fetchStockData);

export default router;
