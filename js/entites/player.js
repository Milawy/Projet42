Game.Player = function (game, x, y) {
 
	Phaser.Sprite.call(this, game, x, y, 'player');
	 
	this.name = 'player';
	this.game = game;

	this.animations.add('leftSide',[0,1,2],20,false);
	this.animations.add('rightSide',[9,10,11],20,false);
	this.animations.add('up',[3,4,5],20,false);
	this.animations.add('down',[6,7,8],20,false);
	this.animations.add('sideStand',[0],20,false);
	this.animations.add('upStand',[3],20,false);
	this.animations.add('downStand',[6],20,false);

	 
	/*this.animations.add('gauche',[7,8,9,10],10,true);
	this.animations.add('droite',[1,2,3,4],10,true);
	this.animations.add('saut_gauche',[11],1,true);
	this.animations.add('saut_droite',[5],1,true);
	this.animations.add('arret_gauche',[6],1,true);
	this.animations.add('arret_droite',[0],1,true);*/
	 
	game.physics.enable(this, Phaser.Physics.ARCADE);

	// collisions
	//this.body.collideWorldBounds = true;
	 
};
 
Game.Player.prototype = Object.create(Phaser.Sprite.prototype);
	 
Game.Player.prototype.constructor = Game.Player;
	 
Game.Player.prototype.update = function(){
	
};

Game.Player.prototype = Object.create(Phaser.Sprite.prototype);
 
Game.Player.prototype.constructor = Game.Player;
 
Game.Player.prototype.update=function(){
 
};

Game.Player.prototype.move = function(direction){
   	
   	if(direction == 'up'){
   		this.body.velocity.y = -150;
		this.body.velocity.x = 0;
	    this.animations.play("up");
   	}
   	if(direction == 'down'){
   		this.body.velocity.y = 150;
		this.body.velocity.x = 0;
	    this.animations.play("down");
   	}
   	if(direction == 'right'){
   		this.body.velocity.y = 0;
		this.body.velocity.x = 150;
	    this.animations.play("rightSide");
   	}
   	if(direction == 'left'){
   		this.body.velocity.y = 0;
		this.body.velocity.x = -150;
	    this.animations.play("leftSide");
   	}
   	if(direction == 'upLeft'){
   		this.body.velocity.y = -150;
		this.body.velocity.x = -150;
	    this.animations.play("up");
   	}
   	if(direction == 'downLeft'){
   		this.body.velocity.y = 150;
		this.body.velocity.x = -150;
	    this.animations.play("down");
   	}
   	if(direction == 'upRight'){
   		this.body.velocity.y = -150;
		this.body.velocity.x = 150;
	    this.animations.play("up");
   	}
   	if(direction == 'downRight'){
   		this.body.velocity.y = 150;
		this.body.velocity.x = 150;
	    this.animations.play("down");
   	}
   	if(direction == 'stand'){
   		this.body.velocity.x = 0;
   		this.body.velocity.y = 0;
   		this.animations.play("downStand");
   	}
    
};