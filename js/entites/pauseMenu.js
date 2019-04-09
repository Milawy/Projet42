
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


    ////Audio////
    this.mainTheme = document.createElement("AUDIO");
    this.mainTheme.src = './assets/sound/happy_valley.mp3';
    this.mainTheme.play();


    ////StoneBoard////
    stoneBoard = t.game.add.image(t.game.camera.view.width/4 + 15, 3*t.game.camera.view.height/4 - 70, "stoneBoard");
    stoneBoard.anchor.setTo(0.5,0.5);
    stoneBoard.scale.setTo(0.6,0.6);
    stoneBoard.visible = false;


    ////Text////
    var style = { font: "20px Times New Roman", fill: "#fff"};
    var style25 = { font: "25px Times New Roman", fill: "#fff"};
    controls = t.game.add.text(t.game.camera.view.width/4 + 15, 190, "Contrôles", style);
    controls.anchor.setTo(0.5,0.5);
    controls.visible = false;
    text1 = t.game.add.text(42, 235, "- Attribuez des points à la couleur sélectionnée \navec ZQSD, changez de couleur avec Tabulation", style);
    text1.anchor.setTo(0,0.5);
    text1.visible = false;
    text2 = t.game.add.text(42, 295, "- Plus le nombre de points dans une direction est \nélevé, plus Toby ira dans cette direction", style);
    text2.anchor.setTo(0,0.5);
    text2.visible = false;
    text3 = t.game.add.text(40, 350, "- Quand Toby passe sur une zone de couleur il se \ndéplacera selon les points attribué à cette couleur", style);
    text3.anchor.setTo(0,0.5);
    text3.visible = false;
    text4 = t.game.add.text(40, 400, "- Gagnez en atteignant le portail de fin !", style);
    text4.anchor.setTo(0,0.5);
    text4.visible = false;


}

function pause(){
    
    if(this.game.paused == true){

        this.game.paused = false;
        pauseIcon.visible = false;
        soundOff.visible = false;
        soundOn.visible = false;
        exitIcon.visible = false;
        stoneBoard.visible = false;
        controls.visible = false;
        text1.visible = false;
        text2.visible = false;
        text3.visible = false;
        text4.visible = false;
    }
    else {

        this.game.paused = true;
        pauseIcon.visible = true;
        exitIcon.visible = true;
        stoneBoard.visible = true;
        controls.visible = true;
        text1.visible = true;
        text2.visible = true;
        text3.visible = true;
        text4.visible = true;

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
    this.state.start('Menu');
}

