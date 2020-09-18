const Sequelize = require('sequelize')
const mysql = require('../config').mysql

const sequelize = new Sequelize(mysql.database, mysql.user, mysql.password, {
  host: mysql.host,
  dialect: 'mysql',
  dialectOptions: {
    dateStrings: true,
    typeCast: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 1000,
  },
  timezone: '+08:00', //改为标准时区
})

// 测试连接
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

module.exports = sequelize