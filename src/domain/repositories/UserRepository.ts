import { StockType } from "infrastructure/types";

export default class UserRepository {
  async findByUsername(username: string): Promise<any> {
    throw new Error("Method not implemented");
  }

  async save(user: any): Promise<any> {
    throw new Error("Method not implemented");
  }
  async stockPurchase(user: any, currentSymbolPrice: StockType, staleQuantity: number): Promise<any> {
    throw new Error("Method not implemented");
  }
  
}
