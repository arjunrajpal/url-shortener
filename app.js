var express= require('express');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');

var api=require('./api');

var app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api',api);

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/test');

app.get('/',function(req,res){
	res.sendFile(__dirname+'/views/index.html');
});

app.set('port',process.env.Port||3000);
app.listen(app.get('port'));

console.log("Running");