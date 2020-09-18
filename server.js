const Koa = require('koa')
const static = require('koa-static')
const router = require('./router/aindex')
const authCheck = require('./middle/auth-check')
const corsConfig = require('./middle/cors-config')
const bodyParser = require('koa-bodyparser')
// let {logger, httpLogger} = require('./utils/log4jsLogger')
const {accessLogger,logger,loggerSys} = require('./utils/log4jsLogger')


const port = 3000
let app = new Koa()
.use(accessLogger())       // 请求日志
.use(bodyParser())         // 请求体解析
.use(static('assets'))     // 静态资源
.use(static('www'))        // 文件资源
.use(corsConfig())           // 跨越设置
// .use(authCheck)            // 登录校验
.use(router)               // 路由
.use(async (ctx, next)=>{
  // let {body} = ctx.request
  // logger.info(body)
  // accessLogger()
  await next();
})       // 请求日志
.on('error', err => {
  logger.error(err.message)
  // loggerSys.warn(err.message)
})

app.listen(port, '0.0.0.0', function () {
  
  logger.info(`Server running on port ${port}`)
});

