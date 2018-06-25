const productService = require('../service/product')

module.exports = {

  /**
   * 获取产品列表
   */
  async list (ctx) {
    let ret = await productService.list()
    ctx.body = ret
  },

  /**
   * 新增產品
   * productName 商品名称
   * brandId 品牌ID
   * brandName 品牌名称
   * categoryName 类目名称
   * categoryId 类目ID
   * productStock 商品库存
   * productSales 商品销量
   * productDescription 商品描述
   * productLogo 商品LOGO
   * 获取产品列表
   */
  async add (ctx) {
    let {
      productName, brandId, brandName, categoryId, categoryName,
      productStock, productSales, productDescription, productLogo
    } = ctx.request.body;
    let ret = await productService.add({
      productName, brandId, brandName, categoryId, categoryName,
      productStock, productSales, productDescription, productLogo
    })
    ctx.body = ret
  },

  /**
   * 获取商品信息
   */
  async item (ctx) {
    const { productId } = ctx.params
    let ret = await productService.getProductInfo({productId})
    ctx.body = ret
  }
}