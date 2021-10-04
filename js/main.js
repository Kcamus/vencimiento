


let btn_login= document.getElementById("btn_login");
btn_login.onclick=login



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
 let user,password,solicitud;
 user=document.getElementById('User').value;
 password=document.getElementById('Password').value;
 if (user==null || password== null){
   alert("Por favor ingrese usuario y contraseña,estos son requeridos");
 }
 
 else{
   try {

     solicitud= new XMLHttpRequest();
     solicitud.onload= ()=>{
       
     }
     
   } catch (error) {
     
   }
 }

}