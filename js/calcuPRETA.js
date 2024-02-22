/*comando para que seja mostrado no visor os cliques 
que são feitos sobre os botões da calculadora*/
function insert(num){
    var numero=document.getElementById('resposta').innerHTML;
    document.getElementById('resposta').innerHTML= numero + num; 
}


/*Função que fornece a capacidade de apagar TUDO
o que está sendo mostrado no visor */
function apagar(){
  document.getElementById('resposta').innerHTML=""
}


/*Função que fornece a capacidade de apagar PARCIALMENTE
o que está sendo mostrado no visor*/
function apagaso1(){
var tira1=document.getElementById('resposta').innerHTML;
document.getElementById('resposta').innerHTML= tira1.substring(0, tira1.length -1)
}


/*Função que fornece a realização das operações mais simples, como adição,
subtração, multiplicação e divisão*/
function resultado(){
  var total=document.getElementById('resposta').innerHTML;
  if(total){
      document.getElementById('resposta').innerHTML= eval(total)
  }
  else{
      document.getElementById('resposta').innerHTML=0
  }
}

