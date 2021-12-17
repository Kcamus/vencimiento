
const deleteItem=require('./delete/deleteItem');
const itemByDate=require('./get/itemByDate');
const itembyLote=require('./get/itemByLote');
const itemByState=require('./get/itemByState');
const itemBySupplier=require('./get/itemBySupplier');
const createItem=require('./post/createItem');
const updateStateItem=require('./update/updateStateItem');
const find=require('./get/find');
const findByplu=require('./get/findByPlu');



const express = require("express");

    

const app=express();
app.set('views engine','pug');


let router=express.Router();

router.get('/',(req,res)=>{

    res.render('api',{title:"bienvenido a nuestra API"});

});
router.get("/get/all",(req,res)=>{
    
    find().then((respuesta)=>{
       console.log(respuesta)
        res.json(respuesta);
    });
    
});

router.get('/get/plu/:plu',(req,res)=>{
    let plu=req.params.plu;
    findByplu(plu).then((respuesta)=>{
        console.log(respuesta);
        res.json(respuesta);
    }
    );
        
});



router.get("/get/date/:fecha",(req,res)=>{
  itemByDate(req.params.fecha).then((respuesta)=>{
    res.json(respuesta)
  });
});

router.get("/get/lote/:plu/:lote",(req,res)=>{
    itembyLote(req.params.plu,req.params.lote).then((elem)=>{
        res.json(elem);
    })
});

router.get("/get/state/:estado",(req,res)=>{
    itemByState(req.params.estado).then((elem)=>{
     res.json(elem);
    })
});
router.get("/get/supplier/:proveedor",(req,res)=>{
    itemBySupplier(req.params.proveedor).then((elem)=>{
         res.json(elem);
    })
});

router.get("/post",(req,res)=>{
    res.render('post',{title:"Api post informaction"});
   
});
router.post("/post/create",(req,res)=>{
    let object=req.body;
 
        createItem(object).then((elem)=>{
            res.send(elem);
        })
  
});
router.post("/update",(req,res)=>{
  
   updateStateItem(req.body.data.estado,req.body.data._id).then((respuesta=>{
    res.json(respuesta);
   }));
    

});

router.delete("/delete/:id",(req,res)=>{
    
 let respuesta= deleteItem(req.params.id)
    res.send(respuesta);
   
  
});

module.exports=router;