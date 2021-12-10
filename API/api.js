
const deleteItem=require('./delete/deleteItem');
const itemByDate=require('./get/itemByDate');
const itembyLote=require('./get/itemByLote');
const itemByState=require('./get/itemByState');
const itemBySupplier=require('./get/itemBySupplier');
const createItem=require('./post/createItem');
const updateStateItem=require('./update/updateStateItem');



const express = require("express");


const app=express();
app.set('views engine','pug');


let router=express.Router();

router.get('/',(req,res)=>{

    return res.render('api',{title:"bienvenido a nuestra API"});

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
    let object={
        nombre:req.body.nombre,
        presentacion:req.body.presentacion,
        cantidad:req.body.cantidad,
        unidad:req.body.unidad,
        cal_extra:req.body.calidad_extra,
        cal_prim:req.body.calidad_primera,
        valor_kilo:req.body.valor_kilo,
        proveedor:req.body.proveedor,
        lote:req.body.lote,
        fecha_elaboracion:req.body.fecha_elaboracion,
        fecha_vencimiento:req.body.fecha_vencimiento,
        ubicacion:req.body.ubicacion,
        estado:req.body.estado,
        ean:req.body.ean,
        plu:req.body.plu
        }
    
    
    
        createItem(object).then((elem)=>{
            res.send(elem);
        })
    
});
router.post("/update",(req,res)=>{
    let oldState= req.body.oldState;
    let newState=req.body.newState;
    let respuesta=updateStateItem(oldState,newState);
    res.send(respuesta);
});

router.delete("/delete/:plu/:vence",(req,res)=>{
    
   let respuesta= deleteItem(parseInt(req.params.plu),req.params.vence);
   res.send(respuesta);
});

module.exports=router;