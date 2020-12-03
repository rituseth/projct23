var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody;
var rect1;
var rect2;
var rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;
var ground;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

    ground=createSprite(400,700,1000,20,{isStatic:true});
   
	rect1=Bodies.rectangle(390,650,200,20);
	rect1.shapeColor=color(255,0,0);
	World.add(world,rect1);

	rect2=Bodies.rectangle(290,610,20,100);
	rect2.shapeColor=color(255,0,0);
	World.add(world,rect2);
	
	rect3=Bodies.rectangle(500,610,20,100);
	rect3.shapeColor=color(255,0,0);
	World.add(world,rect3);


	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	
}


function draw() {
	background("white");
  rectMode(CENTER);
  background(0);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  keyPressed();



  drawSprites();

 
}

function keyPressed() {
	 
	 if (keyCode === LEFT_ARROW) {
	 helicopterSprite.x=helicopterSprite.x-20; 
	 translation={x:-20,y:0}
	  Matter.Body.translate(packageBody, translation) }
		  else if (keyCode === RIGHT_ARROW) {
		helicopterSprite.x=helicopterSprite.x+20;
				 translation={x:20,y:0}
		  Matter.Body.translate(packageBody, translation) } 
		else (keyCode === DOWN_ARROW)
		  { Matter.Body.setStatic(packageBody,false); }
				}
	// Look at the hints in the document and understand how to make the package body 
	//fall only on press of the Down arrow key.

    
  
