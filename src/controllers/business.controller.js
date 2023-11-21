import { BusinessService } from "../services/business.service.js";

export class BusinessController {
  //create business
  static createBusiness = async (req, res) => {
    try {
      const info = req.body;
      const result = await BusinessService.createBusiness(info);
      res.json({ status: "success", data: result });
    } catch (error) {
      console.log(error);
      res.json({ status: "error", message: error.message });
    }
  };

  //get all business
  static getAllBusiness = async (req, res) => {
    try {
      const result = await BusinessService.getAllBusiness();
      res.json({ status: "success", data: result });
    } catch (error) {
      console.log(error);
      res.json({ status: "error", message: error.message });
    }
  };

  //get business by id
  static getById = async (req, res) => {
    try {
      const id = req.params.id;
      const result = await BusinessService.getById(id);
      res.json({ status: "success", data: result });
    } catch (error) {
      console.log(error);
      res.json({ status: "error", message: error.message });
    }
  };

  //add products to business
  static addProduct = async (req, res) => {
    try {
      const bid = req.params.id;
      const { products } = req.body;
      const business = await BusinessService.getById(bid);
      if (!business) {
        return res.json({ status: "error", message: "business ID not found" });
      }
      business.products = products;
      const result = await BusinessService.addProduct(bid, business);
      res.json({ status: "success", data: result });
    } catch (error) {
      console.log(error);
      res.json({ status: "error", message: error.message });
    }
  };
}
