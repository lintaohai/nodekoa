const router = require('koa-router')()
const db = require('../service/user')
const result = require('../utils/index.js')

const Joi = require('@hapi/joi');

// 请求体校验规则
const schema = Joi.object({
  name: Joi.string().min(3).max(5).required(),
  address: Joi.string().max(10).required(),
  status: Joi.boolean().required()
})

router.get('/', async (ctx, next) => {
  let query = ctx.query
  await db.getUser(query).then(res => {
    ctx.body = result.success({
      data: res
    })
  }).catch(err => {
    ctx.body = result.fail({
      data: err.message,
      msg: '请求失败'
    })
  })
  await next()
})

router.get('/:id', async (ctx, next) => { 
  let params = ctx.params
  await db.getUser(params).then(res => {
    ctx.body = result.success({
      data: res
    })
  }).catch(err => {
    console.log('错误:',err.message);
  })
  await next()
})


router.post('/', async (ctx, next) => { 
  let {body} = ctx.request
  let r = schema.validate(body)
  
  if(!r.error) {
    ctx.body = body
    await db.postUser(body).then(res => {
      ctx.body = res
    }).catch(err => {
      ctx.body = err
    })
  } else {
    ctx.body = r.error.details
  }
  await next()
})

router.patch('/:id', async (ctx, next) => {
  let id = ctx.params.id
  let {body} = ctx.request
  await db.patchUser(id, body).then(res => {
    
    ctx.body = res
  })
  await next()
})

module.exports = router.routes()