const postTagService = require('../service/postTag')

module.exports = {
  async list (ctx) {
    let ret = await postTagService.list();
    ctx.body = ret;
  },

  async add (ctx) {
    const { tagName } = ctx.request.body;
    let ret = await postTagService.add({ tagName });
    ctx.body = ret;
  },

  async delete (ctx) {
    const postId = ctx.params.tagId;
    let ret = await postTagService.delete({ tagId });
    ctx.body = ret;
  },

  async update (ctx) {
    const { tagId, tagName } = ctx.request.body;
    let ret = await postTagService.update({ tagId, tagName });
    ctx.body = ret;
  }
}