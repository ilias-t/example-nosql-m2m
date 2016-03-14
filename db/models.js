var mongoose = require('mongoose');
var schemas = require('./schemas');
//Models
module.exports.Post = mongoose.model('Post', schemas.PostSchema);
module.exports.User = mongoose.model('User', schemas.UserSchema);
module.exports.Tag = mongoose.model('Tag', schemas.TagSchema);
module.exports.PostTag = mongoose.model('PostTag', schemas.PostTagSchema);
