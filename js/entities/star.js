/////////////////////////////////Create/////////////////////////////////

Game.star = function (t, x, y, scaleX, scaleY) {

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

	if(this.gameScope.player.overlap(star)){
		console.log("dab");
	}
}
