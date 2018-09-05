var router = require('koa-router')()

router.get('/home', async (ctx, next) => {
  console.log(ctx.path)
  ctx.body = 'hello KOA2222...'
})

module.exports = router.routes()