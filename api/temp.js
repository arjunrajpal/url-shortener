var counterUrl=require('../models/counterUrl');

module.exports=function(req,res){
	var a=new counterUrl({
		_id:'count'
	});

	a.save(function(err){
		console.log("temp reached");
		res.json({"status":"inserted"});
	});
}