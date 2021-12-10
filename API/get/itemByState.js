const Connections=require('../Connections');
module.exports=function itemByState(estado){
    let connectionString="mongodb://localhost:27017";
    let client=new Connections(connectionString);
    client.Connect();

    let respuesta=client.findBy('refeven','productos',{estado:{$eq:estado}});
    return respuesta;
    
    //client.closeConnection();
}