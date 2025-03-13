"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwtutils_1 = require("../../utils/jwtutils");
const User_1 = __importDefault(require("../../domain/models/User"));
async function default_1(req, res, next) {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }
    try {
        const decoded = (0, jwtutils_1.verifyToken)(token);
        const user = await User_1.default.findById(decoded.user.id);
        if (!user) {
            return res.status(401).json({ msg: "User does not exist" });
        }
        req.user = decoded.user;
        next();
    }
    catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
}
exports.default = default_1;
;
