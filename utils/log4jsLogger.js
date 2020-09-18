const layout = {
  type: 'pattern',
  pattern: '[%d{yyyy-MM-dd hh:mm:ss.SSS}] [%p] %m'
}
// log4js.configure({
//   appenders: {
//     console: { type: 'console'},
//     file: {type: 'file', filename: 'logs/server.log', layout}
//   },
//   categories: {
//     // 默认日志
//     default: { appenders: [ 'file', 'console' ], level: 'debug' },
//   }
// })

// console.log();
// const logger = log4js.getLogger()

// module.exports = logger

const path = require('path');//引入原生path模块
const log4js = require('./koa-logger-modify.js');//引入koa-log4
 
log4js.configure({
  appenders: {
    //访问日志
    access: {
      encoding:"utf-8",
      type: 'dateFile',
      pattern: '-yyyy-MM-dd.log', //通过日期来生成文件
      alwaysIncludePattern: true, //文件名始终以日期区分
      filename: path.join('logs/', 'access.log') //生成文件路径和文件名
    },
    //系统日志
    application: {
      encoding:"utf-8",
      type: 'dateFile',
      pattern: '-yyyy-MM-dd.log', //通过日期来生成文件
      alwaysIncludePattern: true, //文件名始终以日期区分
      filename: path.join('logs/', 'application.log') //生成文件路径和文件名
    },
    out: {
      type: 'console',
      // layout
    },
  },
  categories: {
    default: { appenders: [ 'out'], level: 'info'},
    access: { appenders: [ 'access' ], level: 'info' },
    application: { appenders: [ 'application' ], level: 'WARN'},
  }
});

exports.accessLogger = () => log4js.koaLogger(log4js.getLogger('access')) //记录所有访问级别的日志
exports.loggerSys = log4js.getLogger('application')  //记录所有应用级别的日志
exports.logger = log4js.getLogger()
exports.logger2 = () => {
  return async (ctx, next)=>{
    // log4js.koaLogger(log4js.getLogger('reqBody'))
    // console.log(ctx.request.body);
    // await log4js.getLogger('reqBody').log('info', formatReqLog(ctx))
    // await log4js.koaLogger(log4js.getLogger('reqBody'))
    // console.log(res);
    // console.log(123123213);
    await next()
  }
}
