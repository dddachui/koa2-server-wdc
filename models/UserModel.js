/*
 * @Author: wangdachui
 * @Date: 2021-05-10 22:24:16
 * @LastEditTime: 2021-05-11 10:19:29
 * @LastEditors: wangdachui
 * @Description: 操作数据的函数，都没测试过！
 * @FilePath: \Public-Koa2-Mysql-Sequelize_Server-master\models\UserModel.js
 */
const { QueryTypes, DataTypes } = require('sequelize');
const db = require('../config/db');//数据库配置
const sequelize = db.sequelize;
const User = require('../scheam/user')(sequelize, DataTypes);


// 如果是初次运行项目  使用sync方案同步表结构
User.sync()

class UserModel {
  /**
   * @Author: wangdachui
   * @Date: 2021-05-11 09:58:35
   * @description: 创建用户
   * @param {object} user
   * @return {boolean}
   */
  static async createUser(user) {
    await User.create(user);
    return true;
  };

  /**
   * @Author: wangdachui
   * @Date: 2021-05-11 09:59:00
   * @description: 按照参数项删除数据
   * @param {string} field
   * @param {string} parameter
   * @return {boolean}
   */
  static async deleteUser(field,parameter) {
    await User.destroy({
      where: {
        [field]:parameter
      }
    });
    return true;
  };

  /**
   * @Author: wangdachui
   * @Date: 2021-05-11 09:59:31
   * @description: 查询用户列表的所有信息的指定类
   * @return {list} 所有用户指定信息信息
   */
  static async findAllUserList() {
    return await User.findAll({
      attributes: ["id", "username", "email"],
    });
  };
  /**
   * @Author: wangdachui
   * @Date: 2021-05-11 10:16:11
   * @description: 
   * @param {string} field
   * @param {object} parameter
   * @return {object} findAllUserInfoByParameter
   */
  static async findAllUserInfoByParameter(field,parameter) {
    return await User.findAll({
      attributes: ["id", "username", "email"],
      where:{
        //只是示范
        [field]:parameter.username
      }
    });
  };

  /**
   * @Author: wangdachui
   * @Date: 2021-05-11 10:00:33
   * @description: 根据指定参数查询用户信息
   * @param {string} field 数据表项
   * @param {string} parameter 数据表对应项的值
   * @return {object}
   */
  static async findUser(field,parameter) {
    return await User.findAll({
      where: {
          [field]:parameter
      }
    });
  };
  /**
   * @Author: wangdachui
   * @Date: 2021-05-11 10:08:22
   * @description: 更新用户信息
   * @param {object} parameter
   * @return {boolean}
   */
  static async updateInfo(parameter) {
    return await User.update(
      {
        email: parameter.email,
      }, {
        //可以改成自适应变量，参照上一个函数的写法
      where: {
        username: parameter.username
      }
    });
  };
  /**
   * @Author: wangdachui
   * @Date: 2021-05-11 10:18:27
   * @description: 根据[min,max]查询不在field的信息，仅限number型数据
   * @param {string} field
   * @param {number} min
   * @param {number} max
   * @return {object} info
   */
  static async notBetween(field,min,max) {
    return await log.findAll({
        where: {
            [field] : {
                [Op.notBetween]: [min,max],           // 在 [min, max] 之中
            }

        }

    });


};
}

module.exports = UserModel;
