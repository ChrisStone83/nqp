'use strict'
const MIN = -10
const MAX = 10

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
    var ergText = "Das Polynom " + a +"x² +" + b + "x + " + c +" hat die Nullstellen x1 = "+ x[0] + ", x2= "+ x[1]; 

    const ergP = document.createElement("p");
    ergP.innerHTML = ergText;
    document.getElementById("ergebnis").innerHTML = "";
    document.getElementById("ergebnis").appendChild(ergP);

    visualizeResult(x,a,b,c);
}
function drawLine(ctx, direction, from, too){
    
    var half = too / 2;
    
    if (direction =="vertical"){
        
        ctx.moveTo(half, from);
        ctx.lineTo(half, too);
        ctx.stroke();
    }else{
        ctx.moveTo(from, half);
        ctx.lineTo(too, half);
        ctx.stroke();
    }
    
}

function visualizeResult(x, a, b, c){
    /* Koordinatensystem */
    var canvas = document.getElementById("CV");
    var ctx = canvas.getContext("2d");
    var vert = true;
    ctx.beginPath();
    /*for (var i = 0; i <= 1; i++){
        drawLine(ctx, vert, 0, 400);
        vert = false
    }*/
        drawLine(ctx, "vertical", 0, 400)
        drawLine(ctx, "horizontal", 0, 400)
    /*Parabel und Nullpunkte*/

}
