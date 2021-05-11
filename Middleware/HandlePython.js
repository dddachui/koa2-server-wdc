/*
 * @Author: wangdachui
 * @Date: 2021-05-11 13:46:45
 * @LastEditTime: 2021-05-11 14:12:33
 * @LastEditors: wangdachui
 * @Description: 
 * @FilePath: \Public-Koa2-Mysql-Sequelize_Server-master\Middleware\HandlePython.js
 */
var exec = require('child_process').exec; 

class Py {
    static async sendMail(params) {
        //需要本机环境装python，之后打算集成py虚拟环境
        let pyshell = 'python3.6 ./python/sendMail.py';
        exec(pyshell, function (error, stdout, stderr) {        
            if(error){
               console.log(error)
            }
            if(stdout){
                console.log(stdout)
             }
             if(stderr){
                console.log(stderr)
             }
          
        });

      };
}

module.exports=Py;