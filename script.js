"use strict";

function mitternacht(a,b,c){
    var x = []
    x[0] = (-b + Math.sqrt((b*b)-4*a*c))/(2*a)
    x[1] = (-b - Math.sqrt((b*b)-4*a*c))/(2*a)
    return x
}
function calculate(){
    
var a = parseFloat(document.getElementById("a").value)
var b = parseFloat(document.getElementById("b").value)
var c = parseFloat(document.getElementById("c").value)

var p = document.createElement("p")
p.innerHTML = mitternacht(a,b,c)
var ergebnisDiv = document.getElementById("ergebis")
ergebnisDiv.appendChild(p)

}

function drawOnCanvas(){
    var canvas = document.getElementsByTagName("canvas");
    var c = canvas.getContext("2d");

}
