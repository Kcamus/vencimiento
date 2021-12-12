function onButtonNewRegister(){
    window.location.href='/registro';
};
function onButtonConsultas(){
    window.location.href='/consultar';
}
function onButtonCerrarSession(){
    window.location.href= "../";
}
window.onload=()=>{
    let request= new Request("/api/get/all");
    fetch(request).then((data)=>{data.json().then((datos)=>{
            console.log(datos);
             let tabla=document.getElementById("tabla");
             datos.forEach(element => {
                let row=document.createElement("tr");
                row.setAttribute("id",element._id);
                row.innerHTML=`<td>${element.nombre}</td><td>${element.ean}</td><td>${element.plu}</td><td>${element.cantidad}</td><td>${element.ubicacion.x}-${element.ubicacion.y}-${element.ubicacion.z}</td><td>${element.presentacion}</td><td>${element.calidad_extra}</td><td>${element.calidad_primera}</td><td>${element.valor_kilo}</td><td>${element.proveedor}</td><td>${element.lote}</td><td>${element.fecha_elaboracion}</td><td>${element.fecha_vencimiento}</td><td>${element.estado}</td><td><button type='button' class='btn.btn-primary'>Editar</button></td><td><button type='button' class='btn.btn-primary'>Eliminar</button></td>`;
                tabla.append(row);  
            }
             );
        
    })
       
             
    });
}

