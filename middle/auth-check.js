
let authCheck = async (ctx, next) => {
  // 这里可以做登录校验
  //接口需要登陆
  const token = ctx.header.token
  if (!token) {
    ctx.body = {
      code: 405,
      message: 'you need login:there is no token'
    }
  } else {
    await next()
  }
}

module.exports = authCheck
