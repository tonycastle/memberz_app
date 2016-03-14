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
    	type: Date,
    	label: "Start Date",
        autoform: {
            type: "bootstrap-datepicker"
        }
    },
    sessions: {
    	type: Number,
    	label: "No. of sessions"
    },
    duration: {
    	type: String,
    	label: "Duration of the course"
    },
    price: {
    	type: Number,
        min:1,
        decimal:true,
    	label: "Course Price",
        autoform: {
            step:"0.01"
        }
    },
    createdBy:{
    	type: String,
    	autoValue:function(){
    			return Meteor.userId();	
    	},
    	autoform:{
    		type:'hidden'
    	}
    },
    max_subscriptions:{
        type: Number,
        label: "Class Size"
    },
    subscription_count:{
        type: Number,
        defaultValue:0,
        autoform:{
            type:'hidden'
        }
    }
});

Courses.attachSchema(courseSchema);
