'use strict'

function mitternacht(a,b,c){
    var x = []
    x[0] = (-b + Math.sqrt((b*b)-4*a*c))/(2*a);
    x[1] = (-b - Math.sqrt((b*b)-4*a*c))/(2*a);
    return x;
}
function calculate(){
   
var a = parseFloat(document.getElementById("a").value);
var b = parseFloat(document.getElementById("b").value);
var c = parseFloat(document.getElementById("c").value);
var x = mitternacht(a,b,c);
var ergText = "Das Polynom " + a +"x^2 +" + b + "x +" + c +" hat die Nullstellen x1 = "+ x[0] + ", x2= "+ x[1]; 

const ergP = document.createElement("p");
ergP.innerHTML = ergText;
document.getElementById("ergebnis").innerHTML = "";
document.getElementById("ergebnis").appendChild(ergP);

return false
}

function drawOnCanvas(){
    var canvas = document.getElementsByTagName("canvas");
    var c = canvas.getContext("2d");

}
