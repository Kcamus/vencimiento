const Connections=require('../Connections');

function updateStateItem(old_state,new_state){
    let connectionsString="mongo://localhost:27017";
    let client=new Connections(connectionsString);

    client.Connect();

    let respuesta=client.updateBy('refeven','productos',{estado:old_state},{$set:{estado:new_state}});
    console.log(respuesta);

    client.closeConnection();
}