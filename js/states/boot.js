Game={};
Game.Boot = function(){};
 
Game.Boot.prototype = {
 
  preload : function(){
      //aucune ressource à précharger pour cet état
  },
 
  create : function(){
 
   	//Mise à l'échelle
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.input.maxPointers = 1;
    this.scale.minWidth = 256;
    this.scale.minHeight = 256;
     
    this.scale.pageAlignHorizontally = true;
		
    //on passe au State Preloader
    this.state.start('Preload');
 
  },
 
}