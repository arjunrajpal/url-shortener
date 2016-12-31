var mongoose=require('mongoose');
var counterUrl=require('./counterUrl');

var urlSchema=mongoose.Schema({
	_id:Number,
	originalUrl:String,
	date:Date
});

urlSchema.pre('save',function(next){
	var urlDoc=this;
	counterUrl.findByIdAndUpdate({_id:'count'},{$inc:{count:1}},function(err,doc){
		urlDoc._id=doc.count;
		next();
	});
});

var url=mongoose.model('url',urlSchema);

module.exports=url;
