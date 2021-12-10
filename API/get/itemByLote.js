const Connections=require('../Connections');
module.exports=function itemByLote(plu,lote){
    let connectionString="mongodb://localhost:27017";
    let client=new Connections(connectionString);
    client.Connect();

    let respuesta=client.findBy('refeven','productos',{$and:[{lote:{$eq:lote}},{plu:{$eq:plu}}]});

    return respuesta;
    //client.closeConnection();
}