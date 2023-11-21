export class UsersController {
  static createUser = async (req, res) => {
    try {
      res.json({ status: "success", message: "createUser" });
    } catch (error) {
      console.log(error);
      res.json({ status: "error", message: error.message });
    }
  };
  static getUser = async (req, res) => {
    try {
      res.json({ status: "success", message: "getUser" });
    } catch (error) {
      console.log(error);
      res.json({ status: "error", message: error.message });
    }
  };
}
