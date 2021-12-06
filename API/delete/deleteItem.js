
const Connections=require('../Connections')

function deleteItem(plu,vence){
    let connectionString="mongo://localhost:27017";
    let client=new Connections(connectionString);

    client.Connect();
    respuesta= await client.deleteBy('refeven','productos',{$and:[{plu:{$eq:plu}},{fecha_vencimiento:{$eq:new Date(vence)}}]});
    client.closeConnection();
}