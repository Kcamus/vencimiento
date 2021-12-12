const Connections=require("../Connections");


async function find(){
   try {
    let client=new Connections("mongodb://localhost:27017");
    client.Connect();
    let respuesta=  await client.findBy("refeven","productos",{});
    
    return respuesta;
       
   } catch (error) {
       return error
   }

}
module.exports=find;