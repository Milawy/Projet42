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
    	bg = this.game.add.image(0 , 0, 'mainTitle');
        bg.scale.x = 0.71;
        bg.scale.y = 0.52;

        // Fullscreen Button
        this.fullscreenButton = this.game.add.image(this.game.width - 40, 10, 'fullscreenButton');
        this.fullscreenButton.inputEnabled = true;
        this.fullscreenButton.events.onInputDown.add(fullscreenButtonEnable, this);
        this.fullscreenButton.scale.x = 1;
        this.fullscreenButton.scale.y = 1;

        // FullscreenOff Button
        this.fullscreenOffButton = this.game.add.image(this.game.width - 40, 10, 'fullscreenOffButton');
        this.fullscreenOffButton.inputEnabled = true;
        this.fullscreenOffButton.events.onInputDown.add(fullscreenButtonEnable, this);
        this.fullscreenOffButton.scale.x = 1;
        this.fullscreenOffButton.scale.y = 1;
        this.fullscreenOffButton.visible = false;

        // Fullscreen key
        this.fullscreenKey = this.game.input.keyboard.addKey(70);
        this.fullscreenKey.onDown.add(fullscreenButtonEnable , this);

        // Play Button
  /*    playButton = this.game.add.sprite(this.game.width/2 - 20, this.game.height/2 - 40, 'playButton');
        playButton.scale.x = 2;
        playButton.scale.y = 2;
        playButton.inputEnabled = true;
        playButton.events.onInputOver.add(overPlayButton, this);
    	playButton.events.onInputDown.add(launchGame, this);
        playButton.animations.add('hoover', [0,1], 10, false);
        playButton.animations.add('notHoover', [1,0], 10, false);
*/
        playButton = this.game.add.retroFont('basicFont', 16, 15, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        this.textBox = this.game.add.image(this.game.width/2 - 59, 200, playButton);
        this.textBox.scale.x = 2;
        this.textBox.scale.y = 2;
        this.textBox.inputEnabled = true;
        this.textBox.events.onInputDown.add(launchGame, this);
        playButton.text = "Play";

        // Press enter to play
        this.playKey = this.game.input.keyboard.addKey(13);
        this.playKey.onDown.add(launchGame , this);

        // Main Title
        mainTitle = this.game.add.retroFont('basicFont', 16, 15, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        this.textBox = this.game.add.image(this.game.width/2 - 315, 50, mainTitle);
        this.textBox.scale.x = 2;
        this.textBox.scale.y = 2;
        mainTitle.text = "For the Greater Good";

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
