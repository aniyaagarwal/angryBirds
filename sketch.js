const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, platform;
var box1, box2, box3, box4, box5;
var log1, log2, log3, log4, log5, log6;
var pig1, pig2;
var bird1;
var sling;
var gameState = "onSling";
var day = "assets/bg.png";
var score;
var dayimage;

function preload() {

    dayornight();
}

function setup() {
    createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, height, 1200, 20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700, 320, 70, 70);
    box2 = new Box(920, 320, 70, 70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810, 260, 300, PI / 2);

    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);
    pig2 = new Pig(810, 220);
    log2 = new Log(810, 180, 300, PI / 2);

    box5 = new Box(810, 160, 70, 70);
    log3 = new Log(750, 120, 150, PI / 7);
    log4 = new Log(890, 120, 150, -PI / 7);

    bird1 = new Bird(200, 50);

    //log6 = new Log(230,180,80, PI/2);
    sling = new Slingshot(bird1.body, {
        x: 200,
        y: 50
    });
    score = 0;
}

function draw() {
    if (dayimage)
        background(dayimage);
        textSize(35);
        fill(0);
        text("Score: " + score, 1000, 50);

    Engine.update(engine);
    ground.display();
    platform.display();

    box1.display();
    pig1.display();
    pig1.score();
    box2.display();
    log1.display();

    box3.display();
    pig2.display();
    pig2.score();
    box4.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird1.display();
    sling.display();

}

function mouseDragged() {
    Matter.Body.setPosition(bird1.body, {
        x: mouseX,
        y: mouseY
    })
}

function mouseReleased() {
    sling.detatch();
    gameState = "launch";
}

//ASCII Code 
function keyPressed() {
    if (keyCode == 32 && bird1.body.speed < 1) {
        gameState = "onSling";
        bird1.trajectory = [];
        Matter.Body.setPosition(bird1.body, {
            x: 200,
            y: 50
        });
        sling.attatch(bird1.body);
    }
}

async function dayornight() {
    var response = await fetch("https://worldtimeapi.org/api/timezone/Europe/London");
    var responsejson = await response.json();
    //console.log(responsejson);
    var time = responsejson.datetime;
    var hour = time.slice(11, 13);
    if (hour >= 7 && hour < 20) {
        day = "assets/bg.png";
    } else {
        day = "assets/bg2.png";
    }
    dayimage = loadImage(day);
    console.log(dayimage);
}