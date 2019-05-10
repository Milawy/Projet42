
/////////////////////////////////Create/////////////////////////////////

Game.pauseMenu = function (t) {


	////Pause Icon////
	pauseIcon = t.game.add.image(t.game.camera.view.width/2, 100, "pauseIcon");
    pauseIcon.anchor.x = 0.5;
    pauseIcon.anchor.y = 0.5;
    pauseIcon.smoothed = false;
    pauseIcon.visible = false;
   	pauseKey = t.game.input.keyboard.addKey(27);
    pauseKey.onDown.add(pause , t);


    ///////////////Restart Menu/////////////
    restartFont = t.game.add.image(t.game.camera.view.width/2, 35, "restartFont");
    restartFont.anchor.setTo(0.5,0.5);
    restartFont.scale.setTo(0.6,0.5);
    restartFont.smoothed = false;
    restartFont.fixedToCamera = true;
    var style = { font: "20px Times New Roman", fill: "#fff"};
    restartText = t.game.add.text(t.game.camera.view.width/2 - 70, 40, "Press R to Restart", style);
    restartText.anchor.y = 0.5;
    restartText.fixedToCamera = true;
    restartFont.visible = false;
    restartText.visible = false;


	////Exit Icon////
	exitIcon = t.game.add.image(35, 35, "exit");
    exitIcon.anchor.x = 0.5;
    exitIcon.anchor.y = 0.5;
    exitIcon.smoothed = false;
   	exitIcon.inputEnabled = true;
   	exitIcon.visible = false;
    exitIcon.events.onInputDown.add(returnToMenu, t);


    ////Sound On/Off////
	soundOn = t.game.add.image(35, 105, "soundOn");
    soundOn.anchor.x = 0.5;
    soundOn.anchor.y = 0.5;
    soundOn.smoothed = false;
    soundOn.inputEnabled = true;
    soundOn.visible = false;
    soundOn.events.onInputDown.add(switchSoundOff, t);

	soundOff = t.game.add.image(35, 105, "soundOff");
    soundOff.anchor.x = 0.5;
    soundOff.anchor.y = 0.5;
    soundOff.smoothed = false;
    soundOff.visible = false;
    soundOff.inputEnabled = true;
    soundOff.events.onInputDown.add(switchSoundOn, t);

    ////Text////
    var style = { font: "20px Times New Roman", fill: "#fff"};
    var style25 = { font: "25px Times New Roman", fill: "#fff"};
    controls = t.game.add.text(t.game.camera.view.width/4 + 15, 190, " ", style);
    controls.anchor.setTo(0.5,0.5);
    controls.visible = false;

    ////KeyboardP1////
    
    if(multiplayer){

        keyboardP1 = t.game.add.image(200, 300, "keyboardP1");
        keyboardP1.anchor.setTo(0.5,0.5);
        keyboardP1.scale.setTo(1.3,1.3);
        keyboardP1.visible = false;

        keyboardP2 = t.game.add.image(750, 300, "keyboardP2");
        keyboardP2.anchor.setTo(0.5,0.5);
        keyboardP2.scale.setTo(1.3,1.3);
        keyboardP2.visible = false;

    }
    else {
        keyboardP1 = t.game.add.image(600, 450, "keyboardP1");
        keyboardP1.anchor.setTo(0.5,0.5);
        keyboardP1.scale.setTo(1.3,1.3);
        keyboardP1.visible = false;
    }
}

function pause(){
    
    if(this.game.paused == true){

        this.game.paused = false;
        pauseIcon.visible = false;
        soundOff.visible = false;
        soundOn.visible = false;
        exitIcon.visible = false;
        controls.visible = false;
        keyboardP1.visible = false;
        keyboardP2.visible = false;
        restartFont.visible = false;
        restartText.visible = false;
    }
    else {

        this.game.paused = true;
        pauseIcon.visible = true;
        exitIcon.visible = true;
        controls.visible = true;
        keyboardP1.visible = true;
        keyboardP2.visible = true;
        restartFont.visible = true;
        restartText.visible = true;

        if(!this.pauseMenu.mainTheme.paused){
			soundOn.visible = true;
        }
        else{
        	soundOff.visible = true;
        }
    }
}

function switchSoundOff(){
    soundOn.visible = false;
    soundOff.visible = true;
    this.pauseMenu.mainTheme.pause();
}

function switchSoundOn(){
    soundOn.visible = true;
    soundOff.visible = false;
    this.pauseMenu.mainTheme.play();
}

function returnToMenu(){
	this.game.paused = false;
	this.pauseMenu.mainTheme.pause();
	this.scale.setGameSize(1366, 768);
    this.state.start("Menu");
}