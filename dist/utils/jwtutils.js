"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv").config();
const secret = process.env.JWT_SECRET;
function generateToken(payload, expiresIn = "1h") {
    return jsonwebtoken_1.default.sign(payload, `${secret}`, { expiresIn });
}
exports.generateToken = generateToken;
function verifyToken(token) {
    return jsonwebtoken_1.default.verify(token, `${secret}`);
}
exports.verifyToken = verifyToken;
