const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var particle;
var DIVISIONHEIGHT = 300;
var score =0;
var turn = 0;
var gameState ="start";



function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width / 2, height, width, 20);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Division(k, height-DIVISIONHEIGHT/2, 10, DIVISIONHEIGHT))
  }

  for (var j = 40; j <= width; j+= 50) {
    plinkos.push(new Plinko(j, 85, 18))
  }
  for (var j = 15; j <= width - 10; j+= 50) {
    plinkos.push(new Plinko(j, 185, 18))
  }
  for (var j = 40; j <= width; j+= 50) {
    plinkos.push(new Plinko(j, 285, 18))
  }
  for (var j = 15; j <= width - 10; j+= 50) {
    plinkos.push(new Plinko(j, 385, 18))
  }


  
  
}

function draw() {
  background(0);
  textSize(35)
  text("Score : "+score,20,40);
  fill("white");
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);

  Engine.update(engine);
 ground.display();
  
 if(gameState ==="end"){
  textSize(100);
  text("GameOver", 150, 250);
 }
  
  divisions[0].display();
  divisions[1].display();
  divisions[2].display();
  divisions[3].display();
  divisions[4].display();
  divisions[5].display();
  divisions[6].display();
  divisions[7].display();
  divisions[8].display();
  divisions[9].display();
  divisions[10].display();



  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }

  if(particle!=null){
    particle.display();
    if(particle.body.position.x>15 && particle.body.position.x<315 && particle.body.position.y>760){
        score = score + 500;
        particle = null;
        console.log(score);
        if(turn>=5){
          gameState = "end"
      }
    }
  }

  if(particle!=null){
    particle.display();
    if(particle.body.position.x>337 && particle.body.position.x<555 && particle.body.position.y>760){
        score = score + 200;
        particle = null;
        if(turn>=5) gameState = "end"
    }
  }

  if(particle!=null){
    particle.display();
    if(particle.body.position.x>580 && particle.body.position.x<796 && particle.body.position.y>760){
        score = score + 100;
        particle = null;
        if(turn>=5) gameState = "end";
      }
  }

for (var k = 0; k < divisions.length; k++) {
 
 divisions[k].display();
}
}

function mousePressed()
{
if(gameState!="end"){
turn++;
particle = new Particle(mouseX,26,10);
}

} 