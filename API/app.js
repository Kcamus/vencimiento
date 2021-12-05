const Connections=require('./Connections');

let conn = new Connections("mongodb://localhost:27017");

conn.Connect();
conn.findBy("refeven","productos",{$and:[{fecha_vencimiento:{$lt:new Date('2021-12-30')}},{fecha_vencimiento:{$gt:new Date('2021-12-20')}}]}).then((list)=>{
       console.log(list);
       return true;
   }).then((val)=>{
       conn.closeConnection()
   });

