let {User} = require('../models/aindex')
const { Op } = require("sequelize");

async function getUser(query) {
  let {id, name} = query
  if (id) {
    return await User.findAll({
      where: {
        id
      }
    })
  }
  if (name) {
    return await User.findAll({
      where: {
        name
      }
    })
  }
  return await User.findAll({
    // attributes: [['id', 'userId'], 'name', 'address'],
    where: {
      // id: id,
      // [Op.or]: [{name: 'Ada'},{id: 5}]
      // id: id
    }
    // where: {
    //   // name: 'lintaohai',
    //   // status: true
    //   // id: [1,5,7],
    //   id: {
    //     [Op.or]: [5,7]
    //   }
    // }
  })
    // .findAll({attributes: ['name', 'addr']})
}

let postUser = async (body) => {
  return await User.create(body)
}

let patchUser = async (id, body) => {
  return await User.update(body, {
    where: {
      id: id
    }
  })
}

module.exports = {
  getUser,
  patchUser,
  postUser,
}