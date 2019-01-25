

Game.Menu=function(){
 
};
 
Game.Menu.prototype = { 
 
    preload : function(){        
    
    }, 
 
    create : function(){

        // Add audio theme
    	mainTheme = this.game.add.audio('mainTheme');
    	mainTheme.play();
    	
        // Add background
    	this.game.add.image(0 , 0, 'menuBackground');

        // Play Button
    	playButton = this.game.add.image(100 ,100 ,'playButton');
    	playButton.inputEnabled = true;
    	playButton.scale.x = 0.2;
    	playButton.scale.y = 0.2;
    	playButton.events.onInputDown.add(launchGame, this);

        // Press enter to play
        this.playKey = this.game.input.keyboard.addKey(13);
        this.playKey.onDown.add(launchGame , this);

        // Clickable TextBox
        pressEnterToPlay = this.game.add.retroFont('basicFont', 16, 15, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        this.textBox = this.game.add.image(50, 220, pressEnterToPlay);
        this.textBox.scale.x = 0.5;
        this.textBox.scale.y = 0.5;
        pressEnterToPlay.text = "Press Enter To Play";
        this.textBox.inputEnabled = true;
        this.textBox.events.onInputDown.add(launchGame, this);
    }, 
 
 
}

function launchGame(){

	//mainTheme.stop();
	this.state.start('Game');
}