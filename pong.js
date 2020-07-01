const canvas = document.getElementById("pong");
const context = canvas.getContext("2d");
//creation objet joueur
const zak = {
    x : 0,
    y : canvas.height/2 - 100/2,
    width : 10,
    height : 100,
    color : "white",
    score : 0
    
}
//creation objet ordinateur
const com  = {
    x : canvas.width - 10,
    y : canvas.height/2 - 100/2,
    width : 10,
    height : 100,
    color : "white",
    score : 0
    
}
//creation de la balle

const balle = {
    x : canvas.width/2,
    y: canvas.height/2,
    radius : 10,
    speed : 5,
    velocityX : 5,
    velocityY :5,
    color : "white"

}

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


// style du texte
function dessTexte(text,x,y,color){
    context.fillStyle = color;
    context.font = "45px fantasy";
    context.fillText(text,x,y);
}
dessTexte("Test",300,200,"white");
