// Routing configuration
Router.configure({
	layoutTemplate: 'applicationLayout'
});

Router.route('/', function () {
	this.layout('applicationLayout');
	this.render('home');
});

Router.route('/admin', function () {
	this.layout('applicationLayout');
	this.render('admin');
});