

function start() {
 	Phaser.State.call(this);
 	// TODO: generated method.
}
 


var proto = Object.create(Phaser.State.prototype);
Start.prototype = proto;
 

 
start.prototype.create = function() {
 	this.scene = new startCanvas(this.game);
};