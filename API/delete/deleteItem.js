
const { ObjectId } = require('mongodb');
const Connections=require('../Connections')


module.exports=function deleteItem(id){
    let connectionString="mongodb://localhost:27017";
    let client=new Connections(connectionString);
   
    

    client.Connect()

    client.deleteBy('refeven','productos',{_id:{$eq:new ObjectId(id)}}).then((respuesta)=>{return respuesta});
    


}