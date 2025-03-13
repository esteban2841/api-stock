import { StockType } from "infrastructure/types"

export const fetchStocks = (stocks: any, symbol?: string)=> {
    const currentSymbol = stocks['Meta Data']['2. Symbol'] || symbol
    const stocksArray = Object.entries(stocks['Time Series (15min)'])
    const normalizeStocks = stocksArray.map(stock=>{
        const stockInfo = stock[1]
        const values = transformApiStockData(stockInfo, stock[0])
        return {
            ...values,
            symbol: currentSymbol
        }
    })
    return normalizeStocks
}


function transformApiStockData(data: any, date: string): StockType | null {
    if (!data || typeof data !== 'object') {
        return null;
    }

    const transformed: StockType = {
        date: new Date(date),
        time: new Date(date).getTime(),
        open: '',
        close: '',
        volume: '',
        symbol: ''
    };

    for (const [key, value] of Object.entries(data)) {
        switch (key.trim()) {
            case '1. open':
                transformed.open = value as string;;
                break;
            case '4. close':
                transformed.close = value as string;;
                break;
            case '5. volume':
                transformed.volume = value as string;;
                break;
        }
    }

    return transformed;
}