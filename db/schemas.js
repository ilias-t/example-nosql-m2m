var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schemas
var PostSchema = new Schema({
  title: String,
  body: String,
  userId: {type: Schema.Types.ObjectId, ref: 'User'},
  createdAt: { type : Date, default: new Date() }
});

var UserSchema = new Schema({
  name: String,
  bio: String
});

var TagSchema = new Schema({
  kind: String
});

var PostTagSchema = new Schema({
  postId: {type: Schema.Types.ObjectId, ref: 'Post'},
  tagId: {type: Schema.Types.ObjectId, ref: 'Tag'}
});

/*
  In general, referencing data makes
  relationships easier to work with.
*/

module.exports = {
  PostSchema: PostSchema,
  UserSchema: UserSchema,
  TagSchema: TagSchema,
  PostTagSchema: PostTagSchema
}
