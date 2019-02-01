Game={};
Game.Boot = function(){};
 
Game.Boot.prototype = {
 
  preload : function(){
      //Nothing to preload now
  },
 
  create : function(){
 
   	//Scaling time !
    this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.input.maxPointers = 1;
    this.scale.minWidth = 256;
    this.scale.minHeight = 256;
     
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    //Preload everything
    this.state.start('Preload');
 
  },
 
}