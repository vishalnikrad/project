var express=require('express');
var app=express();

app.get('/',function(req,res){
    res.send('<h1>Hello Sir, can you please share that video of connection of SQL with render...</h1>')
})

app.listen(3000,function(){
    console.log('server is running on port 3000')
})
