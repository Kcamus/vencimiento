const Connections=require('../Connections');
function itemByState(estado){
    let connectionString="mongo://localhost:27017";
    let client=new Connections(connectionString);
    client.Connect();

    client.findBy('refeven','productos',{estado:{$eq:estado}});

    client.closeConnection();
}