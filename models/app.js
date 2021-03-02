const mongoose = require('mongoose');
const AppSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});
const App = mongoose.model('App', AppSchema);

module.exports = App;
