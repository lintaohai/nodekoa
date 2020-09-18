var router = require('koa-router')()


router.get('/home', async (ctx, next) => {
  ctx.body = 'hello world..'
  await next()
})

module.exports = router.routes()