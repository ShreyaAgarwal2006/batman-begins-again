const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drops = [];
var maxDrops = 100;
var umbrella;
var rand;
var back;
var thunder,thunder1,thunder2,thunder3,thunder4;
var thunderCreatedFrame = 0;

function preload(){


    back = loadImage("background1.png")


    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
    
}

function setup(){
    var canvas = createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;

    


    for(var i=0 ; i<maxDrops; i++){
        drops.push(new Drop(random(0,1000),random(0,800)));
    }

    umbrella = new Umbrella(500,300);


   
    
}

function draw(){
    background(back);
    Engine.update(engine);

    
    rand = Math.round(random(1,4));
    if(frameCount % 80 === 0){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(100,800),random(20,50),10,10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            default: break;
        }

        thunder.scale = 0.7;
    }

    if(thunderCreatedFrame + 10 === frameCount && thunder){
        thunder.destroy();
   }

    umbrella.display();
    //umbrella.scale = 0.3;
    for(var i=0 ; i<maxDrops; i++){

    drops[i].update();
    drops[i].display();
    }

    drawSprites();
    
    
}   

