var dog,happydDog,database,foodStock,foodS;

function preload(){
  dogimg = loadImage("images/dogImg.png");
  dogimg2 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);

  database = firebase.database();
  food = database.ref('Food');

  dog = createSprite(250,280,10,10);
  dog.addImage(dogimg);
  dog.scale = 0.4;
 
}


function draw() {  
background("yellow");
if(keyWentDown(UP_ARROW)){
  dog.addImage(dogimg2);
}
  drawSprites();
  fill("Black");
  textSize(24);
  stroke(7);
  text("Press the up arrow key to feed the dog",70,90);
  
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
database.ref('/').update({
  food:x
})
}
