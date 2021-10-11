/*let btn_buscar=document.getElementById("buscar");
btn_buscar.onclick = search;*/
/*let btn_login=document.getElementById("btn_login");
btn_login.onclick=login;*/



function redirectTo(){

  if(event.target.id=="registro"){
    console.log(window.location.assign(/*window.location.host+*/"./Registro.html"))
   // window.location.assign(window.location.ho)
  }
  else if(event.target.id=="consulta"){
    console.log(window.location.assign(/*window.location.host+*/"./Consulta.html"))
  }
}

 function login(){
const TestUsers=[{user:'luispacheco',password:'1234567890'},{user:'johnbetacur', password:'123456789'}, {user:'danielecheverry', password:'1234567890'}];
//declarar variables
 let user,password,LetAccess=false;

 //asignar variables

 user=document.getElementById('User').value;
 password=document.getElementById('Password').value;

 //verificar si variables no estan vacias

 if (user=="" || password==""){
   alert("Por favor ingrese usuario y contraseña,estos son requeridos");
 }
 
 else{
   try {
    
     TestUsers.forEach(element=>{
    
      if(element.password==password && element.user==user){
        LetAccess=true;
         writeSession(user,password);
      }
    });
     
    if(LetAccess==false){
   
      location.assign('/');
    }

    else if(LetAccess==true){
     
      location.assign(`./Home.html`);
    }

     
   } catch (error) {
    location.assign(window.location.hostname);
   }
 }
}

function search(){
  const datos=[{
    EAN:12334567890,
    producto:"Milo 2000gr",
    usuario:"usuario1",
    vencimiento:new Date(),
    cantidad:1000,
    ubicacion:{x:100,y:100},
    observaciones:"No expecifica"},
  {
    EAN:12334567890,
    producto:"Azucar manuelita 1000gr",
    usuario:"usuario1",
    vencimiento:new Date(),
    cantidad:1000,
    ubicacion:{x:100,y:100},
    observaciones:"No expecifica"},
  {
    EAN:12334567891,
    producto:"Azucar manuelita 2500gr",
    usuario:"usuario1",
    vencimiento:new Date(),
    cantidad:1000,
    ubicacion:{x:100,y:100},
    observaciones:"No expecifica"},
  {
    EAN:12334567892,
    producto:"Arroz castellanos 1000gr",
    usuario:"usuario1",
    vencimiento:new Date(),
    cantidad:1000,
    ubicacion:{x:100,y:100},
    observaciones:"No expecifica"},
  {
    EAN:12334567893,
    producto:"Arroz castellanos 2500gr",
    usuario:"usuario1",
    vencimiento:new Date(),
    cantidad:1000,
    ubicacion:{x:100,y:100},
    observaciones:"No expecifica"},
  {
    EAN:12334567894,
    producto:"Bebida en polvo sabor salpicon 75gr",
    usuario:"usuario1",
    vencimiento:new Date(),
    cantidad:1000,
    ubicacion:{x:100,y:100},
    observaciones:"No expecifica"},
  {
    EAN:12334567895,
    producto:"Bebida en polvo sabor Limonada 75gr",
    usuario:"usuario1",
    vencimiento:new Date(),
    cantidad:1000,
    ubicacion:{x:100,y:100},
    observaciones:"No expecifica"},
  {
    EAN:12334567896,
    producto:"Bebida en polvo sabor Naranja 75gr",
    usuario:"usuario1",
    vencimiento:new Date(),
    cantidad:1000,
    ubicacion:{x:100,y:100},
    observaciones:"No expecifica"},
  {
    EAN:12334567897,
    producto:"Bebida en polvo sabor Piña 75gr",
    usuario:"usuario1",
    vencimiento:new Date(),
    cantidad:1000,
    ubicacion:{x:100,y:100},
    observaciones:"No expecifica"},
  {
    EAN:12334567898,
    producto:"Bebida gaseosa sabor kola 375ml",
    usuario:"usuario1",
    vencimiento:new Date(),
    cantidad:1000,
    ubicacion:{x:100,y:100},
    observaciones:"No expecifica"},
  {
    EAN:12334567899,
    producto:"Bebida gaseosa sabor coca-cola 375ml",
    usuario:"usuario1",
    vencimiento:new Date(),
    cantidad:1000,
    ubicacion:{x:100,y:100},
    observaciones:"No expecifica"},
  {
    EAN:12334567810,
    producto:"Bebida gaseosa sabor uva 375ml",
    usuario:"usuario1",
    vencimiento:new Date(),
    cantidad:1000,
    ubicacion:{x:100,y:100},
    observaciones:"No expecifica"},
  {
    EAN:12334567811,
    producto:"Bebida gaseosa sabor Naranja 375ml",
    usuario:"usuario1",
    vencimiento:new Date(),
    cantidad:1000,
    ubicacion:{x:100,y:100},
    observaciones:"No expecifica"},
  {
    EAN:12334567812,
    producto:"Bebida gaseosa sabor Manzana 375ml",
    usuario:"usuario1",
    vencimiento:new Date(),
    cantidad:1000,
    ubicacion:{x:100,y:100},
    observaciones:"No expecifica"}
]
 if(event.button == 0){
  /*let xhr=new XMLHttpRequest();
  let dato=document.getElementById("text_search").value;
  console.log(dato+" "+1);
    xhr.open('POST','./src/login.php',true);
    xhr.onreadystatechange=function (){
      if(xhr.readyState==4 && xhr.status==200){
        console.log("esta aqui");
        console.log(xhr.responseText);
      }
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send('data='+dato);
    }*/
    let valor1=document.getElementById("text_search");
    let valor2;
    
    let resultado=Array();
    let contenedor=document.createElement('div');
    
    try {
     valor2=parseInt(valor1.value);
     if(isNaN(valor2)){
       throw new Error('No es un numero!!');
     } 
    } catch (error) {
      valor2=valor1.value;
      console.log(['se deja valor origina', error]);
    }
    let bandera=isNaN(valor2);
    //################################################################################################
    if(bandera==true){
      
    document.body.append(contenedor);
      datos.filter((dato)=>{
        if(dato.producto==valor2){
          resultado.push(dato);
        }
      
      })

      resultado.forEach((element)=>{
        let row=document.createElement('div');
        row.setAttribute('class','row alert alert-primary');
        row.setAttribute('id','datos');
        row.innerHTML="<div class='col-2'>"+element.EAN+"</div><div class='col-2'>"+element.producto+"</div><div class='col-2'>"+element.usuario+"</div><div class='col-2'>"+element.vencimiento+"</div><div class='col-2'>"+element.cantidad+"</div><div class='col-2'><i>Ubicación</i><div class='col-2'>"+element.ubicacion.x+"</div><div class='col-2'>"+element.ubicacion.y+"</div></div>"
        contenedor.append(row);
        contenedor.setAttribute('class','container');
      })
    }
    else if(bandera==false){
     // contenedor.removeChild(document.getElementById('datos'));
     if(valor2==""){

      document.body.append(contenedor);
          datos.forEach((element)=>{
            let row=document.createElement('div');
            row.setAttribute('class','row alert alert-primary');
            row.setAttribute('id','datos')
            row.innerHTML="<div class='col-2'>"+element.EAN+"</div><div class='col-2'>"+element.producto+"</div><div class='col-2'>"+element.usuario+"</div><div class='col-2'>"+element.vencimiento+"</div><div class='col-2'>"+element.cantidad+"</div><div class='col-2'><i>Ubicación</i><div class='col-2'>"+element.ubicacion.x+"</div><div class='col-2'>"+element.ubicacion.y+"</div></div>"
            contenedor.append(row);
            contenedor.setAttribute('class','container');
          });
     }
     else{
       datos.filter((element)=>{
         if(element.EAN==valor2){
           resultado.push(element);
         }
       });
       document.body.append(contenedor);
       resultado.forEach((element)=>{
        let row=document.createElement('div');
        row.setAttribute('class','row alert alert-primary');
        row.setAttribute('id','datos')
        row.innerHTML="<div class='col-2'>"+element.EAN+"</div><div class='col-2'>"+element.producto+"</div><div class='col-2'>"+element.usuario+"</div><div class='col-2'>"+element.vencimiento+"</div><div class='col-2'>"+element.cantidad+"</div><div class='col-2'><i>Ubicación</i><div class='col-2'>"+element.ubicacion.x+"</div><div class='col-2'>"+element.ubicacion.y+"</div></div>"
        contenedor.append(row);
        contenedor.setAttribute('class','container');
       });
     }
    }
    
}
 }
async function writeSession(user,password){
  
  document.cookie=`usuario=${user};path=${location.hostname}`;
  document.cookie=`password=${password};path=${location.hostname}`;

}
function readSession(){
  let AllCookies=Array();
  let cookies = document.cookie;
  let cookie= cookies.split(';');
  cookie.forEach(element => {
    let x=element.indexOf('=');
    if(element.includes('usuario') || element.includes('password')){
    valorCookie=element.substring(x+1,element.length);
    AllCookies.push(valorCookie); 
    }
    
  });
  return AllCookies;

}