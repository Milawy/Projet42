var isPressed = false;

Game.Menu=function(){
 
};
 
Game.Menu.prototype = { 
 
    preload : function(){        
    
    }, 
 
    create : function(){
        
        // Add audio theme
    	mainTheme = this.game.add.audio('mainTheme');
    	//mainTheme.play();
    	
        // Add background
    	this.game.add.image(0 , 0, 'menuBackground');

        // Fullscreen Button
        this.fullscreenButton = this.game.add.image(237, 3, 'fullscreenButton');
        this.fullscreenButton.inputEnabled = true;
        this.fullscreenButton.events.onInputDown.add(fullscreenButtonEnable, this);
        this.fullscreenButton.scale.x = 0.5;
        this.fullscreenButton.scale.y = 0.5;

        // FullscreenOff Button
        this.fullscreenOffButton = this.game.add.image(237, 3, 'fullscreenOffButton');
        this.fullscreenOffButton.inputEnabled = true;
        this.fullscreenOffButton.events.onInputDown.add(fullscreenButtonEnable, this);
        this.fullscreenOffButton.scale.x = 0.5;
        this.fullscreenOffButton.scale.y = 0.5;
        this.fullscreenOffButton.visible = false;

        // Fullscreen key
        this.fullscreenKey = this.game.input.keyboard.addKey(70);
        this.fullscreenKey.onDown.add(fullscreenButtonEnable , this);
        
        // Play Button
        playButton = this.game.add.sprite(100, 100, 'playButton');
        playButton.inputEnabled = true;
        playButton.events.onInputOver.add(overPlayButton, this);
    	playButton.events.onInputDown.add(launchGame, this);
        playButton.animations.add('hoover', [0,1], 10, false);
        playButton.animations.add('notHoover', [1,0], 10, false);

        // Press enter to play
        this.playKey = this.game.input.keyboard.addKey(13);
        this.playKey.onDown.add(launchGame , this);

        // Main Title
        pressEnterToPlay = this.game.add.retroFont('basicFont', 16, 15, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        this.textBox = this.game.add.image(6, 25, pressEnterToPlay);
        this.textBox.scale.x = 0.77;
        this.textBox.scale.y = 0.77;
        pressEnterToPlay.text = "For the Greater Good";

        // Clickable TextBox
        pressEnterToPlay = this.game.add.retroFont('basicFont', 16, 15, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        this.textBox = this.game.add.image(50, 220, pressEnterToPlay);
        this.textBox.scale.x = 0.5;
        this.textBox.scale.y = 0.5;
        pressEnterToPlay.text = "Press Enter To Play";
        this.textBox.inputEnabled = true;
        this.textBox.events.onInputDown.add(launchGame, this);

    }, 

    update : function(){

        if(isPressed == true && playButton.input.pointerOver() == false){
            isPressed = false;
            playButton.animations.play('notHoover');
        }
    }
 
 
}

function fullscreenButtonEnable(){

    if(!this.scale.isFullScreen){
        this.game.scale.startFullScreen();
        this.fullscreenButton.visible = false;
        this.fullscreenOffButton.visible = true;
    }
    else{
        this.game.scale.stopFullScreen();
        this.fullscreenOffButton.visible = false;
        this.fullscreenButton.visible = true;
    }
}

function launchGame(){

    //mainTheme.stop();
    this.state.start('Game');
}

function overPlayButton(){

    playButton.animations.play('hoover');
    isPressed = true;
}
