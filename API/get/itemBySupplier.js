const Connections=require('../Connections');
function itemBySupplier(supplier){
    let connectionString="mongo://localhost:27017";
    let client=new Connections(connectionString);
    client.Connect();

    client.findBy('refeven','productos',{proveedor:{$eq:supplier}});

    client.closeConnection();
}