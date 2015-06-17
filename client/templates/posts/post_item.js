Template.postItem.helpers({
	ownPost: function () {
		return this.userId === Meteor.userId();
	},
	domain: function () {
		var a = document.createElement('a');
		a.href = this.url;
		return a.hostname;
	},
	hasOneComment: function () {
		return this.commentsCount === 1;
	}
});

Template.postItem.events({
	'click .upvote': function (e) {
		e.preventDefault();
		Meteor.call('upvote', this._id);
	}
});