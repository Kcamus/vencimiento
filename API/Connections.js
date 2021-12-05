
const {MongoClient}=require("mongodb");

/* 
clase que permite la conexion con el  SGBD mongo.
su constructor recibe una cadena de conexión segun lo establecido en la documentación de mongo
contiene los siguientes metodos
    - Connect() => que  crea la conexión a la base de datos, este no requiere ningun parametro
    - closeConnection() =>
*/

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

    async find(db,coll){
       let collection =this.client.db(db).collection(coll);
        try{

             let result =await collection.find({}).toArray()
            return result;
        }
        catch(error){
            return error
        }
        
    }

    async findBy(){}






}