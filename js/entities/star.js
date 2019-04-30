/////////////////////////////////Create/////////////////////////////////

Game.star = function (t, x, y, scaleX=0.1, scaleY=0.1) {

	Phaser.Sprite.call(this, t.game, x, y, 'star');
	this.name = 'star';
	this.anchor.setTo(0.5, 0.5);
	this.scale.setTo(scaleX, scaleY);
	this.fixedToCamera = false;
	this.smoothed = true;
	this.visible = true;

	this.gameScope = t;

}

Game.star.prototype = Object.create(Phaser.Sprite.prototype);

Game.star.prototype.update = function(){

	if(multiplayer && this.gameScope.player2.overlap(this)){
		this.gameScope.player2.score++;
		this.destroy();
	}
	else if(multiplayer && this.gameScope.player.overlap(this)){
		this.gameScope.player.score++;
		this.destroy();		
	}
	else if(!multiplayer){
		if(this.gameScope.player.overlap(this)){
			this.gameScope.player.score++;
			this.destroy();
		}
	}
}
