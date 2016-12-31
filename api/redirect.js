var url=require('../models/url');
var decode=require('./decode');

module.exports=function(req,res){
	var shortenedUrl=req.params.shortenedUrl;

	var decodedUrl=decode(shortenedUrl);
	url.findById(decodedUrl,function(err,data){

		if(err)
			res.json({err:err});
		else
		{
			if(data.originalUrl.indexOf('www')!=-1)
			{
				res.redirect("http://"+data.originalUrl);
			}
			else
				res.redirect("http://www."+data.originalUrl);
		}
	});
};