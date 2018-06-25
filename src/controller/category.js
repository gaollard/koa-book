const categoryService = require('../service/category')

module.exports = {

  async list (ctx) {
    let ret = await categoryService.list()
    ctx.body = ret;
  },

  async add (ctx) {
    const { categoryName, categoryLogo } = ctx.request.body
    let ret = await categoryService.add({ categoryName, categoryLogo})
    ctx.body = ret;
  },

  async delete (ctx) {
    let ret = await categoryService.clear()
    ctx.body = ret;
  }
}