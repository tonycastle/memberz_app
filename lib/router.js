FlowRouter.route('/',  {
 	name: 'index',
 	action(){
 		BlazeLayout.render('MainLayout',{main: 'courseList'});
 	}
});

FlowRouter.route('/admin',{ 
	name: 'admin',
  	action(){
  		BlazeLayout.render('AdminLayout', {main: 'adminIndex'});
  	}
});

FlowRouter.route('/profile',{ 
	name: 'profile',
  	action(){
  		BlazeLayout.render('AdminLayout', {main: 'adminProfile'});
  	}
});

FlowRouter.route('/course/:id', {
  	name: 'course',
  	action(){
  		BlazeLayout.render('MainLayout',{main: 'courseDetail'});
  	}	
});
