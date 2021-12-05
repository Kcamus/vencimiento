
const {MongoClient}=require("mongodb");

module.exports= class Connections{
    /* 
    Clase connection, la cual permite realizar la conexion con el sistema gestor de  bases de datos
    */
    USER;
    PASSWORD;
    SERVER;
    PORT;
    connectionString;
    client;
    constructor(_connectionString){

      
        this.connectionString=_connectionString;
        
        this.client=new MongoClient(this.connectionString);


    }
    //Metodo que crea la conexión con SGBD de mongodb
    async Connect(){
        try{
            await this.client.connect();
            console.log("conecction successful");
        }
        catch(error){
            console.log(error)
        }
    }

//Metodo para cerrar conexion con SGBD mongodb
    async closeConnection(){
        await this.client.close();
        console.log("Connection has been close");
    }

    async search(db,coll,object){
       let collection =this.client.db(db).collection(coll);
        let result=await collection.find(object);
        return JSON.parse(result);
    }






}