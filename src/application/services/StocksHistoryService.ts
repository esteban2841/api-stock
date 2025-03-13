import { fetchStocks } from "../../utils";
import StocksHistoryRepositoryImpl from "../../adapters/repositories/StocksHistoryRepositoryImpl";


class StockService {
  static async fetchStockData(
    symbol?: string
  ) {

    const StocksHistoryRepository = new StocksHistoryRepositoryImpl();
    let stocks = await StocksHistoryRepository.fetchStockData(symbol);
    if (!stocks) {
      throw new Error("Api request error");
    }
    // user = new User({ name, username, password, balance: 10000, email });
    // const salt = await bcrypt.genSalt(10);
    // user.password = await bcrypt.hash(password, salt);
    // await StocksHistoryRepository.save(user);
    // const payload = { user: { id: user._id } };
    // const token = generateToken(payload, 360000);

    return stocks;
  }
  static async generateSymbolPrice(
    symbol: string
  ) {

    const StocksHistoryRepository = new StocksHistoryRepositoryImpl();
    let stock = await StocksHistoryRepository.generateSymbolPrice(symbol);
    if (!stock) {
      throw new Error("Error creating the update symbol price ");
    }
    // user = new User({ name, username, password, balance: 10000, email });
    // const salt = await bcrypt.genSalt(10);
    // user.password = await bcrypt.hash(password, salt);
    // await StocksHistoryRepository.save(user);
    // const payload = { user: { id: user._id } };
    // const token = generateToken(payload, 360000);

    return stock;
  }

}

export default StockService;
