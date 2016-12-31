var mongoose=require('mongoose');

var counterSchema=mongoose.Schema({
	_id:String,
	count:{type:Number,default:0}
});

var counterUrl=mongoose.model('counterUrl',counterSchema);

module.exports=counterUrl;