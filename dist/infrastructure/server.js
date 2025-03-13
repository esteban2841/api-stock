"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const connectMongo_1 = __importDefault(require("./config/connectMongo"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const StocksHistoryRoutes_1 = __importDefault(require("./routes/StocksHistoryRoutes"));
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
require("dotenv").config();
(0, connectMongo_1.default)();
const corsOptions = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "x-auth-token"],
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use("/api/auth", authRoutes_1.default);
app.use("/api/stock", StocksHistoryRoutes_1.default);
app.use("/api/user", UserRoutes_1.default);
console.log("TCL: process.env.NODE_ENV", process.env.NODE_ENV);
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
