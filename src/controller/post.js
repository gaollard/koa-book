const postService = require('../service/post')

module.exports = {
  async list (ctx) {
    let ret = await postService.list();
    ctx.body = ret;
  },

  async item (ctx) {
    const postId = ctx.params.postId
    const ret = await postService.item({ postId })
    console.log(ret)
    ctx.body = ret
  },

  async add (ctx) {
    console.log(ctx.request.body)
    const { title, html, markdown } = ctx.request.body;
    let ret = await postService.add({ title, html, markdown });
    ctx.body = ret;
  },

  async delete (ctx) {
    const postId = ctx.params.postId;
    let ret = await postService.delete({ postId });
    ctx.body = ret;
  },

  async update (ctx) {
    const { postId }  = ctx.params;
    const { title, html, markdown } = ctx.request.body;
    let ret = await postService.update({ title, html, markdown, postId });;
    ctx.body = ret;
  },

  async clear (ctx) {
    let ret = await postService.clear();;
    ctx.body = ret;
  }
}