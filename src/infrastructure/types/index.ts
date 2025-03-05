import { Types } from "mongoose";

export interface UserInterface {
  _id?: Types.ObjectId;
  name: string;
  username: string;
  password: string;
  email: string;
  balance?: number
}

export interface StockHistory {
  stocks: Stock[]
}

export interface Stock{
  date?: Date
  time?: number
  open: string
  close: string
  volume: string
  symbol: string
}
