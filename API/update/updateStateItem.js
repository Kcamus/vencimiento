const { ObjectId } = require('mongodb');
const Connections=require('../Connections');

module.exports=async function updateStateItem(new_state,id){
    let connectionsString="mongodb://localhost:27017";
    let client=new Connections(connectionsString);
    
    client.Connect();
    let filter={$set:{estado:new_state}};
    let object={_id:ObjectId(id)};
    client.updateBy('refeven','productos',object,filter).then((respuesta)=>{
        console.log(respuesta);
        return respuesta
    });
   ;
    //client.closeConnection();
}
