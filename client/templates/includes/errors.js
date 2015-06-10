Template.errors.helpers({
	errorList: function () {
		return Errors.find({});
	}
});

Template.error.onRendered(function () {
	var error = this.data;
	Meteor.setTimeout(function () {
		Errors.remove(error._id);
	}, 3000);
});