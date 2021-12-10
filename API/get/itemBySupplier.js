const Connections=require('../Connections');
module.exports=function itemBySupplier(supplier){
    let connectionString="mongodb://localhost:27017";
    let client=new Connections(connectionString);
    client.Connect();

    let respuesta=client.findBy('refeven','productos',{proveedor:{$eq:supplier}});
    return respuesta;
    //client.closeConnection();
}