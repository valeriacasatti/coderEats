import { ordersModel } from "../../models/orders.model.js";

export class OrdersMongo {
  constructor() {
    this.model = ordersModel;
  }

  async createOrder(info) {
    try {
      const result = await this.model.create(info);
      return result;
    } catch (error) {
      throw error;
    }
  }
  async getOrders() {
    try {
      const result = await this.model.find();
      return result;
    } catch (error) {
      throw error;
    }
  }
  async getOrderById(id) {
    try {
      const result = await this.model.findById(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
  async modifyStatusOrder(id, info) {
    try {
      const result = await this.model.findByIdAndUpdate(id, info, {
        new: true,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}
