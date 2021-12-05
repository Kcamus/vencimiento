const Connections=require('./Connections');

let conn = new Connections("mongodb://localhost:27017");

conn.Connect();
conn.search("refeven","productos",{}).then((list)=>{
       console.log(list);
       return true;
   }).then((val)=>{
       conn.closeConnection()
   });

