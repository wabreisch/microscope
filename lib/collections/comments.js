Comments = new Mongo.Collection('comments');

Meteor.methods({
	commentInsert: function (commentAttributes) {
		check(this.userId, String);
		check(commentAttributes, {
			postId: String,
			body: String
		});

		var user = Meteor.user();
		var post = Posts.findOne(commentAttributes.postId);

		if (!post)
			Errors.throw('You must enter a comment on the post');

		comment = _.extend(commentAttributes, {
			userId: user._id,
			author: user.username,
			submitted: new Date()
		});

		Posts.update(comment.postId, {$inc: {commentsCount: 1}});

		comment._id = Comments.insert(comment);

		createCommentNotification(comment);

		return comment._id;
	}
});