
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine 
let world

var bg_img
var blower 
var ball
var basket
var ball,border

function preload(){
  bg_img = loadImage("download.jpeg");
  ball = loadImage("basketball.png");
  blower = loadImage("leafblower.png");
  basket = loadImage("basket.png");
  
}

function setup() {
  createCanvas(600,600); 
  engine = Engine.create();
  world = engine.world;
    
  

  ball = createImg(300,20,20,20);
 blower = createImg(20,250,20,20);
 basket = createImg(300,580,20,20);

 

 border = new Border(600,300,20,600);
 
  


  
}


function draw() 
{
  
  background(51);
  Engine.update(engine);
  image(bg_img,0,0,600,600);
 // if(mousePressed(ball)){
   // drop();
  //}
  
  ball.velocityX = 2; 
  //if(mousePressed(blower)){
   // airBlow();
 // }
  //if(ball.isTouching(border)){
    //ballTouchedBorder();
  //}
 //if( ball.collide(border)) {
 // ball.velocityX = -2

 //}
  
  //createEdgesSprites();

  //if(ball.isTouching(rightEdge)){
    //ball.velocityX = -2;
//  }
  
  //if(collide(ball,basket)== true){
 //   text("Congratulations, you win!", 300, 300);
 // }
  
  
 
  //engine = Engine.create();
 // drawSprites();
  //if(ball.isTouching(basket)){
    //ball.destroyEach();
    //text("Congratulations, you win!", 300,300);
  // }
}

function airBlow(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.1,y:0});
  


}
function ballTouchedBorder(){
 
    Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.1,y:0.1});
  
}

function drop(){
  Matter.Body.appleForce(ball,{x:0,y:0},{x:0,y:-0.01});
}

