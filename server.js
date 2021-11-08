const e=require('express');
const bp=require('body-parser');
const cs=require('cors');
const p=require('path');
const path = require('path');
const api=require('./routes/routes');

const app=e();

const port=process.env.PORT || 5000;

// this application level middleware prints incoming reqs to the server console
app.use((req,res,next)=>{
    console.log(`Request_Endpoint:${req.method}${req.url}`);
    next();
});

app.use(bp.json());
app.use(bp.urlencoded({
    extended:true
}));

app.use(cs());

app.use('/api/v1/',api);

// this middleware informs express application to serve our compiled react files
if(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging'){
    app.use(e.static(path.join(__dirname,'nodejscert/build')));

    app.get('*',function(req,res){
        res.sendFile(path.join(__dirname,'nodejscert/build', 'index.html'));
    });
};

// Catch any bad request
app.get('*',(req,res)=>{
    res.status(200).json({
        msg:'Catch All'
    });
});

app.listen(port,()=>console.log(`BACK_END_SERVICE_PORT: ${port}`));