"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const StockSchema = new mongoose_1.Schema({
    date: { type: Date, required: true },
    time: { type: Number, required: true, unique: true },
    open: { type: String, required: true },
    close: { type: String, required: true },
    volume: { type: String, required: true },
    symbol: { type: String, required: true },
});
exports.default = (0, mongoose_1.model)("Stock", StockSchema);
