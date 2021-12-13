

function newRegister(){
    let X,Y,Z;
    let _ubicacion=document.getElementById('ubicacion').value;
    _ubicacion=_ubicacion.split('-',3);
    let datos={
        nombre:document.getElementById("nombre").value,
        ean:document.getElementById('ean').value,
        plu:document.getElementById("plu").value,
        cantidad:document.getElementById('cantidad').value,
        ubicacion:{x:_ubicacion[0],y:_ubicacion[1],z:_ubicacion[2]},
        presentacion:document.getElementById('presentacion').value,
        calidad_extra:document.getElementById('cal_extra').value,
        calidad_primera:document.getElementById('cal_primera').value,
        valor_kilo:document.getElementById('val_kilo').value,
        proveedor:document.getElementById('proveedor').value,
        lote:document.getElementById('lote').value,
        fecha_elaboracion:document.getElementById('fecha_elaboracion').value,
        fecha_vencimiento:document.getElementById('fecha_vencimiento').value,
        estado:document.getElementById('estado').value
    };
    let request= new Request("/api/post/create",{
        method:"POST",
        headers:new Headers({
            "Content-Type":"application/json",
            "Accept":"application/json",
        }),
        body:JSON.stringify(datos)
    });
    fetch(request).then((respuesta)=>{
        if(respuesta.status==200){
            alert("Item creado");
        }
    }).catch((error)=>{
        console.log(error);
    })
};
function cancelRegister(){
    window.location.href="/home"
};
function onButtonConsultas(){
    window.location.href='/consultar';
}
function onButtonCerrarSession(){
    window.location.href= "../";
}
function onButtonHome(){
    window.location.href="/home"
};