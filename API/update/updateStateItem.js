const Connections=require('../Connections');

module.exports=function updateStateItem(new_state,id){
    let connectionsString="mongodb://localhost:27017";
    let client=new Connections(connectionsString);

    client.Connect();

    let respuesta=client.updateBy('refeven','productos',{_id:id},{$set:{estado:new_state}});
    console.log(respuesta);
    return respuesta;
    //client.closeConnection();
}