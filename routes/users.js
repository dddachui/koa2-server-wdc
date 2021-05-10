const router = require('koa-router')()
const User = require('../controllers/User.js')

router.prefix('/api/users')



// 注册用户 
router.post('/register', User.CreateUser);
// 获取用户列表
router.get('/getuserlist', User.GetAllUserList);
// 删除用户
router.post('/deluser', User.DelUser);

module.exports = router
