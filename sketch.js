var valtriake,valtriakeImg;
var akenies,akeniesImg;
var aiger,aigerImg,aigerLaunching,aigerOverPowered;
var vault,vaultImg,valtLaunching,valt;
var stadium,stadiumImg;
var launcher1;
var launcher2;
var refree,refreeImg;
var Play;
var Start;
var rand;

function preload(){
stadiumImg = loadImage("images/Stadium.jfif");
aigerImg = loadImage("images/aiger.jfif");
refreeImg = loadImage("images/Refree.jfif");
vaultImg = loadImage("Vault.png");
aigerLaunching = loadImage("images/Aiger launching.jfif");
valtLaunching = loadImage("images/Valt Launching.png")
valtriakeImg = loadImage("images/Valtriake.jfif")
akeniesImg = loadImage("images/Akenies.jfif")
babImg = loadImage("bab.png")
}

function setup(){
createCanvas(displayWidth-2,displayHeight-102);

var stadium = createSprite(displayWidth/2,displayHeight/2.7,1300,750);
stadium.addImage(stadiumImg);
stadium.scale = 4;

var aiger = createSprite(windowWidth-60,250,30,80);
aiger.addImage(aigerImg);
aiger.scale = 0.8;

var refree = createSprite(windowWidth/2,windowHeight-50,20,40);
refree.addImage(refreeImg);
refree.scale = 0.6

var vault = createSprite(windowWidth/25,250,20,40)
vault.addImage(vaultImg);
vault.scale =1;
//vault.velocityX=3;
}

function draw(){
background("lightblue");

console.log(frameCount);

textSize(27);
fill(224, 35, 35);
text("YOUR",windowWidth-100,30);

textSize(27);
fill(224, 35, 35);
text("Computer",windowWidth-1532,30);

textSize(27);
fill(224, 35, 35);
text("Score-",windowWidth-100,60);

textSize(27);
fill(224, 35, 35);
text("Score-",windowWidth-1532,60);
var sp = Math.random(1,19)

if (frameCount>300 && frameCount<305){
var valtriake = createSprite(windowWidth/8,250,25,25)
valtriake.addImage(babImg);
valtriake.scale = 0.4;
if(sp < 5){
valtriake.velocityX = 4 ;
}
else if(sp>5){
  valtriake.velocityX = 8 ; 
}
var Akenies = createSprite(windowWidth-160,250,25,25)
Akenies.addImage(akeniesImg);
Akenies.scale = 0.4;
Akenies.velocityX = -6;


}

/*if (frameCount>300 && frameCount<350){
  var akelies = createSprite(windowWidth/1.1,250)
  akelies.addImage(akeniesImg);
  akelies.scale = 0.3;
  }

if (frameCount>100 && frameCount<350){
vault.visible = false;
}*/

drawSprites();

if (frameCount>50 && frameCount<100){
    text("Ready",displayWidth/2,100,60);
    }        

    if (frameCount>100 && frameCount<150){
    text("Set",displayWidth/2,100,60);  
    }

    if (frameCount>150 && frameCount<200){
        text("3",displayWidth/2,100,60);  
        }

     if (frameCount>200 && frameCount<250){
     text("2",displayWidth/2,100,60);  
        }

       if (frameCount>250 && frameCount<300){
     text("1",displayWidth/2,100,60);  
     }
 
      if (frameCount>300 && frameCount<350){
     text("Shoot",displayWidth/2,100,60);  
     }
   
    }
