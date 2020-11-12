
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var bin1,bin2,bin3;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(800,680,1600,20);
	bin1 = new Dustbin(1300,665,170,20);
	bin2 = new Dustbin(1205,615,20,120);
	bin3 = new Dustbin(1395,615,20,120);
	paper = new Paper(400,360,25);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  paper.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x : 60,y : -60})
	}
}



