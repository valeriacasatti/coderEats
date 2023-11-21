import { OrdersService } from "../services/orders.service.js";

export class OrdersController {
  static getOrder = async (req, res) => {
    try {
      res.json({ status: "success", message: "getOrder" });
    } catch (error) {
      console.log(error);
      res.json({ status: "error", message: error.message });
    }
  };
  static createOrder = async (req, res) => {
    try {
      res.json({ status: "success", message: "createOrder" });
    } catch (error) {
      console.log(error);
      res.json({ status: "error", message: error.message });
    }
  };
  static modifyStatusOrder = async (req, res) => {
    try {
      res.json({ status: "success", message: "modifyStatusOrder" });
    } catch (error) {
      console.log(error);
      res.json({ status: "error", message: error.message });
    }
  };
}
