let h = require('../db/hello')

async function getH (query) {
  console.log(query);
  
  let a = await h.getMsg(query)
  return a
}

module.exports = getH