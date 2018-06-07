const productSchema = require('../schema/product')
const errCodeMap = require('../config/errCodeMap')

const productData = [
	{
		productId: 1,
		productName: 'iPhone 6S',
		productLogo: 'iPhone 6S.png',
		productPrice: 268200
	},
	{
		productId: 2,
		productName: 'iPhone 7 Plus',
		productLogo: 'iPhone 7 Plus.png',
		productPrice: 450000
	},
	{
		productId: 3,
		productName: 'iPhone 6s Plus',
		productLogo: 'iPhone 6s Plus.png',
		productPrice: 306300
	},
	{
		productId: 4,
		productName: 'iPhone 7',
		productLogo: 'iPhone 7.png',
		productPrice: 419900
	},
	{
		productId: 5,
		productName: 'iPhone 8',
		productLogo: 'iPhone 8.png',
		productPrice: 588800
	},
	{
		productId: 6,
		productName: 'iPhone 8 Plus',
		productLogo: 'iPhone 8 Plus.png',
		productPrice: 668800
	},
	{
		productId: 7,
		productName: 'iPhone X',
		productLogo: 'iPhone X.png',
		productPrice: 838800	
	},
	{
		productId: 8,
		productName: 'iPhone 6 Plus',
		productLogo: 'iPhone 6 Plus.png',
		productPrice: 308000
	}
]

module.exports = {

  // 列表
  async list () {
    const products = await productSchema.find({})
    return Object.assign({
      data: {
        products
      }
    }, errCodeMap.SUCCESS)
  },

  async add2 () {
    try {
      await productSchema.insert({
        brandName,
        brandId,
        brandLogo,
        categoryId,
        categoryName
      })
      return errCodeMap.SUCCESS
    } catch (e) {
      return {
        code: '1',
        msg: '新增品牌失败',
        data: null
      }
    }
  },

  // 增加
  async add ({brandName, brandId, brandLogo, categoryId, categoryName}) {
    try {
      await productSchema.insert({
        brandName,
        brandId,
        brandLogo,
        categoryId,
        categoryName
      })
      return errCodeMap.SUCCESS
    } catch (e) {
      return {
        code: '1',
        msg: '新增品牌失败',
        data: null
      }
    }
  },

  // 删除脏数据
  async clear () {
    return await productSchema.remove({productId: ''})
  }
}