var express = require('express');
const midelware = require('./middleware.js');
var app = express();
app.use(express.json())
//app.use(midelware)
app.get('/',midelware, (req, res)=>{

    res.sendFile(__dirname+'/index.html');
})
app.get('/home',midelware,(req, res)=>{

    res.sendFile(__dirname+'/Home.html');
})
app.get('/contact',midelware, (req, res)=>{

    res.sendFile(__dirname+'/Contact us.html');
})


app.get('/Services',midelware, (req, res)=>{

    res.sendFile(__dirname+'/Our Services.html');
})






app.listen(4000, () => console.log('Example app listening on port 4000!'));
