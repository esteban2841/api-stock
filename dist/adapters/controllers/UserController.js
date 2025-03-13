"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../../application/services/UserService"));
class UserController {
    static async stockPurchase(req, res) {
        const { userToAddStock, currentSymbolPrice, staleQuantity } = req.body;
        try {
            const userModified = await UserService_1.default.stockPurchase(userToAddStock, currentSymbolPrice, staleQuantity);
            res.json(userModified);
        }
        catch (err) {
            console.error(err);
            res.status(500).send("Server error");
        }
    }
    static async getUser(req, res) {
        const { email } = req.body;
        try {
            const userModified = await UserService_1.default.getUser(email);
            res.json(userModified);
        }
        catch (err) {
            console.error(err);
            res.status(500).send("Server error");
        }
    }
}
exports.default = UserController;
