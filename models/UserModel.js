const { QueryTypes, DataTypes } = require('sequelize');
const db = require('../config/db');//数据库配置
const sequelize = db.sequelize;
const User = require('../scheam/user')(sequelize, DataTypes);


// 如果是初次运行项目  使用sync方案同步表结构
User.sync()

class UserModel {
  /**
   * 创建
   */
  static async createUser(user) {
    await User.create(user);
    return true;
  }

  /**
   * 删除
   */
  static async deleteUser(id) {
    await User.destroy({
      where: {
        id
      }
    });
    return true;
  }

  /**
   * 查询
   */
  static async findAllUserList() {
    return await User.findAll({
      attributes: ["id", "username", "email", "age"]
    });
  }

  /**
   * 根据用户名称查询用户
   */
  static async findUser(username) {
    return await User.findOne({
      where: {
        username
      }
    });
  }
}

module.exports = UserModel;
