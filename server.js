const Koa = require('koa')
const static = require('koa-static')
const Router = require('koa-router')
const cors = require('koa2-cors')

let app = new Koa()

app
.use(static('assets'))
.use(static('www'))
.use(cors({
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE', 'PATCH', 'PUT', 'HEAD', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

let router = new Router()

router.get('/a/:id', async (ctx, next) => {
  
  let resp = {
    code: 200,
    message: "操作成功",
    result: {
      name: '跨越速运',
      age: 23,
      url: 'http://localhost:9000/ab.png'
    }
  }
  ctx.response.body = resp

  await next()
})



app.use(router.routes())

app.listen(9000, '0.0.0.0', function () {
  console.log(new Date(), 'server running http://0.0.0.0:9000');
});


