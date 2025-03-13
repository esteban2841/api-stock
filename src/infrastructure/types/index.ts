import { Types } from "mongoose";

export interface UserInterface {
  _id?: Types.ObjectId;
  name: string;
  username: string;
  password: string;
  email: string;
  balance: number
  holdings?: SymbolAdquired[]
}

export interface StockHistory {
  stocks: StockType[]
}

export interface SymbolAdquired{
  date?: Date
  time?: number
  close: string
  symbolUnits: number
  symbol: string
}
export interface StockType{
  date?: Date
  time?: number
  open: string
  close: string
  volume: string
  symbol: string
}
