const Connections=require("../Connections")
 async function findByPlu(plu){
     let client= new Connections("mongodb://localhost:27017");
     client.Connect();
    let respuesta=await client.findBy('refeven','productos',{plu:{$eq:plu}})
    return respuesta;
 }

module.exports= findByPlu;