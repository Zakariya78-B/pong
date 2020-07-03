const canvas = document.getElementById("pong");
const context = canvas.getContext("2d");
//creation objet joueur
const zak = {
    x : 0,
    y : canvas.height/2 - 100/2,
    width : 10,
    height : 100,
    color : "red",
    score : 0
    
}
//creation objet ordinateur
const com  = {
    x : canvas.width - 10,
    y : canvas.height/2 - 100/2,
    width : 10,
    height : 100,
    color : "red",
    score : 0
    
}
//creation de la balle

const balle = {
    x : canvas.width/2,
    y : canvas.height/2,
    radius : 10,
    speed : 5,
    velocityX :3,
    velocityY :3,
    color : "white"

}

// dessin du canvas
function dessRect(x,y,w,h,color){
    context.fillStyle = color;
    context.fillRect(x,y,w,h);
}
// creation du filet
const filet = {
    x : canvas.width/2 - 1,
    y : 0,
    width : 2,
    height : 10,
    color : "white"
}
//dessin du filet
function dessFilet(){
   
    for(let i = 0; i <= canvas.height; i+=15){
        dessRect(filet.x, filet.y + i, filet.width, filet.height, filet.color);
      
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
//controle plateforme (raquette)
canvas.addEventListener("mousemove",movePaddle);

function movePaddle(evt){
    let rect = canvas.getBoundingClientRect();
    zak.y = evt.clientY - rect.top - zak.height/2;
}
//detection de collision
function collision(b,p){
    b.top = b.y - b.radius;
    b.bottom = b.y + b.radius;
    b.left = b.x - b.radius;
    b.right = b.x + b.radius;

    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right = p.x + p.width;

    return b.right > p.left && b.bottom > p.top && b.left < p.right && b.top < p.bottom;


}
//remise en jeu apres point marquer
function resetBall(){
    balle.x = canvas.width/2;
    balle.y = canvas.height/2;

    balle.speed = 5;
    balle.velocityX = -balle.velocityX;


}
//mise à jour
function maj(){
    balle.x += balle.velocityX;
    balle.y += balle.velocityY;

    // simple IA pour l'ordinateur
    let computerLevel = 0.1;
    com.y += (balle.y -(com.y + com.height/2)) * computerLevel;

    if(balle.y + balle.radius > canvas.height || balle.y - balle.radius < 0 ){
        balle.velocityY = -balle.velocityY;
    }
    let joueur = (balle.x < canvas.width/2) ? zak : com;


    if(collision(balle,joueur)){
        //quandla balle frappe la raquette du joueur
        let pointImpact = balle.y - (joueur.y + joueur.height/2);
        // normalisation
        pointImpact = pointImpact/(joueur.height/2);
        //calcul de l'angle en radian

        let anglerad = pointImpact * Math.PI/4;
       
        //direction de la balle frapper va vers x
        let direction = (balle.x < canvas.width/2) ? 1 : -1;

        // change l'accelaration x et Y
        balle.velocityX = direction * balle.speed * Math.cos(anglerad);
        balle.velocityY = direction * balle.speed * Math.sin(anglerad);

        //la raquette de l'ordi tape la balle tout le temps et rajoute de la vitesse à la balle
        if(balle.speed<50){
            balle.speed += 0.3;
        }
      
        console.log(balle.speed);

    }
    // mise a jour du score
    if(balle.x - balle.radius < 0){
        //l'ordinateur marque
        com.score++;
        resetBall()

    }else if(balle.x + balle.radius > canvas.width){
        // le joueur gagne
        zak.score++;
        resetBall()
    }
}
//initialisation du jeu
function jeu(){
    maj();
    engagement();
  
}
jeu();
//affichage mouvement
const imageParSeconde = 50;
setInterval(jeu,1000/imageParSeconde);



