const Connections=require('./Connections');

let conn = new Connections("mongodb://localhost:27017");

conn.Connect();
conn.findBy("refeven","productos",{$and:[{fecha_vencimiento:{$lt:new Date('2021-12-30')}},{fecha_vencimiento:{$gt:new Date('2021-12-20')}}]}).then((elemen)=>{
    console.log("aqui empieza");
        console.log(elemen)
    console.log("aqui termina");
});

