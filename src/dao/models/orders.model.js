import mongoose from "mongoose";

const ordersCollection = "orders";

const ordersSchema = new mongoose.Schema({
  business: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "business",
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "users",
  },
  products: [],
  price: Number,
  status: {
    type: String,
    enum: ["complete", "cancel", "pending"],
    default: "pending",
  },
});

export const ordersModel = mongoose.model(ordersCollection, ordersSchema);
