

Game.Menu=function(){
 
};
 
Game.Menu.prototype = { 
 
    preload : function(){        
    
    }, 
 
    create : function(){

    	music = this.game.add.audio('discours');
    	music.play();
    	
    	this.game.add.image(0 , 0, 'menuBackground');
    	playButton = this.game.add.image(50 ,50 ,'playButton');
    	playButton.inputEnabled = true;
    	playButton.events.onInputDown.add(launchGame, this);
    }, 
 
 
}

function launchGame(){

	music.stop();
	this.state.start('Game');
}