

if (Meteor.isClient) {
  Template.courseList.onCreated(function(){
    this.autorun(()=>{
      this.subscribe('AllCourses');
    });
  });

  Template.courseList.helpers({
    courses: function () {
      return Courses.find();
    }
  });

  Template.courseDetail.onCreated(function(){
    this.courseId = FlowRouter.getParam('id');
    this.autorun(()=>{
      this.subscribe('CourseDetail',this.courseId);
    });
  });

  Template.courseDetail.helpers({
    courseDetail: function(id){
      var id = FlowRouter.getParam('id');
      return Courses.findOne({ _id: id });
    }
  });

}

if (Meteor.isServer) {
  //this will be used in stage 2 when there is a hierarchical ownership system in place
  Meteor.publish('AllCoursesByOwner', function(){
    return  Courses.find({createdBy: this.userId});
  });

  Meteor.publish('AllCourses', function(){
    return Courses.find();
  });

  Meteor.publish('CourseDetail', function(courseId){
    return Courses.find({_id: courseId});
  });
}
