/*
 * @Author: wangdachui
 * @Date: 2021-05-10 23:23:02
 * @LastEditTime: 2021-05-11 09:58:08
 * @LastEditors: wangdachui
 * @Description: 
 * @FilePath: \Public-Koa2-Mysql-Sequelize_Server-master\Middleware\HandleCheck.js
 */
class Check {
  /**
   * @Author: wangdachui
   * @Date: 2021-05-11 09:57:16
   * @description:  测试函数
   * @return {number} 1
   */  
  static async test() {
    console.log("test is ok");
    return 1;
  }
  
  /**
   * @Author: wangdachui
   * @Date: 2021-05-11 09:57:42
   * @description: 判断接口参数是否完备
   * @param {object} params
   * @return {list} errorInfo
   */
  static async check(params) {
    let errorInfo = [];
    for (let item in params) {
      if (params[item] === undefined) {
        let index = errorInfo.length + 1;
        errorInfo.push("错误" + index + ":参数：" + item + "不能为空");
      }
    }
    return errorInfo;
  };

}
module.exports = Check;

