
Game.Player2 = function (game, x, y) {
 
	Phaser.Sprite.call(this, game, x, y, 'bot2'); // call the red sprite
	this.name = 'player2';
  this.green = false;
  this.yellow = false;
  this.blue = false;
  this.red = false;
  this.stop = true;
  this.P2Ready = false;
  this.score = 0;

  this.upVal = 0;
  this.downVal = 0;
  this.leftVal = 0;
  this.rightVal = 0;

  this.gameScope = game;
  this.prevDir2;

	/////////////////////////////////Animations/////////////////////////////////

  this.animations.add('rightSide',[0,1,2,3,4,5],36,false);
  this.animations.add('leftSide',[0,1,2,3,4,5],36,false);
  this.animations.add('up',[6,7,8,9],25,false);
  this.animations.add('down',[12,13,14,15],25,false);
  this.animations.add('stand',[12],25,false);
	 
	this.game.physics.enable(this, Phaser.Physics.ARCADE);

	this.anchor.setTo(.5,.5);

  this.animations.play("stand");
};
 
Game.Player2.prototype = Object.create(Phaser.Sprite.prototype);
	 
Game.Player2.prototype.update = function(){

    launchBar = this.game.input.keyboard.addKey(96);

    if(launchBar.justPressed() && this.stop){
      this.P2Ready = true;
    }

    if(!this.stop){
      this.stop = true;
      this.markovBot2();
    }

    if(this.green === true){
      this.upVal2 = parseInt(greenUpCounter2.text);
      this.downVal2 = parseInt(greenDownCounter2.text);
      this.leftVal2 = parseInt(greenLeftCounter2.text);
      this.rightVal2 = parseInt(greenRightCounter2.text);
    }
    else if(this.yellow === true){
      this.upVal2 = parseInt(yellowUpCounter2.text);
      this.downVal2 = parseInt(yellowDownCounter2.text);
      this.leftVal2 = parseInt(yellowLeftCounter2.text);
      this.rightVal2 = parseInt(yellowRightCounter2.text);
    }
    else if(this.red === true){
      this.upVal2 = parseInt(redUpCounter2.text);
      this.downVal2 = parseInt(redDownCounter2.text);
      this.leftVal2 = parseInt(redLeftCounter2.text);
      this.rightVal2 = parseInt(redRightCounter2.text);
    }
    else if(this.blue === true){
      this.upVal2 = parseInt(blueUpCounter2.text);
      this.downVal2 = parseInt(blueDownCounter2.text);
      this.leftVal2 = parseInt(blueLeftCounter2.text);
      this.rightVal2 = parseInt(blueRightCounter2.text);
    }

};

Game.Player2.prototype.move = function(direction){
   	
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


Game.Player2.prototype.markovBot2 = function(){

  brain2 = [this.upVal2, this.downVal2, this.leftVal2, this.rightVal2];

  this.up2 = 25 + brain2[0]*7 - (1/3)*(brain2[1]*7) - (1/3)*(brain2[2]*7) - (1/3)*(brain2[3]*7);
  this.down2 = 25 + brain2[1]*7 - (1/3)*(brain2[0]*7) - (1/3)*(brain2[2]*7) - (1/3)*(brain2[3]*7);
  this.left2 = 25 + brain2[2]*7 - (1/3)*(brain2[0]*7) - (1/3)*(brain2[1]*7) - (1/3)*(brain2[3]*7);
  this.right2 = 25 + brain2[3]*7 - (1/3)*(brain2[0]*7) - (1/3)*(brain2[1]*7) - (1/3)*(brain2[2]*7);

  this.moveProb2 = [this.up2, this.down2, this.left2, this.right2];

  this.dice2 = getRandomInt(99) + 1;

  //console.log(this.dice2)
  //console.log(this.moveProb2)

  if(this.up2 > this.dice2){
    this.prevDir2 = "up"
    this.move("up")
  }

  if(this.up2 + this.down2 > this.dice2 && this.up2 < this.dice2){
    this.prevDir2 = "down"     
    this.move("down")
  }

  if(this.up2 + this.down2 + this.left2 > this.dice2 && this.up2 + this.down2 < this.dice2){
    this.prevDir2 = "left"
    this.move("left")
  }
  if(this.up2 + this.down2 + this.left2 < this.dice2){
    this.prevDir2 = "right"    
    this.move("right")
  }

  if(multiplayer && this.overlap(this.gameScope.state.getCurrentState().player)){
    this.game.time.events.add(150, this.inversion, this);
  }
  else{
    this.game.time.events.add(150, this.markovBot2, this);
  }
};

Game.Player2.prototype.inversion = function(){

  if(this.prevDir2 == "up"){
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
  if(this.prevDir2 == "down"){
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
  if(this.prevDir2 == "right"){
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
  if(this.prevDir2 == "left"){
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

  this.game.time.events.add(750, this.markovBot2, this);
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}