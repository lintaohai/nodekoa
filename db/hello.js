const sql = require('./mysql')

async function getMsg(query) {
  return await 
  sql.define('humens')
    .findAll({attributes: [...query]})
    // .findAll({attributes: ['name', 'addr']})
}

module.exports = {
  getMsg
}