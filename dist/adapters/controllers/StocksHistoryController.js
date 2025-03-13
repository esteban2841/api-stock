"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StocksHistoryService_1 = __importDefault(require("../../application/services/StocksHistoryService"));
const StockHistory_1 = __importDefault(require("../../domain/models/StockHistory"));
class StockHistoryController {
    static async fetchStockData(req, res) {
        try {
            const { symbol } = req.params;
            const stocks = await StocksHistoryService_1.default.fetchStockData(symbol);
            await StockHistory_1.default.deleteMany();
            await StockHistory_1.default.insertMany(stocks);
            res.json(stocks);
        }
        catch (err) {
            console.error(err);
            res.status(500).send("Server error");
        }
    }
    static async generateSymbolPrice(req, res) {
        try {
            const { symbol } = req.params;
            const symbolRes = await StocksHistoryService_1.default.generateSymbolPrice(symbol);
            res.json(symbolRes);
        }
        catch (err) {
            console.error(err);
            res.status(500).send("Server error");
        }
    }
}
exports.default = StockHistoryController;
