module.exports=function(url){

	// var base58='123456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ';
	var base58=[1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z'];

	var encodedData="";

	while(url)
	{
		var index=url%58;
		url=Math.floor(url/58);
		encodedData+=base58[index];
	}

	return encodedData;
}