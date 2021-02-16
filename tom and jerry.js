var cat, catRunning,catStanding,catSleeping
var mouse, mouseTeasing,mouseEating,mouseDetective
var REALbackground

function preload() {
   REALbackground=loadImage("images/garden.png") 
   catRunning=loadAnimation("images/cat2.png","images/cat3.png")
   catSleeping=loadAnimation("images/cat1.png")
   catStanding=loadAnimation("images/cat4.png")
   mouseTeasing=loadAnimation("images/mouse2.png","images/mouse3.png")
   mouseDetective=loadAnimation("images/mouse4.png")
   mouseEating=loadAnimation("images/mouse1.png")
  }



function setup(){
    createCanvas(1000,800);
    cat=createSprite(880,700)
    cat.addAnimation("catSleeping",catSleeping)
    cat.scale=0.2
    mouse=createSprite(100,700)
    mouse.addAnimation("mouseEating",mouseEating)
    mouse.scale=0.2
}

function draw() {

  keyPressed();
    background(REALbackground);
    if (cat.isTouching(mouse)){
    cat.addAnimation("catStanding",catStanding)
    cat.changeAnimation("catStanding")
    mouse.addAnimation("mouseDetective",mouseDetective)
    mouse.changeAnimation("mouseDetective")
    cat.velocityX=0
}
 drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
cat.velocityX=-4
cat.addAnimation("catRunning",catRunning)
cat.changeAnimation("catRunning")
mouse.addAnimation("mouseTeasing",mouseTeasing)
mouse.changeAnimation("mouseTeasing")

}




}
