"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepositoryImpl_1 = __importDefault(require("../../adapters/repositories/UserRepositoryImpl"));
class UserService {
    static async stockPurchase(userToAddStock, currentSymbolPrice, staleQuantity) {
        const userRepository = new UserRepositoryImpl_1.default();
        let user = await userRepository.stockPurchase(userToAddStock, currentSymbolPrice, staleQuantity);
        if (!user) {
            throw new Error("User doesn't exists");
        }
        return user;
    }
    static async getUser(email) {
        const userRepository = new UserRepositoryImpl_1.default();
        let user = await userRepository.findByEmail(email);
        if (!user) {
            throw new Error("User doesn't exists");
        }
        return user;
    }
}
exports.default = UserService;
