const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particle = [];
var plinko =  [];
var division = [];
var divisionHeight = 300;
var ground;

function setup() {
  createCanvas(480,700);

  engine = Engine.create();
  world = engine.world;
  
  for(var i = 0; i <=width; i = i +80){
    division.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var i = 40; i <=width; i = i +50){
    plinko.push(new Plinko(i, 75));
  }
  
  for(var i = 5; i <=width; i = i +50){
    plinko.push(new Plinko(i, 175));
  }

  for(var i = 40; i <=width; i = i +50){
    plinko.push(new Plinko(i, 275));
  }

  for(var i = 5; i <=width; i = i +50){
    plinko.push(new Plinko(i, 375));
  }
  ground = new Ground(240,700,480,10);
}

function draw() {
  background("black");  
  Engine.update(engine,25);
  
  if(frameCount % 90 === 0){
    particle.push(new Particle(random(width/2-15, width/2+15), 10,10));
  }

  for(var i = 0; i < particle.length; i++){
    particle[i].display();
  }

  for(var i = 0; i < division.length; i++){
    division[i].display();
}

  for(var i = 0; i < plinko.length; i++){
    plinko[i].display();
}

for(var i = 0; i < plinko.length; i++){
  plinko[i].display();
}

for(var i = 0; i < plinko.length; i++){
  plinko[i].display();
}

for(var i = 0; i < plinko.length; i++){
  plinko[i].display();
}

ground.display();

  drawSprites();
}