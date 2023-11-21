import { usersDao } from "../dao/index.js";

export class UsersService {
  static createUser = (info) => {
    return usersDao.createUser(info);
  };
  static getUsers = () => {
    return usersDao.getUsers();
  };
  static getUserById = (id) => {
    return usersDao.getUserById(id);
  };
}
