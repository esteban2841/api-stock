"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthService_1 = __importDefault(require("../../application/services/AuthService"));
class AuthController {
    static async register(req, res) {
        const { name, username, password, email } = req.body;
        try {
            const token = await AuthService_1.default.register(name, email, username, password);
            res.json({ token });
        }
        catch (err) {
            console.error(err);
            res.status(500).send("Server error");
        }
    }
    static async login(req, res) {
        const { email, password } = req.body;
        try {
            const token = await AuthService_1.default.login(email, password);
            res.json({ token });
        }
        catch (err) {
            console.error(err);
            res.status(500).send("Server error");
        }
    }
}
exports.default = AuthController;
