import axios from 'axios';
import Stock from '../../domain/models/StockHistory';
import StocksHistoryRepository from "../../domain/repositories/StocksHistoryRepository";
import { StockType } from "../../infrastructure/types/index";
class StocksHistoryRepositoryImpl extends StocksHistoryRepository {
    
    async fetchStockData(symbol?: string): Promise<any[] | null> {
        

        const stocks = await Stock.find()
        

        // const stocksNormalize = fetchStocks(stocks, symbol)

        return stocks
    }
    async generateSymbolPrice(symbol: string): Promise<StockType> {
        
        const date = new Date(Date.now());
        const open = (Math.random() * 1000).toFixed(4);
        const close = (Math.random() * 1000).toFixed(4);
        const volume = (Math.random() * 1000000).toFixed(0);
        const time = date.getTime();

        const newPrice : StockType ={
            symbol,
            open,
            close,
            volume,
            time,
            date
        } 

        const symbolUpdate = await Stock.create(newPrice)

        return symbolUpdate
    }

}

export default StocksHistoryRepositoryImpl;
