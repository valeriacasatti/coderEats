export class BusinessController {
  static getAllBusiness = async (req, res) => {
    try {
      res.json({ status: "success", message: "getAllBusiness" });
    } catch (error) {
      console.log(error);
      res.json({ status: "error", message: error.message });
    }
  };
  static getOneBusiness = async (req, res) => {
    try {
      res.json({ status: "success", message: "getOneBusiness" });
    } catch (error) {
      console.log(error);
      res.json({ status: "error", message: error.message });
    }
  };
  static createBusiness = async (req, res) => {
    try {
      res.json({ status: "success", message: "createBusiness" });
    } catch (error) {
      console.log(error);
      res.json({ status: "error", message: error.message });
    }
  };
  static addProduct = async (req, res) => {
    try {
      res.json({ status: "success", message: "addProduct" });
    } catch (error) {
      console.log(error);
      res.json({ status: "error", message: error.message });
    }
  };
}
