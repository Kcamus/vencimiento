

function onLogginButton(){
    window.location.href="/home";
}
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


function onButtonNewRegister(){
    window.location.href='/registro';
};
function onButtonHome(){
    window.location.href='/home';
};
function onButtonConsultas(){
    window.location.href='/consultar';
}
function onButtonCerrarSession(){
    window.location.href= "../";
}
function deleteItem(event){
   let id= event.srcElement.id;
   let tabla=document.getElementById("tabla");
    let item=document.getElementById(id);
   let request=new Request(`api/delete/${id}`,{
       method:"delete",
   });
   fetch(request).then((respuesta)=>{
       if(respuesta.status==200){
           
           tabla.removeChild(item);

       }
   });
}
function editItem(event){

  let id=event.target.id;
  
  
  let container= document.createElement("div");
  container.setAttribute("id","actionContainer")
  container.setAttribute("id","ventana");
  let texto=document.createElement("input");
  texto.setAttribute("id","estado")
  texto.type="text";
  texto.setAttribute("placeholder",'vendido,en bodega,en punto de venta, vencido o proximo a vencer');
  let row1=document.createElement('div');
  let row2=document.createElement("div");
  row1.setAttribute("class","row");
  row2.setAttribute("class","row");
  let boton1,boton2;
  boton1=document.createElement("button");
  boton1.setAttribute("class",".btn btn-primary")
  boton2=document.createElement("button");
  boton2.setAttribute("class",".btn btn-primary");
  boton1.innerText="Editar";
  boton2.innerText="Cancelar";
  boton1.onclick=()=>{
     
 
    let request=new Request("/api/update",{mode:"cors",method:"POST",body:JSON.stringify({data:{
        "_id":id,
        "estado":texto.value
    }}),headers:{Accept:"application/json",'Content-Type': 'application/json'}});
    fetch(request).then(respuesta=>{
        console.log(respuesta);
        if(respuesta.status==200){
            console.log("Actualizado correctamente");
            document.body.removeChild(container);

        }
        else{
            console.log(respuesta.status);
            console.log("algo fallo");
        }
    }).catch((error)=>{
        console.error(error);
    })
  };
  boton2.onclick=()=>{
      
    document.body.removeChild(container);
  };
  row2.appendChild(boton1);
  row2.appendChild(boton2);
  row1.appendChild(texto);
  container.appendChild(row1);
  container.appendChild(row2);
  document.body.append(container);

}
function cerrarVentana(){
    obj=document.getElementById("ventana");
    document.body.remove(obj);
}




async function onUpdate(id,estado){
    
}


    window.onload=routeHome()




function consultar(){
    let plu=document.getElementById("text_search").value;

    request=new Request(`/api/get/plu/${plu}`);
    fetch(request).then((data)=>{data.json().then((datos)=>{
            
        let tabla=document.getElementById("consulta");
        datos.forEach(element => {
           let row=document.createElement("tr");
           row.setAttribute("id",element._id);
           row.innerHTML=`<td>${element.nombre}</td><td>${element.cantidad}</td><td>${element.ubicacion.x}-${element.ubicacion.y}-${element.ubicacion.z}</td><td>${element.presentacion}</td><td>${element.valor_kilo}</td><td>${element.proveedor}</td><td>${element.lote}</td><td>${element.fecha_elaboracion}</td><td>${element.fecha_vencimiento}</td><td>${element.estado}</td><td><button type='button' onclick='editItem(event)' id=${element._id} class='btn.btn-primary conBu'>Editar estado</button></td><td><button id=${element._id} type='button' onclick='deleteItemConsulta(event)' class='btn.btn-primary'>Eliminar</button></td>`;
           tabla.append(row);  
       }
        );
   
})
  
        
});

}
function deleteItemConsulta(event){
    let id= event.srcElement.id;
    let tabla=document.getElementById("consulta");
     let item=document.getElementById(id);
    let request=new Request(`api/delete/${id}`,{
        method:"delete",
    });
    fetch(request).then((respuesta)=>{
        if(respuesta.status==200){
            
            tabla.removeChild(item);
 
        }
    });
 }

function routeHome(){
    let request= new Request("/api/get/all");
    fetch(request).then((data)=>{data.json().then((datos)=>{
            
             let tabla=document.getElementById("tabla");
             datos.forEach(element => {
                let row=document.createElement("tr");
                row.setAttribute("id",element._id);
                row.innerHTML=`<td>${element.nombre}</td><td>${element.cantidad}</td><td>${element.ubicacion.x}-${element.ubicacion.y}-${element.ubicacion.z}</td><td>${element.presentacion}</td><td>${element.valor_kilo}</td><td>${element.proveedor}</td><td>${element.lote}</td><td>${element.fecha_elaboracion}</td><td>${element.fecha_vencimiento}</td><td>${element.estado}</td><td><button type='button' onclick='editItem(event)' id=${element._id} class='btn.btn-primary conBu'>Editar</button></td><td><button id=${element._id} type='button' class='btn.btn-primary' onclick='deleteItem()'>Eliminar</button></td>`;
                
                tabla.append(row); 
              
                
            }
             );
        
    })
       
             
    });
}


function editar(){

}
