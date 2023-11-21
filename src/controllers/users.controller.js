import { UsersService } from "../services/users.service.js";

export class UsersController {
  //create user
  static createUser = async (req, res) => {
    try {
      const info = req.body;
      const result = await UsersService.createUser(info);
      res.json({
        status: "success",
        data: result,
      });
    } catch (error) {
      console.log(error);
      res.json({ status: "error", message: error.message });
    }
  };

  //get users
  static getUsers = async (req, res) => {
    try {
      const result = await UsersService.getUsers();
      res.json({
        status: "success",
        data: result,
      });
    } catch (error) {
      console.log(error);
      res.json({ status: "error", message: error.message });
    }
  };

  //get user by ID
  static getUserById = async (req, res) => {
    try {
      const id = req.params.id;
      const result = await UsersService.getUserById(id);
      res.json({ status: "success", data: result });
    } catch (error) {
      console.log(error);
      res.json({ status: "error", message: error.message });
    }
  };
}
