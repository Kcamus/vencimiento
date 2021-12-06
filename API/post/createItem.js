const Connections=require('../Connections')
function createItem(name,presentacion,cantidad,unidad,cal_extra,cal_prim,valor_kilo,proveedor,lote,fecha_elaboracion,fecha_vencimiento,Obj_ubicacion,estado){

     let connectionString="mongo://localhost:27017";
    let client=new Connections(connectionString);
    client.Connect();

    client.findBy('refeven','productos',{$and:[{lote:{$eq:lote}},{plu:{$eq:plu}}]});

    client.closeConnection();
}