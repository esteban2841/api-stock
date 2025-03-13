"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../../domain/models/User"));
const UserRepository_1 = __importDefault(require("../../domain/repositories/UserRepository"));
class UserRepositoryImpl extends UserRepository_1.default {
    async findByEmail(email) {
        return await User_1.default.findOne({ email });
    }
    async findByUsername(username) {
        return await User_1.default.findOne({ username });
    }
    async save(user) {
        const newUser = new User_1.default(user);
        return await newUser.save();
    }
    async stockPurchase(user, currentSymbolPrice, staleQuantity) {
        if (user) {
            const { holdings } = user;
            user.balance -= staleQuantity;
            const unitsOfSymbolAdquired = staleQuantity / Number(currentSymbolPrice.close);
            const holdingToAdd = [...holdings || []].find(holding => {
                const newHolding = holding.symbol == currentSymbolPrice.symbol;
                holding.symbolUnits += unitsOfSymbolAdquired;
                return newHolding;
            });
            if (!holdingToAdd) {
                holdings?.length ? holdings?.push({
                    symbolUnits: unitsOfSymbolAdquired,
                    date: currentSymbolPrice.date,
                    time: currentSymbolPrice.time,
                    close: currentSymbolPrice.close,
                    symbol: currentSymbolPrice.symbol,
                }) :
                    user.holdings = [{
                            symbolUnits: unitsOfSymbolAdquired,
                            date: currentSymbolPrice.date,
                            time: currentSymbolPrice.time,
                            close: currentSymbolPrice.close,
                            symbol: currentSymbolPrice.symbol,
                        }];
            }
            const modifiedUser = User_1.default.findOneAndUpdate({ _id: user._id }, { ...user });
            return user;
        }
        return user;
    }
}
exports.default = UserRepositoryImpl;
