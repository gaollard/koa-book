const path = require('path');
const router = require('koa-router')();
const multer = require('koa-multer');
const controller = require('./controller.js');

// 書籍列表
router.get('/book', async (ctx, next) => {
  await next();
  controller.book.list(ctx);
});

// 書籍詳情
router.get('/book/:id', async (ctx, next) => {
  await next();
  controller.book.item(ctx);
});

// 電影列表
router.get('/movie/:tag', async (ctx, next) => {
  await next();
  return controller.movie.list(ctx);
});

// 電影詳情
router.get('/movie/subject/:id', async (ctx, next) => {
  await next();
  return controller.movie.item(ctx);
});

// 商品類目
router.get('/category', async (ctx, next) => {
  await next();
  return controller.category.list(ctx);
});

// 新增商品類目
router.post('/category', async (ctx, next) => {
  await next();
  return controller.category.add(ctx);
});

// 刪除所有類目
router.delete('/category', async (ctx, next) => {
  await next();
  return controller.category.clear(ctx);
});

// 新增類目
router.post('/brand', async (ctx, next) => {
  await next();
  return controller.brand.add(ctx);
});

// 获取品牌列表
router.get('/brand', async (ctx, next) => {
  await next();
  return controller.brand.list(ctx);
});

// 清除无效的品牌
router.delete('/brand', async (ctx, next) => {
  await next();
  return controller.brand.clear(ctx);
});

// 获取产品列表
router.get('/product', async (ctx, next) => {
  await next();
  return controller.product.list(ctx);
});

// 获取产品列表
router.post('/product', async (ctx, next) => {
  await next();
  return controller.product.add(ctx);
});

// 获取产品詳情
router.get('/product/:productId', async (ctx, next) => {
  await next();
  return controller.product.item(ctx);
});

// 用户注册
router.post('/user/register', async (ctx, next) => {
  await next();
  return controller.user.register(ctx);
});

// 用户登錄
router.post('/user/login', async (ctx, next) => {
  await next();
  console.log(ctx.request.body)
  return controller.user.login(ctx);
});

// 获取用户信息
router.post('/user/info', async (ctx, next) => {
  await next();
  return controller.user.getUserInfo(ctx);
})

// 用户列表
router.get('/users', async (ctx, next) => {
  await next();
  return controller.user.list(ctx);
});

// 获取帖子列表
router.get('/post', async (ctx, next) => {
  await next();
  return controller.post.list(ctx);
});

// 获取帖子列表
router.post('/post', async (ctx, next) => {
  await next();
  return controller.post.add(ctx);
});

// 获取帖子信息
router.get('/post/:postId', async (ctx, next) => {
  await next();
  return controller.post.item(ctx);
});

// 更新文章信息
router.post('/post/:postId', async (ctx, next) => {
  await next();
  return controller.post.update(ctx);
});

// 获取帖子信息
router.delete('/post', async (ctx, next) => {
  await next();
  return controller.post.clear(ctx);
});

// 获取顺丰地址
router.get('/common/city', async (ctx, next) => {
  await next();
  return controller.city.index(ctx);
})

const storage = multer.diskStorage({
  destination (req, file, cb) {
    cb(null, path.resolve('/data/wwwroot/img/productlogo'))
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

router.get('/postTag', async (ctx, next) => {
  await next();
  return controller.postTag.list(ctx);
});

router.post('/postTag', async (ctx, next) => {
  await next();
  return controller.postTag.add(ctx);
})

module.exports = router;