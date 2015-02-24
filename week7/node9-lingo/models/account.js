var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
    username: {type: String, required: true, unique: true },
    password: String,
    role: { type: Boolean, required: true, default: false },
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);
