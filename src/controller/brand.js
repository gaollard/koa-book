const brandService = require('../service/brand')

module.exports = {

  async list (ctx) {
    let ret = await brandService.list()
    ctx.body = ret;
  },

  async add (ctx) {
    const { brandName, brandLogo } = ctx.request.body
    let ret = await brandService.add({ brandName, brandLogo})
    ctx.body = ret;
  },

  async delete (ctx) {
    let ret = await brandService.clear()
    ctx.body = ret;
  }
}