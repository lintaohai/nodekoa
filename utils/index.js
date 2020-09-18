// module.exports = {
//     ERR_CODE: -1,
//     SUCC_CODE: 0
// }

// let formatResuletData = (data, message)=> {
  
//   return {
//     code: '',
//     message: '',
//     data: '',
//     pagination: {
//       total: 1000,
//       pageSize: 10,
//       page: 1,
//     }
//   }
// }

// const STATUS_CODE = {
//   CODE1: {
//     code: 10001,
//     msg: '系统未知错误'
//   },
//   CODE2: {
//     code: 10002,
//     msg: '参数错误'
//   },
// }

class Result {
  constructor() {
      
  }
  success({data, msg = 'OK', pagination, body}){
    return{
      code: 200,
      msg,
      data,
      pagination
    }
  }
  fail({data, msg='ERR'}){
    return {
      code: 401,
      msg,
      data
    }
  }
}

module.exports = new Result()