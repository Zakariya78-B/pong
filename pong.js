const canvas = document.getElementById("pong");
const context = canvas.getContext("2d");


// dessin du canvas
function dessRect(x,y,w,h,color){
    context.fillStyle = color;
    context.fillRect(x,y,w,h);
}
dessRect(0,0,canvas.width,canvas.height,"black" );

//dessin du cercle

function dessCercle(x,y,r,color){
    context.fillStyle = color;
    context.beginPath();
    context.arc(x,y,r,0,Math.PI*2,false);
    context.closePath();
    context.fill();
}
dessCercle(100,100,20,"white");



