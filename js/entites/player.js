Game.Player = function (game, x, y) {
 
	//nous créons notre sprite, en donnant comme paramètre de ressource le label 
	// correspondant à la spritesheet du joueur.
	Phaser.Sprite.call(this, game, x, y, 'player');
	 
	this.name = 'player';
	this.game = game;
	 
	//animons un peu notre joueur d'après notre spritesheet!

	this.animations.add('side',[0,1,2],20,true);
	 
	/*this.animations.add('gauche',[7,8,9,10],10,true);
	this.animations.add('droite',[1,2,3,4],10,true);
	this.animations.add('saut_gauche',[11],1,true);
	this.animations.add('saut_droite',[5],1,true);
	this.animations.add('arret_gauche',[6],1,true);
	this.animations.add('arret_droite',[0],1,true);*/
	 
	//on intègre le moteur de physique pour le joueur
	game.physics.enable(this, Phaser.Physics.ARCADE);
	//on établit les limites du monde en terme de collision
	this.body.collideWorldBounds = true;
	 
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
   	
   	if(direction == 'left')
    this.body.velocity.y = -150; 
    //this.body.velocity.x = 150*this.dirx;

    this.animations.play("side");

};