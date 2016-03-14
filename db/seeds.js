var models = require('./models');
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/m2m');
var User = models.User;
var Post = models.Post;
var Tag = models.Tag;
var PostTag = models.PostTag;

// clear the database
// TODO: sychronize timing more explicitly to create actions below
Post.remove({});
User.remove({});
Tag.remove({});
PostTag.remove({});
// database actions
// TODO: refactor with mongoose's `query.then()``...
var user = {
  name: "buzz",
  bio: "to infinity and beyond!"
};
// create data
User.create(user, function(err, user) {
  console.log("created user:", user)
  var posts = [
    {
      title: "the final frontier",
      body: "Finally passed the kepler belt!",
      userId: user._id
    },
    {
      title: "deep space",
      body: "nothing for miles...",
      userId: user._id
    }
  ];
  // create posts
  Post.create(posts, function(err, posts) {
    console.log("created posts:", posts)
    var tags = [
      {kind: "adventure"},
      {kind: "lovely"}
    ];
    // create tags
    Tag.create(tags, function(err, tags) {
      console.log("created tags:", tags);
      var post1 = posts[0];
      var post2 = posts[1];
      var tag1 = tags[0];
      var tag2 = tags[1];
      // associate tags with posts
      var postTags = [
        {
          postId: post1._id,
          tagId: tag1._id
        },
        {
          postId: post2._id,
          tagId: tag2._id
        },
        {
          postId: post1._id,
          tagId: tag2._id
        }
      ];
      PostTag.create(postTags, function(err, postTags) {
        console.log("m2m association made!", postTags);
        // disconnect from the database
        mongoose.disconnect();
      });
    });
  });
});
