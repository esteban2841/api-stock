import { StockHistory } from './../../infrastructure/types/index';
import { Request, Response } from "express";
import StockHistoryService from "../../application/services/StocksHistoryService";
import Stock from '../../domain/models/StockHistory';

class StockHistoryController {
  static async fetchStockData(req: Request, res: Response): Promise<void> {
    try {
      const {symbol} = req.params
      const stocks = await StockHistoryService.fetchStockData(symbol)

      await Stock.deleteMany()
      await Stock.insertMany(stocks)
      res.json(stocks);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  }
  static async generateSymbolPrice(req: Request, res: Response): Promise<void> {
    try {
      const {symbol} = req.params
      const symbolRes = await StockHistoryService.generateSymbolPrice(symbol)

      res.json(symbolRes);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  }

}

export default StockHistoryController;
