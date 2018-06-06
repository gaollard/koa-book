const mongoose = require('mongoose');
const MG_URL = `mongodb://39.108.138.156:27017`;

mongoose.connect(MG_URL);
mongoose.connection.on('connected', () => {
  console.log('mongodb connected');
});

module.exports = mongoose.connection;
