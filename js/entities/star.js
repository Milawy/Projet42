/////////////////////////////////Create/////////////////////////////////

Game.star = function (t, x, y, scaleX, scaleY) {

	this.star = t.game.add.image(x, y, "star");
	this.star.anchor.setTo(0.5, 0.5);
	this.star.scale.setTo(scaleX, scaleY);
	this.star.fixedToCamera = false;
	this.star.smoothed = true;

	//if(t.player.overlap(star)){
		//fait disparaitre l'étoile, garde en mémoire
		//que le joueur l'a ramassé, puis s'ajoute au score final
	//}
}