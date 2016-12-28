var titulo = ["Volantera", "Volantera", "tu","volantera","tu"];
var texto = [
            "La empresa está abriendo oficinas de modelaje en la ciudad de Perú con todos los gastos pagados, con sueldos de 10000bs al mes, le brindaremos asesoría y entrenamiento.", 
            "La empresa está abriendo oficinas de modelaje en la ciudad de Perú con todos los gastos pagados, con sueldos de 10000bs al mes, le brindaremos asesoría y entrenamiento.", 
            "donde queda su oficina?", 
            "se encuentra en la ciudad de El Alto en la Ceja",
            "(ir a oficina) - (ignorar invitacion)  "
            
            ];
var img = ["Untitled.png", "untitled2.png", "Untitled1.png","untitled2.png", "Untitled1.png"];
var sw =0;
function prueba(){
  sw++;
  var t = document.getElementById("h1Titulo");
  var p = document.getElementById("pParrafo");
  var i = document.getElementById("iImagen");
  var b = document.getElementById("btn");
  b.disabled = true;
  
  p.innerHTML="";
  t.innerHTML=titulo[sw];
  i.src = "img/"+img[sw];
  longitud = texto[sw].length;
  
  var time = 0;
  timer = setInterval(function(){
    p.innerHTML = p.innerHTML.substr(0, p.innerHTML.length-1)+ texto[sw].charAt(time)+ "_";
    if(time >= longitud){
      clearInterval(timer);
      p.innerHTML = p.innerHTML.substr(0,longitud);
      b.disabled = false;
    }else{
      time++;
    }
  }, 10);
}