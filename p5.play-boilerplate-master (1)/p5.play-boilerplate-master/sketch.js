const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var plinko = [];
var particle = [];
var divisions = [];

var divisionHeight = 300;

var ground;

function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width / 2, height, width, 10);

  for (var a = 0; a <= width; a = a + 80) {
    divisions.push(new Divisions(a, height - divisionHeight / 2, 10, divisionHeight));
  }
  for (var b = -10; b <= width; b = b + 50) {
    plinko.push(new Plinko(b, 75));
  }
  for (var c = 10; c <= width; c = c + 50) {
    plinko.push(new Plinko(c, 175));
  }
  for (var d = -10; d <= width; d = d + 50) {
    plinko.push(new Plinko(d, 275));
  }
  for (var e = 10; e <= width; e = e + 50) {
    plinko.push(new Plinko(e, 375));
  }
}

function draw() {
  Engine.update(engine);
  background(0);

  ground.display();

  if (frameCount % 60 === 0) {
    particle.push(new Particle(random(width / 2 - 200, width / 2 + 200), 10, 10));
  }

  for (var f = 0; f < particle.length; f++) {

    particle[f].display();
  }

  for (var a= 0; a < divisions.length; a++) {
    divisions[a].display();
  }

  for (var i = 0; i < plinko.length; i++) {
     
    plinko[i].display();
    
  }

  drawSprites();
}