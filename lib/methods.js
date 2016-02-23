Meteor.methods({
	addCourse: function(course){
		Courses.insert(course);
	}
});