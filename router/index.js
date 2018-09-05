const Router = require('koa-router')
const home = require('./home')
const user = require('./user')

let router = new Router()

router.use(home)
router.use('/user', user)

module.exports = router.routes()
