const postTagSchema = require('../schema/postTag')
const errMap = require('../config/errCodeMap')
const tags = require('../local/postTag')

module.exports = {

  // 列表
  async list () {
    const list = await postTagSchema.find({}, {_id: 0})
    return Object.assign({ data: { list }}, errMap.SUCCESS)
  },

  // 增加
  async add ({ tagName }) {
    const all = await postTagSchema.find({})
    const tagId = all.length + 1
    try {
      // let ret = await postTagSchema.insertMany([{ tagId, tagName }])
      let ret = await postTagSchema.insertMany(tags)
      return errMap.SUCCESS
    } catch (e) {
      return errMap['ADD_POST_ERROR']
    }
  },

  // 获取商品详情
  async item ({ tagId }) {
    const list = await postTagSchema.find({ tagId })
    const item = list[0]
    if (item) {
      return Object.assign({ data: { ...item }}, errMap.SUCCESS)
    } else {
      return Object.assign(errMap.POST_NOT_EXIST)
    }
  },

  // 删除脏数据
  async clear () {
    return await postSchema.remove()
  }
}