import { OrdersService } from "../services/orders.service.js";
import { UsersService } from "../services/users.service.js";
import { BusinessService } from "../services/business.service.js";

export class OrdersController {
  static getOrderById = async (req, res) => {
    try {
      const id = req.params.id;
      const result = await OrdersService.getOrderById(id);
      res.json({ status: "success", data: result });
    } catch (error) {
      console.log(error);
      res.json({ status: "error", message: error.message });
    }
  };

  static createOrder = async (req, res) => {
    try {
      //obtener user y business
      const { uid, bid, products } = req.body;
      await UsersService.getUserById(uid);
      const business = await BusinessService.getById(bid);
      //obtener productos
      const productsOrder = business.products.filter((p) =>
        products.includes(p.id)
      );
      //calcular total
      const total = productsOrder.reduce((acc, i) => (acc += i.price), 0);
      //orden
      const order = {
        business: bid,
        user: uid,
        products: productsOrder,
        price: total,
      };
      const result = await OrdersService.createOrder(order);
      res.json({ status: "success", data: result });
    } catch (error) {
      console.log(error);
      res.json({ status: "error", message: error.message });
    }
  };

  static modifyStatusOrder = async (req, res) => {
    try {
      const id = req.params.id;
      const { status } = req.body;
      const order = OrdersService.getOrderById(id);
      if (!order) {
        res.json({ status: "error", message: "order ID not found" });
      }
      order.status = status;
      const result = await OrdersService.modifyStatusOrder(id, order);
      res.json({ status: "success", data: result });
    } catch (error) {
      console.log(error);
      res.json({ status: "error", message: error.message });
    }
  };
}
