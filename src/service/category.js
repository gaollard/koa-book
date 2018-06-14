const categorySchema = require('../schema/category')
const errCodeMap = require('../config/errCodeMap')
const mysqlQuery = require('../database/mysql')

module.exports = {

  async list () {
    // const categorys = await categorySchema.find({})
    let categorys = await mysqlQuery('SELECT * FROM mall_category')
    return Object.assign({data: {categorys}}, errCodeMap.SUCCESS)
  },

  async add ({categoryName, categoryLogo}) {
    const categorys = await categorySchema.find({})
    const categoryId = categorys.length + 1
    const categoryCreator = new categorySchema({categoryId, categoryName, categoryLogo})
    try {
      let saveRet = await categoryCreator.save()
      return errCodeMap.SUCCESS
    } catch (e) {
      return errCodeMap.ADD_CATE_ERROR
    }
  }
}