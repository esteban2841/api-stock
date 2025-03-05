import { Schema, model } from "mongoose";
import { Stock } from "../../infrastructure/types/index";

const StockSchema = new Schema<Stock>({
  date: { type: Date, required: true },
  time: { type: Number, required: true, unique: true },
  open: { type: String, required: true },
  close: { type: String, required: true },
  volume: { type: String, required: true },
  symbol: { type: String, required: true },
});

export default model<Stock>("Stock", StockSchema);