function redirectTo(){
  
  if(event.target.id=="registro"){
    console.log(window.location.assign(window.location.host+"/registro"))
   // window.location.assign(window.location.ho)
  }
  else if(event.target.id=="consulta"){
    console.log(window.location.assign(window.location.host+"/consulta"))
  }
}