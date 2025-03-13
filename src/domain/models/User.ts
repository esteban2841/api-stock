import { Schema, model } from "mongoose";
import { UserInterface } from "../../infrastructure/types/index";

const userSchema = new Schema<UserInterface>({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  balance: { type: Number, required: false },
  holdings: { type: Array, required: false },
});

export default model<UserInterface>("User", userSchema);