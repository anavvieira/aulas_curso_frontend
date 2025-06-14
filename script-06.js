function usoLoop(){
  let text = "";
  let i = 1;
  while (i <= 50) {
    text += "<br>O número é " + i;
    i++;
  }
  document.getElementById("demo").innerHTML = text;
}

function usoFor(){
  let text = "";
   
  for (let i = 9; i > -1; i--) {
    text += "<br>O número é " + i;
  }
 
  document.getElementById("demo").innerHTML = text;
}

function limpar(){
  document.getElementById("demo").innerHTML = "";

}
