ProviderProfile = new Mongo.Collection('ProviderProfile');

ProviderProfile.allow({
	insert: function(){
		return true;
	}
});

profileSchema  = new SimpleSchema({
	name: {
		type: String,
		label: "Name:"
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
    address:{
    	type: String,
    	label: "Address"
    },
    postcode: {
    	type: String,
    	label: "Post Code"
    },
    phone: {
    	type: String,
    	label: "Phone Number:"
    },
    email: {
        type: String,
        label: "Email:"
    },
    createdBy:{
    	type: String,
    	autoValue:function(){
    		return this.userId;
    	},
    	autoform:{
    		type:'hidden'
    	}
    }
});

ProviderProfile.attachSchema(profileSchema);
