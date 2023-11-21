import mongoose from "mongoose";

const usersCollection = "users";

const usersSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  role: String,
  orders: {
    type: [{ type: mongoose.SchemaTypes.ObjectId, ref: "orders" }],
    default: [],
  },
});

export const usersModel = mongoose.model(usersCollection, usersSchema);
