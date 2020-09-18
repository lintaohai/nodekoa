/* 扫描所有的model模型 */
const fs = require("fs");

let files = fs.readdirSync(__dirname); //同步遍历目录

let js_files = files.filter((file) => file !=='index.js' && file.endsWith('.js'));

module.exports = {};

for (let fileName of js_files) {
  // console.log(`import model from file ${fileName}...`);
  let name = fileName.substring(0, fileName.length - 3); //User.js ==> name : User
  module.exports[name] = require(`${__dirname}/${fileName}`);
}

