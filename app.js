const express=require('express');
const res = require('express/lib/response');
const path=require('path');
const  pug=require('pug');




let app=express();
app.set('view engine','pug');


app.get("/",(req,res)=>{
    res.render('index');
});
app.get("/registro",(req,res)=>{
    res.render("registros");
});
app.get("/home",(req,res)=>{
    res.render("home");
});
app.get("/consultar",(req,res)=>{
    res.render("consultas");
});

let PORT=8000  || env.PORT


app.use("/public",express.static(__dirname+'/public'));
app.use("/favicon",express.static(__dirname+"/public/src/img/favicon.svg"));
app.use("/main",express.static(__dirname+'/public/src/js/main.js'));
app.use("/register",express.static(__dirname+'/public/src/js/register.js'));
app.use("/homejs",express.static(__dirname+'/public/src/js/home.js'));
app.use("/consultajs",express.static(__dirname+'/public/src/js/consultas.js'));


app.listen(PORT,()=>{
    console.log(`Server running in port:${PORT}`);
});