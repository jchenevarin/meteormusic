Template.admin.rendered = function () {
	console.log("Template Rendered.. place some init code here");
};

Template.admin.helpers({});

Template.admin.events({
	"click #beetImport" : function() {
		console.log("beet import");
	}

});

