"use strict";
function draw(x1,x2){

}
function mitternacht(a,b,c){
    var x = []
    x[0] = (-b + Math.sqrt((b*b)-4*a*c))/(2*a)
    x[1] = (-b - Math.sqrt((b*b)-4*a*c))/(2*a)
    return x
}

document.getElementById("test").innerHTML= mitternacht(1,1,1)