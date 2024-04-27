var express=require('express');
var app=express();

app.get('/',function(req,res){
    res.send('<h1>Hello Sir, please share that video of connection with SQL using render...</h1>')
})

app.listen(3000,function(){
    console.log('server is running on port 3000')
})
