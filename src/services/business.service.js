import { businessDao } from "../dao/index.js";

export class BusinessService {
  static getAllBusiness = () => {
    return businessDao.getAllBusiness();
  };
  static getById = (id) => {
    return businessDao.getById(id);
  };
  static createBusiness = (info) => {
    return businessDao.createBusiness(info);
  };
  static addProduct = (id, info) => {
    return businessDao.addProduct(id, info);
  };
}
