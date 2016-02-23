Courses = new Mongo.Collection('Courses');

courseSchema  = new SimpleSchema({
	title: {
		type: String,
		label: "Course Title"
	},
    description: {
    	type: String,
    	label: "Description"
    },
    createdAt: {
    	type: Date,
    	autoValue: function(){
    		return new Date();
    	},
    	autoform:{
    		type: 'hidden'
    	}
    },
    startDate:{
    	type: String,
    	label: "Start Date"
    },
    sessions: {
    	type: String,
    	label: "No. of sessions"
    },
    duration: {
    	type: String,
    	label: "Duration of the course"
    },
    price: {
    	type: String,
    	label: "Course Price"
    },
    createdBy:{
    	type: String,
    	autoValue:function(){
    			return Meteor.userId();	
    	},
    	autoform:{
    		type:'hidden'
    	}
    }
});

Courses.attachSchema(courseSchema);
