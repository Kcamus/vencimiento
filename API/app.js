const fn1=require("./get/itemByDate");
const fn2=require("./get/itemByLote");
const fn3=require("./get/itemByState");
const fn4=require("./delete/deleteItem");


respuesta=fn4(1234567,new Date('2021-12-7'));

console.log(respuesta);
