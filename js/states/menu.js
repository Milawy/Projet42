var soloPressed = false;
var multiPressed = false;
var multiplayer = false;

Game.Menu=function(){
 
};
 
Game.Menu.prototype = { 
 
    preload : function(){        
    
    }, 
 
    create : function(){
    	
        // Add background
    	bg = this.game.add.image(0 , 0, 'mainTitle');

        // Fullscreen Button
        //this.game.scale.startFullScreen();
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

        // Solo Button
        soloButton = this.game.add.sprite(this.game.width/2, this.game.height/2, 'greenButton');
        soloButton.anchor.setTo(0.5,0.5);
        soloButton.scale.setTo(1.5,1.5);
        soloButton.animations.add('hoover',[0,1],20,false);
        soloButton.animations.add('notHoover',[1,0,2],20,false);
        soloButton.animations.add('frame3',[2],20,false);
        soloButton.inputEnabled = true;
        soloButton.smoothed = false;
        soloButton.events.onInputDown.add(launchGame, this);
        soloButton.events.onInputOver.add(overSoloButton, this);
        soloButton.animations.play("frame3");

        soloText = this.game.add.retroFont('basicFont', 16, 15, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        this.soloTextBox = this.game.add.image(this.game.width/2, this.game.height/2, soloText);
        this.soloTextBox.scale.setTo(1.5,1.5);
        this.soloTextBox.anchor.x = 0.5;
        this.soloTextBox.anchor.y = 0.5;
        soloText.text = "One Player";

        // Multi Button
        multiButton = this.game.add.sprite(this.game.width/2, this.game.height/2 + 100, 'greenButton');
        multiButton.anchor.setTo(0.5,0.5);
        multiButton.scale.setTo(1.5,1.5);
        multiButton.animations.add('hoover',[0,1],20,false);
        multiButton.animations.add('notHoover',[1,0,2],20,false);
        multiButton.animations.add('frame3',[2],20,false);
        multiButton.inputEnabled = true;
        multiButton.smoothed = false;
        multiButton.events.onInputDown.add(launchGameMulti, this);
        multiButton.events.onInputOver.add(overMultiButton, this);
        multiButton.animations.play("frame3");

        multiText = this.game.add.retroFont('basicFont', 16, 15, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        this.multiTextBox = this.game.add.image(this.game.width/2, this.game.height/2 + 100, multiText);
        this.multiTextBox.scale.setTo(1.5,1.5);
        this.multiTextBox.anchor.x = 0.5;
        this.multiTextBox.anchor.y = 0.5;
        multiText.text = "Two Players";

        // Press space to play
        this.playKey = this.game.input.keyboard.addKey(32);
        this.playKey.onDown.add(launchGameMulti , this);

        // Main Title
        this.mainTitle = this.game.add.image(this.game.width/2, 150, "title");
        this.mainTitle.anchor.setTo(0.5,0.5);
        this.mainTitle.scale.setTo(0.65,0.65);

    }, 

    update : function(){

        if(soloPressed == true && soloButton.input.pointerOver() == false){
            soloPressed = false;
            this.soloTextBox.position.y = this.game.height/2;
            soloButton.animations.play("notHoover");
        }

        if(multiPressed == true && multiButton.input.pointerOver() == false){
            multiPressed = false;
            this.multiTextBox.position.y = this.game.height/2 + 100;
            multiButton.animations.play("notHoover");
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
    multiplayer = false;
    this.state.start('Tutorial');
    //this.state.start('Stage1');
    //this.state.start('Stage2');
    //this.state.start('Stage3');
}

function launchGameMulti(){

    //mainTheme.stop();
    multiplayer = true;
    this.state.start('Tutorial');
    //this.state.start('Stage1');
    //this.state.start('Stage2');
    //this.state.start('Stage3');
}

function overSoloButton(){

    soloButton.animations.play("hoover");
    this.soloTextBox.position.y = this.game.height/2;
    soloPressed = true;
}

function overMultiButton(){

    multiButton.animations.play("hoover");
    this.multiTextBox.position.y = this.game.height/2 + 100;
    multiPressed = true;
}


