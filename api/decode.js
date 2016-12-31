module.exports=function(url){

	// var base58='123456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ';
	var base58=[1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z'];

	var length=url.length;
	var decodedUrl=0;

	for(var i=0;i<length;i++)
	{
		decodedUrl+=(base58.indexOf(url[i])*Math.pow(58,i));
	}

	return decodedUrl;
}