var router = require('koa-router')()
let h2 = require('../service/hello')

router.get('/home', async (ctx, next) => {
  let query = ['name', 'addr', 'phone', 'avatar_url']
  
  await h2(query).then(res => {
    ctx.body = res
  })
  await next()
})

module.exports = router.routes()