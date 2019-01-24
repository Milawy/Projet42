
Game.Player = function (game, x, y) {
 
	Phaser.Sprite.call(this, game, x, y, 'player');
	 
	this.name = 'player';

	/////////////////////////////////Animations/////////////////////////////////

	this.animations.add('leftSide',[0,1,2],20,false);
	this.animations.add('rightSide',[0,1,2],20,false);
	this.animations.add('up',[3,4,5],20,false);
	this.animations.add('down',[6,7,8],20,false);
	this.animations.add('stand',[6],20,false);
	 
	this.game.physics.enable(this, Phaser.Physics.ARCADE);

	this.anchor.setTo(.5,.5);
	 
};
 
Game.Player.prototype = Object.create(Phaser.Sprite.prototype);
	 
Game.Player.prototype.update = function(){
	
    /////////////////////////////////Movements/////////////////////////////////

    if (key.isDown(90) && !key.isDown(81) && !key.isDown(83) && !key.isDown(68)){
        this.move("up");
    }
    if (key.isDown(83) && !key.isDown(90) && !key.isDown(81) && !key.isDown(68)){
        this.move("down");
    }
    if (key.isDown(68) && !key.isDown(90) && !key.isDown(83) && !key.isDown(81)){
        this.move("right");
    }
    if (key.isDown(81) && !key.isDown(90) && !key.isDown(83) && !key.isDown(68)){
        this.move("left");
    }
    if (key.isDown(81) && key.isDown(90)){
        this.move("upLeft");
    }
    if (key.isDown(81) && key.isDown(83)){
        this.move("downLeft");
    }
    if (key.isDown(68) && key.isDown(90)){
        this.move("upRight");
    }
    if (key.isDown(68) && key.isDown(83)){
        this.move("downRight");
    }
    if (!key.isDown(81) && !key.isDown(68) && !key.isDown(83) && !key.isDown(90)){
        this.move("stand");
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
		  this.scale.x = -1;
	    this.animations.play("rightSide");
   	}
   	if(direction == 'left'){
   		this.body.velocity.y = 0;
		  this.body.velocity.x = -100;
		  this.scale.x = 1;
	    this.animations.play("leftSide");
   	}
   	if(direction == 'upLeft'){
   		// The sqrt(2)/2 factors' aim is to normalize the velocity in diagonal
   		this.body.velocity.y = -100*(Math.sqrt(2)/2);
		  this.body.velocity.x = -100*(Math.sqrt(2)/2);
		  this.scale.x = 1;
	    this.animations.play("up");	
   	}
   	if(direction == 'downLeft'){
   		this.body.velocity.y = 100*(Math.sqrt(2)/2);
		  this.body.velocity.x = -100*(Math.sqrt(2)/2);
		  this.scale.x = 1;
	    this.animations.play("down");
   	}
   	if(direction == 'upRight'){
   		this.body.velocity.y = -100*(Math.sqrt(2)/2);
		  this.body.velocity.x = 100*(Math.sqrt(2)/2);
	    this.animations.play("up");
   	}
   	if(direction == 'downRight'){
   		this.body.velocity.y = 100*(Math.sqrt(2)/2);
		  this.body.velocity.x = 100*(Math.sqrt(2)/2);
	    this.animations.play("down");
   	}
   	if(direction == 'stand'){
   		this.body.velocity.x = 0;
   		this.body.velocity.y = 0;
   		this.animations.play("stand");
   	}
    
};