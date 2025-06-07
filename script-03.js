function maiorValor(){
  var a = parseInt(document.getElementById('valor01').value);
  var b = parseInt(document.getElementById('valor02').value);
  var c = parseInt(document.getElementById('valor03').value);
 
  var maior =matchMedia(a, b, c)

  if(a>b && a>b){
    document.getElementById('demo').innerHTML = a;
  }else if(b>a && b>c){
    document.getElementById('demo').innerHTML = b;
  }else{
    document.getElementById('demo').innerHTML = c;
  }

}