"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwtutils_1 = require("../../utils/jwtutils");
const User_1 = __importDefault(require("../../domain/models/User"));
const UserRepositoryImpl_1 = __importDefault(require("../../adapters/repositories/UserRepositoryImpl"));
class AuthService {
    static async register(name, email, username, password) {
        const userRepository = new UserRepositoryImpl_1.default();
        let user = await userRepository.findByEmail(email);
        if (user) {
            throw new Error("User already exists");
        }
        user = new User_1.default({ name, username, password, balance: 10000, email, holdings: [
                {
                    symbolUnits: 1.52,
                    date: '2025-03-13T15:30:09.854Z',
                    time: 17418798098,
                    close: '601.5850',
                    symbol: 'AAPL'
                }
            ] });
        const salt = await bcryptjs_1.default.genSalt(10);
        user.password = await bcryptjs_1.default.hash(password, salt);
        await userRepository.save(user);
        const payload = { user: { id: user._id } };
        const token = (0, jwtutils_1.generateToken)(payload, 360000);
        return `Bearer ${token}`;
    }
    static async login(email, password) {
        const userRepository = new UserRepositoryImpl_1.default();
        let user = await userRepository.findByEmail(email);
        if (!user) {
            throw new Error("Invalid credentials");
        }
        const isMatch = await bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            throw new Error("Invalid credentials");
        }
        const payload = { user: { id: user._id } };
        const token = (0, jwtutils_1.generateToken)(payload, 360000);
        return {
            token: `Bearer ${token}`,
            user
        };
    }
}
exports.default = AuthService;
