
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,paper1,dustbin1,dustbin2,dustbin3;

function setup() {
  createCanvas(800,300);
  engine = Engine.create();
  world = engine.world;

  paper1 = new paper(100,50,40);
  ground1 = new ground(400,260,800,20);
dustbin1 = new dustbin(650,180,200,150);
//	dustbin2 = new dustbin(750,190,20,100);
  //dustbin3 = new dustbin(550,190,20,100);
 

  
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(255,255,255);
  
  rectMode(CENTER);

  
  paper1.display();
  ground1.display();
  dustbin1.display();
  
  //dustbin2.display();
//  dustbin3.display();

 
 
  
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:60,y:-65});
  }
}


