var cannonimage,objectimage1,objectimage2,objectimage3
var cannon , ground , groundimage ,backgroundimg,score = 0
var playerinfo
var object , objectsGroup
var cannonball,cannonballimg
var objectimg
let PLAY =1
let END = 0
var gameState = PLAY
var form
var rotation = 0
var cannonGroup;
var score = 0;



function preload(){
	groundimage = loadImage("assets/ground.png");
	cannonimage = loadImage("assets/cannon2.png");
	cannonballimg = loadImage("assets/cannonball.png");
	objectimg = loadImage("assets/enemyball.png");
}

function setup() {
	createCanvas(1200, 600);
	ground = createSprite(20,390,10,400);
	cannon  = createSprite(1100,mouseY,100,20);

	objectsGroup = new Group();
	cannonGroup = new Group();


	cannon.scale = 0.2;

	ground.addImage(groundimage);
	cannon.addImage(cannonimage);


}

function shoot(){
	
	cannonball = createSprite(1000,mouseY,10,10)
	cannonball.velocityX = -10
	cannonball.addImage(cannonballimg)
	cannonball.scale = 0.17
	cannonball.lifetime = 120;
	cannon.debug = true ;
	cannonGroup.add(cannonball);
   
}



function draw() {

    cannon.y = mouseY;
	
	   spawnObjects();

	   if (keyDown(LEFT_ARROW)){
	   shoot();
	   }

	 /* for(var j = 0 ; j < objectsGroup.length; j++){
	  for(var i = 0 ; i < cannonGroup.length ; i++){

	 if(objectsGroup.get(j).isTouching(cannonGroup.get(i))) {
		objectsGroup.get(j).destroy();
		cannonGroup.get(i).destroy();
	  }
	  }
	  */

	  for(var i = 0 ; i < objectsGroup.length ; i++){
	    for(var j = 0 ; j < cannonGroup.length ; j++){
            if(objectsGroup.get(i).isTouching(cannonGroup.get(j))){
				  objectsGroup.get(i).destroy();
				  cannonGroup.get(j).destroy();
				  score = score+1 ;
			}
		}
	  }


	 

	   drawSprites();

	   fill(0);
	   textSize(24)
	   text("player score : " + score,600,150)

	
}

      


function spawnObjects(){
if(frameCount  % 20 === 0){
 object = createSprite(random(100,500),0,20,20)
 object.velocityY = 3
 object.lifetime = 200
 object.addImage(objectimg)
 object.debug = true ;

 object.scale = random(0.1,0.2);
 objectsGroup.add(object)

}
}

