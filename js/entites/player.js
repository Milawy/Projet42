
Game.Player = function (game, x, y) {
 
	Phaser.Sprite.call(this, game, x, y, 'player');
	 
	this.name = 'player';

	/////////////////////////////////Animations/////////////////////////////////

	this.animations.add('leftSide',[0,1,2],20,true);
	this.animations.add('rightSide',[0,1,2],20,true);
	this.animations.add('up',[3,4,5],20,true);
	this.animations.add('down',[6,7,8],20,true);
	this.animations.add('stand',[6],20,false);
	 
	this.game.physics.enable(this, Phaser.Physics.ARCADE);

	this.anchor.setTo(.5,.5);
	
  startTheBot = 0;

  T = this.game.time.time;
};
 
Game.Player.prototype = Object.create(Phaser.Sprite.prototype);
	 
Game.Player.prototype.update = function(){
	
    if(key.isDown(32) && startTheBot == 0 && this.game.time.time - T > 1000){

      startTheBot = 1;

      timer = this.game.time.create(false);
      timer.loop(1500, this.markovBot, this);
      timer.start();
    }

    if(key.isDown(32) && startTheBot == 2){

      startTheBot = 0;
      timer.destroy();
      T = this.game.time.time;
    }

};

Game.Player.prototype.move = function(direction){
   	
	 /////////////////////////////////Players' movements/////////////////////////////////

   	if(direction == 'up'){
   		this.body.velocity.y = -33;
		  this.body.velocity.x = 0;
	    this.animations.play("up");
   	}
   	if(direction == 'down'){
   		this.body.velocity.y = 33;
		  this.body.velocity.x = 0;
	    this.animations.play("down");
   	}
   	if(direction == 'right'){
   		this.body.velocity.y = 0;
		  this.body.velocity.x = 33;
		  // Flip the x axis
		  this.scale.x = -1;
	    this.animations.play("rightSide");
   	}
   	if(direction == 'left'){
   		this.body.velocity.y = 0;
		  this.body.velocity.x = -33;
		  this.scale.x = 1;
	    this.animations.play("leftSide");
   	}
   	if(direction == 'stand'){
   		this.body.velocity.x = 0;
   		this.body.velocity.y = 0;
   		this.animations.play("stand");
   	}
}


Game.Player.prototype.markovBot = function(){

  startTheBot = 2;
  
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

    this.game.time.events.add(1000, function (){

      this.move("stand")
    }, this);
  }
  if(up + down > dice && up < dice){
     
    this.move("down")

    this.game.time.events.add(1000, function (){

      this.move("stand")
    }, this);
  }
  if(up + down + left > dice && up + down < dice){

    this.move("left")

    this.game.time.events.add(1000, function (){

      this.move("stand")
    }, this);
  }
  if(up + down + left < dice){

    this.move("right")

    this.game.time.events.add(1000, function (){

      this.move("stand")
    }, this);
  }
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}