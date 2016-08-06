var mongoose = require('mongoose');

var ProfileSchema = new mongoose.Schema({
	name: {type:String, trim:true,lowercase:true, default:''},
	email: {type:String, trim:true, lowercase:true, default:''},
	longitude: {type:Number, default:0},
	latitude: {type:Number, default:0},
	phonenumber: {type:String, trim:true, default:''},
	operationhours: {type:String, trim:true, default:''},
	address: {type:String, trim:true, lowercase:true, default:''},
	type: {type:String, trim:true, default:''},
	city: {type:String, trim:true, lowercase:true, default:''},
	country: {type:String, trim:true, lowercase:true, default:''},
	zipcode: {type:String, trim:true, default:''},
	timestamp: {type:Date, default: Date.now}
});

ProfileSchema.methods.summary = function() {
	var summary = {
		'name':this.name,
		'email':this.email,
		'longitude': this.longitude,
		'latitude': this.latitude, 
		'phonenumber':this.phonenumber,
		'operationhours':this.operationhours,
		'address':this.address,
		'type':this.type,
		'city':this.city,
		'country':this.country,
		'zipcode':this.zipcode,
		'timestamp':this.timestamp,
		'id':this._id
	};
	
	return summary;
};

module.exports = mongoose.model('ProfileSchema', ProfileSchema);