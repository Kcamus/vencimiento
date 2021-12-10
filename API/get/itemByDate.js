const Connections=require('../Connections');
module.exports=function itemByDate(fecha){
    let connectionString="mongodb://localhost:27017";
    let client=new Connections(connectionString);
    client.Connect();

    let respuesta= client.findBy('refeven','productos',{fecha_vencimiento:{$eq:new Date(fecha)}});

    //client.closeConnection();
    return respuesta;

}