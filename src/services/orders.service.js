import { ordersDao } from "../dao/index.js";

export class OrdersService {
  static createOrder = (info) => {
    return ordersDao.createOrder(info);
  };
  static getOrders = () => {
    return ordersDao.getOrders();
  };
  static getOrderById = (id) => {
    return ordersDao.getOrderById(id);
  };
  static modifyStatusOrder = (id, info) => {
    return ordersDao.modifyStatusOrder(id, info);
  };
}
