var meuArray = ['Ana','Arthur','Daniel'];

function adcionar(){
  var valor = document.getElementById('entrada').value;
  meuArray.push(valor);
  document.getElementById('entrada').value= "";
}

function imprimirLista(){
  let text = "";
  
  tamanho_array = meuArray.length;

  for (let i = 0; i < tamanho_array; i++) {
    text += "<br> " + meuArray[i];
  }
 
  document.getElementById("demo").innerHTML = text;
}

function limpar(){
  document.getElementById("demo").innerHTML = "";
  meuArray = [];
}

function ListaInvertida(){
  let text = "";
  
  tamanho_array = meuArray.length;

  for (let i = tamanho_array - 1; i > -1; i--) {
  text += "<br> " + meuArray[i];
}

document.getElementById("demo").innerHTML = text;
}
