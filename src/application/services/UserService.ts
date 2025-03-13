import bcrypt from "bcryptjs";
import User from "../../domain/models/User";
import UserRepositoryImpl from "../../adapters/repositories/UserRepositoryImpl";
import { StockType, UserInterface } from "infrastructure/types";

class UserService {
  static async stockPurchase(
    userToAddStock: UserInterface,
    currentSymbolPrice: StockType,
    staleQuantity: number
  ) {
    const userRepository = new UserRepositoryImpl();
    let user = await userRepository.stockPurchase(userToAddStock, currentSymbolPrice, staleQuantity);
    if (user) {
      throw new Error("User already exists");
    }


    return user;
  }

}

export default UserService;
