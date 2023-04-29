String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); } 

var palabras = ["carpintero", 
"edificio", 
"helicoptero", 
"panda", 
"kinal", 
"colina", 
"guatemala", 
"murcielago", 
"automovil",
"barco",
"casa",
"programador",
"microfono",
"detective",
"europa",];

var palabra = palabras[Math.floor(Math.random()*palabras.length)];
var guion = palabra.replace(/./g, "_ ")
document.getElementById('palabra').innerHTML = guion;
let cont = 1;

function comprobar(){
  var letra = document.querySelector('#letra').value;
  let fallo = true;

  for(var i in palabra){
    if(letra == palabra[i]){
      guion = guion.replaceAt(i*2, letra);
      fallo = false;
    }
  }
  
  if(fallo){
    cont++;
    if(cont ==7){
      document.getElementById('acierto').innerHTML = "¡Perdiste!";
      document.getElementById('btn2').innerHTML = "Jugar otra vez";
    }
  }else{
    if(guion.indexOf('_') <0){
      document.getElementById('acierto').innerHTML = "¡Aceraste!";
      document.getElementById('btn2').innerHTML = "Jugar otra vez";
    }
  }

  document.getElementById('palabra').innerHTML = guion;
};

function recargar(){
  window.location.reload();
}


