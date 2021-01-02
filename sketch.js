   var bullet,wall,thickness;
   var bullet,speed,weight;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
speed=random (223,321)
weight=random(30,52)
thickness=random(22,83);


bullet=createSprite(50,200,50,50);
bullet.velocityX=speed;

wall=createSprite(1200,200,thickness,height/2);

}
function draw() {
  background(255,255,255);  
 
 

  if (wall.x - car.x <  (car.width+wall.width)/2)
   
{
bullet.velocityX=0;
var deformation= 0.5 * weight * speed * speed/22509;
if(deformation>180)


 
 if (deformation<180 && deformation>100)
 

 
 
 if(deformation>100);


  
if (hasCollided(bullet,wall))
{
bullet.velovityX=0;
var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness)

if (damage>10)

{

  wall.shapecolor=(255,0,0);


}

if (damage<10)
{

wall.shapecolor=color(0,255,0)

}


}


 }

drawSprites();
}