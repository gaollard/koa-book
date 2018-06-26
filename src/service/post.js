const postSchema = require('../schema/post')
const errMap = require('../config/errCodeMap')

module.exports = {

  // 列表
  async list () {
    const list = await postSchema.find({}, {
      html: 0,
      markdown: 0
    })
    return Object.assign({
      data: {
        list
      }
    }, errMap.SUCCESS)
  },

  // 增加
  async add ({title, markdown, html}) {
    const all = await postSchema.find({})
    const postId = all.length + 1
    try {
      let ret = await postSchema.insertMany([{postId, title, html, markdown}])
      return errMap.SUCCESS
    } catch (e) {
      return errMap['ADD_POST_ERROR']
    }
  },

  // 获取商品详情
  async item ({ postId }) {
    const list = await postSchema.find({ postId })
    const item = list[0]
    if (item) {
      return Object.assign({
        data: { ...item }
      }, errMap.SUCCESS)
    } else {
      return Object.assign(errMap.POST_NOT_EXIST)
    }
  },

  // 删除脏数据
  async clear () {
    return await postSchema.remove({productId: ''})
  }
}