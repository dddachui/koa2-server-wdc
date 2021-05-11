/*
 * @Author: wangdachui
 * @Date: 2021-05-10 22:24:16
 * @LastEditTime: 2021-05-11 10:00:01
 * @LastEditors: wangdachui
 * @Description: 
 * @FilePath: \Public-Koa2-Mysql-Sequelize_Server-master\scheam\user.js
 */
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'user',
    freezeTableName:true,
    timestamps:false
  });
};
