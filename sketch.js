var paper, dustbin, ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);



	engine = Engine.create();
	world = engine.world;

	
	paper = new Paper(200,450,40);
	ground = new Ground(width/2,670,width,20);
	dustbin = new Dustbin(1200,650);

	//Create the Bodies Here.
	//paper = new Paper(200, 200, 40);
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();
  dustbin.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:55,y:-55});
	}
}

