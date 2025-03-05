import { StockHistory } from './../../infrastructure/types/index';
import { Request, Response } from "express";
import StockHistoryService from "../../application/services/StocksHistoryService";
import Stock from '../../domain/models/StockHistory';

class StockHistoryController {
  static async fetchStockData(req: Request, res: Response): Promise<void> {
    try {
      const {symbol} = req.params
			console.log("TCL: StockHistoryController -> symbol", symbol)
      const stocks = await StockHistoryService.fetchStockData(symbol)
			console.log("TCL: StockHistoryController -> stocks", stocks)

      await Stock.deleteMany()
      await Stock.insertMany(stocks)
      res.json({ stocks });
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  }

}

export default StockHistoryController;
