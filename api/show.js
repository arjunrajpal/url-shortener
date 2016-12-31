var url=require('../models/url');
var counterUrl=require('../models/counterUrl');

module.exports=function(req,res){
	
	var urlData,counterUrlData;
	// var uc=new counterUrl({
	// 	_id:'count',
	// 	count:1
	// });

	// uc.save(function(err,doc){

	// });

	// var u=new url({
	// 	_id:12,
	// 	originalUrl:'ssd',
	// 	date:new Date()
	// });

	// u.save(function(err,doc){

	// });

	console.log("hello");
	url.find(function(err,data){
		urlData=data;
		console.log(data);
	});
	counterUrl.find(function(err,data){
		counterUrlData=data;
		console.log(data);
	});

	res.json({url:urlData,counterUrl:counterUrlData,r:"jdjhd"});
}
