const commonService = require('../service/common')

module.exports = {
  async index (ctx) {
    let ret = await commonService.getCity()
    ctx.body = ret;
  }
}