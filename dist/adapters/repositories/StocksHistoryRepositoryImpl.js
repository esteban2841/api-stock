"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StockHistory_1 = __importDefault(require("../../domain/models/StockHistory"));
const StocksHistoryRepository_1 = __importDefault(require("../../domain/repositories/StocksHistoryRepository"));
class StocksHistoryRepositoryImpl extends StocksHistoryRepository_1.default {
    async fetchStockData(symbol) {
        const stocks = await StockHistory_1.default.find();
        // const stocksNormalize = fetchStocks(stocks, symbol)
        return stocks;
    }
    async generateSymbolPrice(symbol) {
        const date = new Date(Date.now());
        const open = (Math.random() * 1000).toFixed(4);
        const close = (Math.random() * 1000).toFixed(4);
        const volume = (Math.random() * 1000000).toFixed(0);
        const time = date.getTime();
        const newPrice = {
            symbol,
            open,
            close,
            volume,
            time,
            date
        };
        const symbolUpdate = await StockHistory_1.default.create(newPrice);
        return symbolUpdate;
    }
}
exports.default = StocksHistoryRepositoryImpl;
