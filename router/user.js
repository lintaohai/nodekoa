var router = require('koa-router')()
let data = {
  code: 200,
  items: [
    {id: 1, name: 'lintaohai', addr: '深圳9'},
    {id: 2, name: 'lintaohai', addr: '广州3'}
  ]
}
router.get('/', async (ctx, next) => {
  if (!!ctx.query.id) {
    let id = (+ctx.query.id)
    ctx.body = data.items[id-1]
    return
  }
  ctx.body = data
})

router.get('/:id', async (ctx, next) => {
  let id = (+ctx.params.id)
  ctx.body = data.items[id-1]
})

module.exports = router.routes()