var express=require('express');
var api=express.Router();

var redirect=require('./redirect');
var getShortenedUrl=require('./getShortenedUrl');
var show=require('./show')
var temp=require('./temp');

api.get('/get',function(req,res){
	console.log("Heloo");
});

api.post('/getShortenedUrl',function(req,res){
	getShortenedUrl(req,res);
});

api.get('/:shortenedUrl',function(req,res){
	redirect(req,res);
});

// api.get('/temp',function(req,res){
// 	console.log("temp reached");
// 	temp(req,res);
// });


module.exports=api;
