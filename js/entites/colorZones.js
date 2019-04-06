/////////////////////////////////Create/////////////////////////////////

Game.colorZones = function (t, color, x, y, scaleX=1, scaleY=1) {

	if(color == "green"){

		this.zone = t.game.add.image(x, y, "greenZone");
	}
	else if(color == "yellow"){

		this.zone = t.game.add.image(x, y, "yellowMenu");
	}
	else if(color == "red"){

		this.zone = t.game.add.image(x, y, "redMenu");
	}
	else if(color == "blue"){

		this.zone = t.game.add.image(x, y, "blueMenu");
	}

	this.zone.anchor.setTo(0.5,0.5);
    this.zone.alpha = 0.4;
    this.zone.scale.setTo(scaleX,scaleY);

}