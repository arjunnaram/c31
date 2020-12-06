/*// string
var string1 = "this is a string";
//console.log(string1);

// number
var num = 100;
//console.log(num);

// boolean    true or false
var boolname = true;
//console.log(boolname);

// undefined
var object
////console.log(object);

// null

object = null;
//console.log(object);

// example of array

//arraxy of same data type

var arr1 = [1,2,3,4,5];
//console.log(arr1);

// an array holding different data type
var arr2 = ["name",12,true]
//console.log(arr2);

//an array can store a list of arrays

var arr3 = [[1,2], [2,3],[3,4]];
//console.log(arr3);
arr3.push("arjun")
arr3.pop()/*?*

console.log(arr3);

// first array ()
console.log(arr3[0])

//first element of 1st array
console.log(arr3[0],[1]);

*/


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});

    // render code starts here
    var render = Render.create({
        element:document.body,
        engine: engine,
        options: {
          width: 1200,
          height: 400,
          wireframes:false,
          showAngleIndicator: true,
        },
        });

      Render.run(render);
      //render code ends here
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){

    if (gameState!=="launched") {
         Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
   
}


function mouseReleased(){
    slingshot.fly();
    gameState="launched"
}

function keyPressed(){
    if(keyCode === 32){
        //slingshot.attach(bird.body);
    }
}