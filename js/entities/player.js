
Game.Player = function (game, x, y) {
 
	Phaser.Sprite.call(this, game, x, y, 'bot');
	this.name = 'player';
  this.green = false;
  this.yellow = false;
  this.blue = false;
  this.red = false;
  this.stop = true;
  this.P1Ready = false;
  this.score = 0;

  this.upVal = 0;
  this.downVal = 0;
  this.leftVal = 0;
  this.rightVal = 0;

  this.gameScope = game;
  this.collide = false;
  this.prevDir;

	/////////////////////////////////Animations/////////////////////////////////

	this.animations.add('rightSide',[0,1,2,3,4,5],36,false);
	this.animations.add('leftSide',[0,1,2,3,4,5],36,false);
	this.animations.add('up',[6,7,8,9],25,false);
	this.animations.add('down',[12,13,14,15],25,false);
	this.animations.add('stand',[12],25,false);
	 
	this.game.physics.enable(this, Phaser.Physics.ARCADE);

	this.anchor.setTo(.5,.5);

  spaceBar = this.game.input.keyboard.addKey(32);

  this.animations.play("stand");
};
 
Game.Player.prototype = Object.create(Phaser.Sprite.prototype);
	 
Game.Player.prototype.update = function(){
    	
    if(spaceBar.justPressed() && this.stop){
      this.P1Ready = true;
    }

    if(!this.stop){
      this.stop = true;
      this.markovBot();
    }

    if(this.green === true){
      this.upVal = parseInt(greenUpCounter.text);
      this.downVal = parseInt(greenDownCounter.text);
      this.leftVal = parseInt(greenLeftCounter.text);
      this.rightVal = parseInt(greenRightCounter.text);
    }
    else if(this.yellow === true){
      this.upVal = parseInt(yellowUpCounter.text);
      this.downVal = parseInt(yellowDownCounter.text);
      this.leftVal = parseInt(yellowLeftCounter.text);
      this.rightVal = parseInt(yellowRightCounter.text);
    }
    else if(this.red === true){
      this.upVal = parseInt(redUpCounter.text);
      this.downVal = parseInt(redDownCounter.text);
      this.leftVal = parseInt(redLeftCounter.text);
      this.rightVal = parseInt(redRightCounter.text);
    }
    else if(this.blue === true){
      this.upVal = parseInt(blueUpCounter.text);
      this.downVal = parseInt(blueDownCounter.text);
      this.leftVal = parseInt(blueLeftCounter.text);
      this.rightVal = parseInt(blueRightCounter.text);
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

  brain = [this.upVal, this.downVal, this.leftVal, this.rightVal];

  up = 25 + brain[0]*7 - (1/3)*(brain[1]*7) - (1/3)*(brain[2]*7) - (1/3)*(brain[3]*7);
  down = 25 + brain[1]*7 - (1/3)*(brain[0]*7) - (1/3)*(brain[2]*7) - (1/3)*(brain[3]*7);
  left = 25 + brain[2]*7 - (1/3)*(brain[0]*7) - (1/3)*(brain[1]*7) - (1/3)*(brain[3]*7);
  right = 25 + brain[3]*7 - (1/3)*(brain[0]*7) - (1/3)*(brain[1]*7) - (1/3)*(brain[2]*7);

  moveProb = [up, down, left, right];

  dice = getRandomInt(99) + 1;

  //console.log(dice)
  //console.log(moveProb)

  if(up > dice){
    this.prevDir = "up"
    this.move("up")
  }

  if(up + down > dice && up < dice){
    this.prevDir = "down"
    this.move("down")
  }

  if(up + down + left > dice && up + down < dice){
    this.prevDir = "left"
    this.move("left")
  }
  if(up + down + left < dice){
    this.prevDir = "right"
    this.move("right")
  }

  if(multiplayer && this.overlap(this.gameScope.state.getCurrentState().player2)){
    this.game.time.events.add(150, this.inversion, this);
  }
  else{
    this.game.time.events.add(150, this.markovBot, this);
  }
};


Game.Player.prototype.inversion = function(){

  if(this.prevDir == "up"){
    this.move("down");
    this.game.time.events.add(150, function() {
      this.move("down")
    }, this);
    this.game.time.events.add(300, function() {
      this.move("down")
    }, this);
    this.game.time.events.add(450, function() {
      this.move("down")
    }, this);
    this.game.time.events.add(600, function() {
      this.move("down")
    }, this);
  }
  if(this.prevDir == "down"){
    this.move("up");
    this.game.time.events.add(150, function() {
      this.move("up")
    }, this);
    this.game.time.events.add(300, function() {
      this.move("up")
    }, this);
    this.game.time.events.add(450, function() {
      this.move("up")
    }, this);
    this.game.time.events.add(600, function() {
      this.move("up")
    }, this);
  }
  if(this.prevDir == "right"){
    this.move("left");
    this.game.time.events.add(150, function() {
      this.move("left")
    }, this);
    this.game.time.events.add(300, function() {
      this.move("left")
    }, this);
    this.game.time.events.add(450, function() {
      this.move("left")
    }, this);
    this.game.time.events.add(600, function() {
      this.move("left")
    }, this);
  }
  if(this.prevDir == "left"){
    this.move("right");
    this.game.time.events.add(150, function() {
      this.move("right")
    }, this);
    this.game.time.events.add(300, function() {
      this.move("right")
    }, this);
    this.game.time.events.add(450, function() {
      this.move("right")
    }, this);
    this.game.time.events.add(600, function() {
      this.move("right")
    }, this);
  }

  this.game.time.events.add(750, this.markovBot, this);
};


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}