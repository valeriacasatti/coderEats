import { usersModel } from "../../models/users.model.js";

export class UsersMongo {
  constructor() {
    this.model = usersModel;
  }

  async createUser(info) {
    try {
      const result = await this.model.create(info);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getUsers() {
    try {
      const result = await this.model.find();
      return result;
    } catch (error) {
      throw error;
    }
  }
  async getUserById(id) {
    try {
      const result = await this.model.findById(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
