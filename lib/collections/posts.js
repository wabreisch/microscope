Posts = new Mongo.Collection('posts');

Posts.allow({
	insert: function (userId, doc) {
		return !! userId; // only allow posting if logged in
	}
});