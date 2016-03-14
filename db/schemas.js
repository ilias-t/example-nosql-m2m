var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schemas
var PostSchema = new Schema({
  title: String,
  body: String,
  createdAt: { type : Date, default: new Date() }
});

var UserSchema = new Schema({
  name: String,
  bio: String,
  posts: [PostSchema]
});
/*
  It is helpful to reference rather than embed posts in user
  so the PostTag model (join table) can reference the Post
  more easily by it's Id
*/

var TagSchema = new Schema({
  kind: String
});

var PostTagSchema = new Schema({
  postId: {type: Schema.Types.ObjectId, ref: 'Post'},
  tagId: {type: Schema.Types.ObjectId, ref: 'Tag'}
});

module.exports = {
  PostSchema: PostSchema,
  UserSchema: UserSchema,
  TagSchema: TagSchema,
  PostTagSchema: PostTagSchema
}
