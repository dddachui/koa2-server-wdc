
class Check {
  /**
  * @description 测试接口
 */
  static async test() {
    console.log("test is ok");
    return 1;
  }

  /**
   * @description 检查请求接口的参数
   * @param {params} 参数对象
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

