import express from "express";
import http from "http";
import cors from "cors";
import connectDB from "./config/connectMongo";
import authRoutes from "./routes/authRoutes";
import StocksHistoryRoutes from "./routes/StocksHistoryRoutes";
import UserRoutes from "./routes/UserRoutes";

const app = express();
const server = http.createServer(app);

require("dotenv").config();

connectDB();

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "x-auth-token"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/stock", StocksHistoryRoutes);
app.use("/api/user", UserRoutes);
console.log("TCL: process.env.NODE_ENV", process.env.NODE_ENV)

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));