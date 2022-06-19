
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=new ball(100,600,10);
	ground=new Ground(400,680,800,20)

	leftSide= new trashcan(550,620,20,100);
	bottom= new trashcan(610,660,100,20);
	rightSide= new trashcan(670,620,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  Engine.update(engine);
  ground.display();
  leftSide.display();
  bottom.display();
  rightSide.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.bodyposition,) {x: 15, y: -15})
	}
}

