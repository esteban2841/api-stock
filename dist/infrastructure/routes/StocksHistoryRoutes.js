"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const StocksHistoryController_1 = __importDefault(require("../../adapters/controllers/StocksHistoryController"));
const router = express_1.default.Router();
router.get("/history", StocksHistoryController_1.default.fetchStockData);
router.get("/history/:symbol", StocksHistoryController_1.default.fetchStockData);
router.get("/generate-price/:symbol", StocksHistoryController_1.default.generateSymbolPrice);
exports.default = router;
