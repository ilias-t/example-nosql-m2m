var db = require("../db/models");
var Post = db.Post;
var Tag = db.Tag;

describe("Post", function() {
  describe("instance has method", function() {
    var post;
    beforeEach(function() {
      post = new Post({
        title: "lorem ipsum",
        body: "ipsum lorem"
      })
    });
    it("#tags", function() {
      expect(post.tags).toBeDefined();
    })
  })
});

describe("Tag", function() {

});
