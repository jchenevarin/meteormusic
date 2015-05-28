Template.home.rendered = function () {
	console.log("Template home rendered.. place some init code here");
};

Template.home.helpers({
	songs: function () {
		return Songs.find({});
	}
});

Template.home.events({});
