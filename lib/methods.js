Meteor.methods({
	//Course related methods
	addCourse: function(course){
		Courses.insert(course);
	},

	deleteCourse: function(courseId){
		//if user is the owner of the course allow the delete otherwise throw an error.
		//TODO: what to do if the course has subscriptions already - cancel and refund or prevent delete.
		var course = Courses.findOne(courseId);
		if(course && course.createdBy !== this.userId){
			throw new Meteor.Error(403, "You must own doc to do that.");
		}
		Courses.remove(courseId);
	},
	
	editCourse: function(courseId){
		//if user is the owner of the course allow the edit otherwise throw an error.
		//TODO: need to decide when this is allowed or not. eg if someone has signed up already can the details be altered.
		// var course = Courses.findOne(courseId);
		// if(course && course.createdBy !== this.userId){
		// 	throw new Meteor.Error(403, "You must own doc to do that.");
		// }
		// Courses.update(courseId);
	},

	//subscription related methods
	addSubscription: function(courseId){
		//check course Id is valid
		//TODO: figure out payment process, design the subscription collection - what details do we need to store for a sub.
		var course = Courses.find({_id:courseId});
		if(course.count()!==1){
			throw new Meteor.Error(403, "This course does not exist.");	
		}
		//this limits the user to one subscription per course but is it reactive?
		if(Subscriptions.find({course_id: courseId, user_id: Meteor.userId()}).count() > 0){
			throw new Meteor.Error(403, 'You are already subscribed for this course.');
		}
		//TODO this is not tested
		if(course.subscription_count === course.maximum_subscriptions){
			throw new Meteor.Error(403, 'Sorry this course is super popular and there are no places left.');
		}
		Subscriptions.insert({
			course_id: courseId,
			user_id: Meteor.userId(),
			sub_date: new Date(),
		});
		Courses.update({_id:courseId},{$inc:{subscription_count:1}});
	},

	deleteSubscription: function(subId){
		//for the time being we will limit deletes to the user who made the sub
		//TODO: determine when a subscription can be deleted - maybe only with consent of the course provider etc
		let sub = Subscriptions.findOne(subId);
		if(sub && sub.user_id !== this.userId){
			throw new Meteor.Error(403, "You can only delete your own subscription.")
		}
		Subscriptions.remove(subId);
	},

	editSubscription: function(subId){
		//edit the subscription
	},

	//user profile methods
	//we don@t need an add as only a signed in user can have a profile, therefore we just edit the existing user account
	//to edit the profile field
	editUserProfile: (firstName, lastName)=>{
		Meteor.users.update({_id:Meteor.userId()},{
			$set: {
				firstName: firstName,
				lastName: lastName
			}
		});
	},

	//need to decide if thos will just delete the profile or delete the entire user account, maybe we would like to keep the details 
	//in the db but just make it inactive
	deleteUserProfile: ()=>{

	},

	//admin profile methods
	//this has an add as an admin may create a new account for a member of staff - will be used when the roles feature is working. We will
	//create a new user, the user may then edit their profile
	addAdminAccount: ()=>{

	},

	editAdminAccount: ()=>{

	},

	deleteAdminAccount: ()=>{

	},

	addService: (Service)=>{
		Services.insert(Service);
	},
	deleteService: (serviceId)=>{
		Services.delete(serviceId);
	},
	editService: ()=>{
		//edit the service
	}
});