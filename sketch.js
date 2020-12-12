var bullet,wall,speed,weight,thickness;


function setup(){
    createCanvas(1600,400);
 speed=random(223,321) ;
weight=random(30,52) ;
thickness=random(22,83) ;
bullet=createSprite(50,200,50,5);
wall=createSprite(1200,200,thickness,height/2);

}

function draw(){
 background(146,72,207) ;
 wall.shapeColor=color(80,80,80);
bullet.velocityX=speed;

if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
var damage=Math.round(0.5*weight*speed*speed/(thickness*thickness*thickness));
if(damage<=10){
wall.shapeColor=color(0,255,0);

}

    if(damage>10){
       wall.shapeColor=color(255,0,0);
        
        }
        textSize(20);
        fill("black");
        text("DAMAGE :"+damage,100,50);}
 drawSprites();
  
}
function hasCollided(bullet1,wall1){
bulletRightEdge=bullet1.x+bullet1.width;
wallLeftEdge=wall1.x;
if(bulletRightEdge>=wallLeftEdge){
    return true;

}
return false;
}

