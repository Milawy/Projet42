

Game.Menu=function(){
 
};
 
Game.Menu.prototype = { 
 
    preload : function(){        
    
    }, 
 
    create : function(){

    	music = this.game.add.audio('discours');
    	music.loop = true;
    	music.play();
    	
    	this.game.add.image(0 , 0, 'menuBackground');
    }, 
 
 
}