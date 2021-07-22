const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world
var backgroundImage
var snowfall=[]

function preload() {
  backgroundImage= loadImage("snow2.jpg");

}

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  
}

function draw() {
  background(backgroundImage);  
  if(frameCount%5){
    snowfall.push(new Snow())
    
     
  }
  for(var i=0;i<snowfall.length;i++)
  {
    snowfall[i].display()
  }
  Engine.update(engine)

}