Game={};
Game.Boot = function(){};
 
Game.Boot.prototype = {
 
  preload : function(){
      //Nothing to preload now
  },
 
  create : function(){
 
   	//Scaling time !
    //this.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

    //Preload everything
    this.state.start('Preload');
 
  },
 
}