const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
var world,engine,d2,d1,d3; 
function setup() { 
  createCanvas(1600, 700); 
  engine = Engine.create(); 
  world = engine.world;
   Engine.run(engine);
    d1=new dustbin(1300,665,170,20); 
    d2=new dustbin(1205,615,20,170);
    d3=new dustbin(1395,615,20,170); 
    paperObject=new paper(100,360,25);
    groundObject=new ground(800,690,1600,30);
     } 
     function draw() { 
       rectMode(CENTER); 
       background(0); 
       d1.display(); 
       d2.display();
        d3.display(); 
        paperObject.display();
         groundObject.display();
         } 
         
         function keyPressed()
         { 
      if (keyCode === UP_ARROW)
         
 { 
   Matter.Body.applyForce(paperObject.body,
  paperObject.body.position, { x:90,y:-95 })
   }
  }