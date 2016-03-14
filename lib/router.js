var adminSection = FlowRouter.group({
  prefix: "/admin"
});

//routing for the visitor section

//the main page (index page)
FlowRouter.route('/',  {
 	name: 'index',
 	action(){
 		BlazeLayout.render('MainLayout',{main: 'courseList'});
 	}
});

//Course detail page from where a user can subscribe
FlowRouter.route('/course/:id', {
    name: 'course',
    action(){
      BlazeLayout.render('MainLayout',{main: 'courseDetail'});
    } 
});

//page showing the user the courses they are subscribed to
FlowRouter.route('/usersubscriptions',{
  name: 'usersubscriptions',
  action(){
    BlazeLayout.render('MainLayout',{main: 'userSubscriptions'});
  }
});

//page showing the user profile
FlowRouter.route('/profile',{
  name: 'profile',
  action(){
    BlazeLayout.render('MainLayout',{main: 'userProfile'});
  }
});

//page showing the user the courses they are subscribed to
FlowRouter.route('/editprofile',{
  name: 'editprofile',
  action(){
    BlazeLayout.render('MainLayout',{main: 'editProfile'});
  }
});

//the admin section routing  - mere mortals may not enter. (Thou shalt not pass)
//Need to add escurity to these routes. Users must be logged in and have an admin priviledge level.
//TODO: add the roles package - will impact this.
adminSection.route('/',{ 
	name: 'admin',
  	action(){
  		BlazeLayout.render('AdminLayout', {main: 'adminIndex'});
  	}
});

adminSection.route('/course/:id', {
    name: 'course',
    action(){
      BlazeLayout.render('AdminLayout',{main: 'adminCourseDetail'});
    } 
});

adminSection.route('/createcourse/', {
    name: 'createCourse',
    action(){
      BlazeLayout.render('AdminLayout',{main: 'adminCreateCourse'});
    } 
});

adminSection.route('/profile',{ 
	name: 'adminProfile',
  action(){
  	BlazeLayout.render('AdminLayout', {main: 'adminProfile'});
  }
});

adminSection.route('/locatiom',{
  name: 'adminLocation',
  action(){
    BlazeLayout.render('AdminLayout', {main: 'adminLocation'});
  }
});

adminSection.route('/services',{
  name: 'adminServices',
  action(){
    BlazeLayout.render('AdminLayout', {main: 'adminServices'});
  }
});
adminSection.route('/createservice',{
  name: 'adminCreateService',
  action(){
    BlazeLayout.render('AdminLayout', {main: 'adminCreateService'});
  }
});

FlowRouter.notFound = {
  action:function(){
    BlazeLayout.render('MainLayout',{main: 'notFound'});
  }
};
