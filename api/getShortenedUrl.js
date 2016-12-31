var url=require('../models/url');
var encode=require('./encode');

module.exports=function(req,res){
	
	var originalUrl=req.body.url;
	var shortenedUrl="";

	url.findOne({originalUrl:originalUrl},function(err,doc){

		if(doc)
		{
			shortenedUrl="http://localhost:3000/api/"+encode(doc._id);
    		res.json({shortenedUrl:shortenedUrl});
		}
		else
		{
			var newUrl=new url({
				originalUrl:originalUrl,
				date: new Date()
			});
			newUrl.save(function(err){
				if(err)
					res.json({err:err});
				else
				{
					shortenedUrl="http://localhost:3000/api/"+encode(newUrl._id);
					res.json({shortenedUrl:shortenedUrl});
				}
			});
		}
	});
}