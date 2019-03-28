
Game.Player = function (game, x, y) {
 
	Phaser.Sprite.call(this, game, x, y, 'bot');
	 
	this.name = 'player';
  this.isOnGreenZone = false;

	/////////////////////////////////Animations/////////////////////////////////

	this.animations.add('rightSide',[0,1,2,3,4,5],25,false);
	this.animations.add('leftSide',[0,1,2,3,4,5],25,false);
	this.animations.add('up',[6,7,8,9],25,false);
	this.animations.add('down',[12,13,14,15],25,false);
	this.animations.add('stand',[12],25,false);
	 
	this.game.physics.enable(this, Phaser.Physics.ARCADE);

	this.anchor.setTo(.5,.5);

  spaceBar = this.game.input.keyboard.addKey(32);
	
  stop = 1;
  running = 0;

  T = this.game.time.time;
};
 
Game.Player.prototype = Object.create(Phaser.Sprite.prototype);
	 
Game.Player.prototype.update = function(){
	
    if(spaceBar.justPressed() && this.isOnGreenZone == true) {
      stop = !stop;
    }

    if(!stop && !running){
      running = 1;
      this.markovBot();
    }

};

Game.Player.prototype.move = function(direction){
   	
	 /////////////////////////////////Players' movements/////////////////////////////////

   	if(direction == 'up'){
   		this.body.velocity.y = -100;
		  this.body.velocity.x = 0;
	    this.animations.play("up");
   	}
   	if(direction == 'down'){
   		this.body.velocity.y = 100;
		  this.body.velocity.x = 0;
	    this.animations.play("down");
   	}
   	if(direction == 'right'){
   		this.body.velocity.y = 0;
		  this.body.velocity.x = 100;
		  // Flip the x axis
      this.scale.x = 1;
	    this.animations.play("rightSide");
   	}
   	if(direction == 'left'){
   		this.body.velocity.y = 0;
		  this.body.velocity.x = -100;
      this.scale.x = -1;
	    this.animations.play("leftSide");
   	}
   	if(direction == 'stand'){
   		this.body.velocity.x = 0;
   		this.body.velocity.y = 0;
   		this.animations.play("stand");
   	}
}


Game.Player.prototype.markovBot = function(){

  if(stop){ 
    this.move("stand");
    running = 0;
    return; 
  }
  
  brain = [parseInt(upCounter.text), parseInt(downCounter.text), parseInt(leftCounter.text), parseInt(rightCounter.text)]

  up = 25 + brain[0]*5 - (1/3)*(brain[1]*5) - (1/3)*(brain[2]*5) - (1/3)*(brain[3]*5);
  down = 25 + brain[1]*5 - (1/3)*(brain[0]*5) - (1/3)*(brain[2]*5) - (1/3)*(brain[3]*5);
  left = 25 + brain[2]*5 - (1/3)*(brain[0]*5) - (1/3)*(brain[1]*5) - (1/3)*(brain[3]*5);
  right = 25 + brain[3]*5 - (1/3)*(brain[0]*5) - (1/3)*(brain[1]*5) - (1/3)*(brain[2]*5);

  moveProb = [up, down, left, right];

  dice = getRandomInt(99) + 1;

  //console.log(dice)
  //console.log(moveProb)

  if(up > dice){

    this.move("up")
  }

  if(up + down > dice && up < dice){
     
    this.move("down")
  }

  if(up + down + left > dice && up + down < dice){

    this.move("left")
  }
  if(up + down + left < dice){

    this.move("right")
  }

  this.game.time.events.add(150, this.markovBot, this);

};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}