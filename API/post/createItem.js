const Connections=require('../Connections')
module.exports=function createItem(object){

     let connectionString="mongodb://localhost:27017";
    let client=new Connections(connectionString);
    client.Connect();

    let respuesta=client.insertBy("refeven","productos",object);
    return respuesta;
    //client.closeConnection();
}