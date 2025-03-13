"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("../../adapters/controllers/UserController"));
const router = express_1.default.Router();
router.put("/purchase", UserController_1.default.stockPurchase);
router.post("/retrieve", UserController_1.default.getUser);
exports.default = router;
