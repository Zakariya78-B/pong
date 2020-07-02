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
// creation du filet
const filet = {
    x : canvas.width - 1,
    y : 0,
    width : 2,
    height: 10,
    color: "white"
}
//dessin du filet
function dessFilet(){
    for(let i = 0;i <= canvas.height;i+=15){
        dessRect(filet.x,filet.y + 1,filet.width,filet.height,filet.color);
    }

}

//dessin du cercle

function dessCercle(x,y,r,color){
    context.fillStyle = color;
    context.beginPath();
    context.arc(x,y,r,0,Math.PI*2,false);
    context.closePath();
    context.fill();
}



// style du texte
function dessTexte(text,x,y,color){
    context.fillStyle = color;
    context.font = "45px fantasy";
    context.fillText(text,x,y);
}
// fonction engagement

function engagement(){
    dessRect(0,0,canvas.width,canvas.height,"Black");

    dessFilet();

    dessTexte(zak.score,canvas.width/4,canvas.height/5,"white");
    dessTexte(com.score,3*canvas.width/4,canvas.height/5,"white");

    dessRect(zak.x,zak.y,zak.width,zak.height,zak.color);
    dessRect(com.x,com.y,com.width,com.height,com.color);

    dessCercle(balle.x,balle.y,balle.radius,balle.color);

}
//initialisation du jeu
function jeu(){
    engagement();
}
//affichage mouvement
const imageParSeconde = 50;
setInterval(jeu,1000/imageParSeconde);


