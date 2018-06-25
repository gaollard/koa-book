const path = require('path')
const axios = require('axios')
const router = require('koa-router')()
const multer = require('koa-multer')

const controller = require('../controller/index')

const commonService = require('../service/common')
const categoryService = require('../service/category')
const brandService = require('../service/brand')
const userService = require('../service/user')
const productService = require('../service/product')

axios.defaults.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1'

// 获取书籍列表
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    name: '拉德影视'
  })
})

// // 获取书籍列表
// router.get('/book', async (ctx, next) => {
//   await next()
//   var id = ctx.params.id || 1220562
//   let res = await axios.get(`https://api.douban.com/v2/book/${id}`)
//   ctx.body = res.data
// });

// /**
//  * 获取书籍详情
//  * 1220562
//  */
// router.get('/book/:id', async (ctx, next) => {
//   await next()
//   let id = ctx.params.id
//   let res = await axios.get(`https://api.douban.com/v2/book/${id}`)
//   ctx.body = res.data
// });

/*
 * 获取电影列表
 * @tag in_theaters 正在热映
 * @tag coming_soon 即将上映
 * @tag top250 top250排行榜
 * @tag weekly 口碑榜
 * @tag us_box 北美票房榜
 * @tag new_movies 新片榜
 */

 console.log(111, controller)

router.get('/movie/:tag', async (ctx, next) => {
  return controller.movie.list(ctx, next)
  // await next()
  // let tag = ctx.params.tag
  // let start = ctx.query.start || 0
  // let count = ctx.query.count || 10
  // const movieUrl = 'https://api.douban.com/v2/movie/'
  // try {
  //   let res = await axios.get(`${movieUrl}${tag}?start=${start}&count=${count}`)
  //   ctx.body = res.data
  // } catch (e) {
  //   ctx.body = 'error'
  //   console.log(e.Error)
  // }
});

router.get('/movie/subject/:id', async (ctx, next) => {
  await next()
  let id = ctx.params.id
  const movieUrl = 'https://api.douban.com/v2/movie/subject/'
  try {
    let res = await axios.get(`${movieUrl}${id}`)
    ctx.body = res.data
  } catch (e) {
    ctx.body = 'error'
    console.log(e.Error)
  }
});

router.get('/category', async (ctx, next) => {
  await next()
  let ret = await categoryService.list()
  ctx.body = ret;
});

router.post('/category', async (ctx, next) => {
  await next()
  const { categoryName, categoryLogo } = ctx.request.body
  let ret = await categoryService.add({ categoryName, categoryLogo})
  ctx.body = ret;
});

router.delete('/category', async (ctx, next) => {
  await next()
  let ret = await categoryService.clear()
  ctx.body = ret;
});

router.post('/brand', async (ctx, next) => {
  await next()
  let ret = await brandService.add2()
  ctx.body = ret;
});

/**
 * 获取品牌列表
 */
router.get('/brand', async (ctx, next) => {
  await next()
  let ret = await brandService.list()
  ctx.body = ret;
});

/**
 * 清除无效的品牌
 */
router.delete('/brand', async (ctx, next) => {
  await next()
  let ret = await brandService.clear()
  ctx.body = ret;
});

/**
 * 获取产品列表
 */
router.get('/product', async (ctx, next) => {
  await next()
  let ret = await productService.list()
  ctx.body = ret
});

/**
 * 获取产品列表
 */
router.post('/product', async (ctx, next) => {
  await next()
  let {
    productName,
    brandId,
    brandName,
    categoryId,
    categoryName,
    productStock,
    productSales,
    productDescription,
    productLogo
  } = ctx.request.body
  // console.log(ctx)
  let ret = await productService.add({
    // 商品名称
    productName,
    // 品牌ID
    brandId,
    // 品牌名称
    brandName,
    // 类目名称
    categoryName,
    // 类目ID
    categoryId,
    // 商品库存
    productStock,
    // 商品销量
    productSales,
    // 商品描述
    productDescription,
    // 商品LOGO
    productLogo
  })
  ctx.body = ret
});

/**
 * 获取商品信息
 */
router.get('/product/:productId', async (ctx, next) => {
  await next()
  console.log(ctx.params)
  const { productId } = ctx.params
  let ret = await productService.getProductInfo({productId})
  ctx.body = ret
});

// 用户列表
router.get('/user', async (ctx, next) => {
  await next()
  let ret = await userService.list()
  ctx.body = ret;
});

// 用户注册
router.post('/user/register', async (ctx, next) => {
  await next()
  const { username, mobile, password } = ctx.request.body
  let ret = await userService.register({username, mobile, password})
  ctx.body = ret;
});

// 用户注册
router.post('/user/login', async (ctx, next) => {
  await next()
  const { mobile, password } = ctx.request.body
  let ret = await userService.login({mobile, password})
  ctx.body = ret;
});

// 获取用户信息
router.post('/user/getUserInfo', async (ctx, next) => {
  await next();
  let { loginToken } = ctx.request.body
  let ret = await userService.getUserInfo({ loginToken })
  ctx.body = ret;
})


// 获取顺丰地址
router.get('/common/city', async (ctx, next) => {
  await next();
  let ret = await commonService.getCity()
  ctx.body = ret;
})

const storage = multer.diskStorage({
  destination (req, file, cb) {
    cb(null, path.resolve('/data/wwwroot/img/productlogo'))
    // cb(null, path.resolve('/Users/arraybuffer/Desktop/uploads'))
  },
  filename (req, file, cb) {
    let date = new Date().getTime();
    cb(null, `${date}-${file.fieldname}.png`);
  }
});

const upload = multer({ storage })

// // 头像上传
router.post('/user/upload', upload.single('avatar'), async (ctx, next) => {
  await next();
  ctx.body = {
    code: '0',
    msg: 'ok',
    data: {
      url: `/uploads/${ctx.req.file.filename}`
    }
  }
});

router.post('/product/upload', upload.single('file'), async (ctx, next) => {
  await next();
  ctx.body = {
    code: '0',
    msg: 'ok',
    data: {
      url: `/productlogo/${ctx.req.file.filename}`
    }
  }
});

// 获取书籍列表
router.get('*', async (ctx, next) => {
  await ctx.render('index', {
    name: '拉德影视'
  })
});

module.exports = router;
