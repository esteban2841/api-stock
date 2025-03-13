"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchStocks = void 0;
const fetchStocks = (stocks, symbol) => {
    const currentSymbol = stocks['Meta Data']['2. Symbol'] || symbol;
    const stocksArray = Object.entries(stocks['Time Series (15min)']);
    const normalizeStocks = stocksArray.map(stock => {
        const stockInfo = stock[1];
        const values = transformApiStockData(stockInfo, stock[0]);
        return {
            ...values,
            symbol: currentSymbol
        };
    });
    return normalizeStocks;
};
exports.fetchStocks = fetchStocks;
function transformApiStockData(data, date) {
    if (!data || typeof data !== 'object') {
        return null;
    }
    const transformed = {
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
                transformed.open = value;
                ;
                break;
            case '4. close':
                transformed.close = value;
                ;
                break;
            case '5. volume':
                transformed.volume = value;
                ;
                break;
        }
    }
    return transformed;
}
