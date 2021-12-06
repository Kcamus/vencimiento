const Connections=require('../Connections');
function itemByDate(fecha){
    let connectionString="mongo://localhost:27017";
    let client=new Connections(connectionString);
    client.Connect();

    client.findBy('refeven','productos',{fecha_vencimiento:{$eq:new Date(fecha)}});

    client.closeConnection();

}