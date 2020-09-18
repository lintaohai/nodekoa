const Router = require('koa-router')
const home = require('./home')
const testUser = require('./testUser')
const user = require('./user')

let router = new Router()

router.use(home)
router.use('/test-user', testUser)
router.use('/user', user)

module.exports = router.routes()
