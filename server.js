const Koa = require('koa')
const static = require('koa-static')
const router = require('./router/index')
const authCheck = require('./middle/auth-check')
const corsConfig = require('./middle/cors-config')

let app = new Koa()

app
.use(static('assets'))     // 静态资源
.use(static('www'))        // 文件资源
.use(corsConfig)           // 跨越设置
// .use(authCheck)            // 登录校验
.use(router)               // 路由

app.listen(9000, '0.0.0.0', function () {
  console.log(new Date(), 'server running http://0.0.0.0:9000');
});


