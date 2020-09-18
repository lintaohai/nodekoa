const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db/mysql')
const moment = require('moment');

//定义模型
const User = sequelize.define('user', {
  name: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "John Doe",
    comment: '这是地址'
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    comment: '这是状态'
  },
  ctime: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    // get() {
    //   return moment(this.getDataValue('ctime')).format();
    // }
  }
},{
  timestamps: false, // 时间戳！
  freezeTableName: true, //参数停止 Sequelize 执行表名自动复数化
})

module.exports = User