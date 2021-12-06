
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

 /* Metodo para buscar items en el SGBD mongodb
    el metodo recibe 3(tres) parametros:
        -db: nombre de la base de datos en el que se realizara la consulta.
        -coll:nombre de la colección en la que se ralizara la consulta.
        -object: un objecto JSON con la estructura de la consulta.

        campos y tipo de datos por los cuales se puede buscar:
            -Nombre:string
            -presentación:string
            -cantidad:double
            -calidad_extra:double
            -calidad_primera:double
            -valor_kilo:double
            -proveedor:string
            -lote:string
            -fecha_elaboración: new Date(yyyy-mm-dd)
            -fecha_vencimiento:new Date(yyyy-mm-dd)
            -ubicación:object{x:int,y:int,z:int
            -estado:string ["En bodega","En punto de venta","vendido","vencido","proximo a vencer"]
        }
 */
    async findBy(db,coll,object){
        let respuesta;
        try {
            let collection= this.client.db(db).collection(coll);
            respuesta=  await collection.find(object).toArray();
            return respuesta;
            
        } catch (error) {
            return error;
        }
        

    }
/* 
    Metodo que permite el borrado de un elemento  del SGBD.
    recibe 3(tres) parametros:
        -db: nombre de la base de datos de la cual se puede obtener los datos
        -coll:nombre de la colección de la cual se  obtendrar los datos
        -object: objeto JSON con la cadena de eliminación de acuerdo con la documentacón de mongodb.
*/
    async deleteBy(db,coll,object){
        try {
            let collection=this.client.db(db).collection(coll);
            let respuesta= await collection.deleteOne(object);
            if(respuesta){
                return true;
            }
            else{
                return false;
            }
        } catch (error) {
            return error
        }
    }

    /* 
    Metodo que permite actualizar datos del SGBD 
    Este recibe 4(cuatro) parametros:
        -db: nombre de la base de datos de la cual se obtendrar los datos.
        -coll: nombre de la colección de la cual se extraera los datos.
        -object: objeto JSON con el dato con el que se realizará la actualización
        -filter: objeto JSON con los datos que seran actualizados.
    */
    async updateBy(db,coll,object,filter){
        try {
            let collection =this.client.db(db).collection(coll);
            let respuesta= await collection.updateOne(object,filter);
            return respuesta;
        } catch (error) {
            return error
        }
    }
/*  
    Metodo que inserta un nuevo recurso a la base de datos
    este recibe 3(tres) parametros:
        -db: nombre de la base de datos de la cual se obtendrar los datos.
        -coll: nombre de la colección de la cual se extraera los datos.
        -object: objeto JSON con los datos a insertar
*/
    async insertBy(db,coll,object){
        try {
            let collection=this.client.db(db).collection(coll);
            let respuesta=await collection.insertOne(object);
            if(respuesta){
                return true
            }  
            else{
                return false
            }
        } catch (error) {
            return error
        }
    }





}