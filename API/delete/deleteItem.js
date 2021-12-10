
const Connections=require('../Connections')


module.exports=function deleteItem(plu,vence){
    let connectionString="mongodb://localhost:27017";
    let client=new Connections(connectionString);
   
    query={$and:[{plu:{$eq:plu}},{fecha_vencimiento:{$eq:new Date(vence)}}]};

    client.Connect()

    client.find('refeven','productos',query).then((respuesta)=>{return respuesta._id;}).then((_id)=>{
        client.deleteBy('refeven','productos',{_id:_id});
    }).then((respuesta)=>respuesta);
    

    
    
   
    
    
    
}