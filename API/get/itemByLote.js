const Connections=require('../Connections');
function itemByLote(plu,lote){
    let connectionString="mongo://localhost:27017";
    let client=new Connections(connectionString);
    client.Connect();

    client.findBy('refeven','productos',{$and:[{lote:{$eq:lote}},{plu:{$eq:plu}}]});

    client.closeConnection();
}