const multer = require('koa-multer')
const path = require('path')

const storage = multer.diskStorage({
  destination (req, file, cb) {
    cb(null, path.resolve('/data/static/uploads'))
  },
  filename (req, file, cb) {
    let date = new Date().getTime();
    cb(null, `${date}_${file.fieldname}.png`);
  }
});

const upload = multer({ storage })