
/////////////////////////////////Create/////////////////////////////////

Game.controlMenu = function (t) {


    ///////////////Restart Menu/////////////
    restartFont = t.game.add.image(t.game.camera.view.width/2, 35, "restartFont");
    restartFont.anchor.setTo(0.5,0.5);
    restartFont.scale.setTo(0.5,0.5);
    restartFont.smoothed = false;
    restartFont.fixedToCamera = true;


	////////////////Selected Menu/////////////
	this.green = true;
	this.yellow = false;
	this.red = false;
	this.blue = false;

	tab = t.game.input.keyboard.addKey(9);
	tab.onDown.add(tabPressed , t);

    //WIP ABSOLUTO POS : BLUE AND GREEN FONT OK

	////////////////Menu Font////////////////
    greenMenu = t.game.add.image(t.game.camera.view.width - 65, t.game.camera.view.height - 85, "greenMenu");
    greenMenu.smoothed = false; //nota : green pos (65,85)
    greenMenu.anchor.x = 0.5;
    greenMenu.anchor.y = 0.5;
    greenMenu.scale.y = 1.2
    greenMenu.fixedToCamera = true;
	this.greenMenuContour = t.game.add.image(t.game.camera.view.width - 65, t.game.camera.view.height - 85, "greyContour");
    this.greenMenuContour.anchor.setTo(0.5,0.5);
    this.greenMenuContour.scale.y = 1.2
    this.greenMenuContour.fixedToCamera = true;
    this.greenMenuContour.visible = true;

    yellowMenu = t.game.add.image(t.game.camera.view.width - 165, t.game.camera.view.height - 85, "yellowMenu");
    yellowMenu.smoothed = false; //nota : yellow pos (165,85)
    yellowMenu.anchor.x = 0.5;
    yellowMenu.anchor.y = 0.5;
    yellowMenu.scale.y = 1.2
    yellowMenu.fixedToCamera = true;
	this.yellowMenuContour = t.game.add.image(t.game.camera.view.width - 165, t.game.camera.view.height - 85, "greyContour");
    this.yellowMenuContour.anchor.setTo(0.5,0.5);
    this.yellowMenuContour.scale.y = 1.2
    this.yellowMenuContour.fixedToCamera = true;
    this.yellowMenuContour.visible = false;

    redMenu = t.game.add.image(t.game.camera.view.width - 265, t.game.camera.view.height - 85, "redMenu");
    redMenu.smoothed = false; //nota : red pos (165,85)
    redMenu.anchor.x = 0.5;
    redMenu.anchor.y = 0.5;
    redMenu.scale.y = 1.2
    redMenu.fixedToCamera = true;
	this.redMenuContour = t.game.add.image(t.game.camera.view.width - 265, t.game.camera.view.height - 85, "greyContour");
    this.redMenuContour.anchor.setTo(0.5,0.5);
    this.redMenuContour.scale.y = 1.2
    this.redMenuContour.fixedToCamera = true;
    this.redMenuContour.visible = false;

    blueMenu = t.game.add.image(t.game.camera.view.width - 365, t.game.camera.view.height - 85, "blueMenu");
    blueMenu.smoothed = false; //nota : blue pos (165,85)
    blueMenu.anchor.x = 0.5;
    blueMenu.anchor.y = 0.5;
    blueMenu.scale.y = 1.2
    blueMenu.fixedToCamera = true;
	this.blueMenuContour = t.game.add.image(t.game.camera.view.width - 365, t.game.camera.view.height - 85, "greyContour");
    this.blueMenuContour.anchor.setTo(0.5,0.5);
    this.blueMenuContour.scale.y = 1.2
    this.blueMenuContour.fixedToCamera = true;
    this.blueMenuContour.visible = false;

    ////////////////Control Inputs////////////////
    greenUpCounter = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    upButton = t.game.input.keyboard.addKey(90);
    upButton.onDown.add(upSelector , t);
    greenUpCounterBox = t.game.add.image(t.game.camera.view.width - 49, t.game.camera.view.height - 120, greenUpCounter);
    greenUpCounterBox.anchor.x = 0.5;
    greenUpCounterBox.anchor.y = 0.5;
    greenUpCounter.text = "0";
    greenUpCounterBox.fixedToCamera = true;

    greenDownCounter = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    downButton = t.game.input.keyboard.addKey(83);
    downButton.onDown.add(downSelector , t);
    greenDownCounterBox = t.game.add.image(t.game.camera.view.width - 49, t.game.camera.view.height - 95, greenDownCounter);
    greenDownCounterBox.anchor.x = 0.5;
    greenDownCounterBox.anchor.y = 0.5;
    greenDownCounter.text = "0";
    greenDownCounterBox.fixedToCamera = true;

    greenLeftCounter = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    leftButton = t.game.input.keyboard.addKey(81);
    leftButton.onDown.add(leftSelector , t);
    greenLeftCounterBox = t.game.add.image(t.game.camera.view.width - 49, t.game.camera.view.height - 70, greenLeftCounter);
    greenLeftCounterBox.anchor.x = 0.5;
    greenLeftCounterBox.anchor.y = 0.5;
    greenLeftCounter.text = "0";
    greenLeftCounterBox.fixedToCamera = true;

    greenRightCounter = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    rightButton = t.game.input.keyboard.addKey(68);
    rightButton.onDown.add(rightSelector , t);
    greenRightCounterBox = t.game.add.image(t.game.camera.view.width - 49, t.game.camera.view.height - 45, greenRightCounter);
    greenRightCounterBox.anchor.x = 0.5;
    greenRightCounterBox.anchor.y = 0.5;
    greenRightCounter.text = "0";
    greenRightCounterBox.fixedToCamera = true;


    yellowUpCounter = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    upButton = t.game.input.keyboard.addKey(90);
    upButton.onDown.add(upSelector , t);
    yellowUpCounterBox = t.game.add.image(t.game.camera.view.width - 149, t.game.camera.view.height - 120, yellowUpCounter);
    yellowUpCounterBox.anchor.x = 0.5;
    yellowUpCounterBox.anchor.y = 0.5;
    yellowUpCounter.text = "0";
    yellowUpCounterBox.fixedToCamera = true;

    yellowDownCounter = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    downButton = t.game.input.keyboard.addKey(83);
    downButton.onDown.add(downSelector , t);
    yellowDownCounterBox = t.game.add.image(t.game.camera.view.width - 149, t.game.camera.view.height - 95, yellowDownCounter);
    yellowDownCounterBox.anchor.x = 0.5;
    yellowDownCounterBox.anchor.y = 0.5;
    yellowDownCounter.text = "0";
    yellowDownCounterBox.fixedToCamera = true;

    yellowLeftCounter = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    leftButton = t.game.input.keyboard.addKey(81);
    leftButton.onDown.add(leftSelector , t);
    yellowLeftCounterBox = t.game.add.image(t.game.camera.view.width - 149, t.game.camera.view.height - 70, yellowLeftCounter);
    yellowLeftCounterBox.anchor.x = 0.5;
    yellowLeftCounterBox.anchor.y = 0.5;
    yellowLeftCounter.text = "0";
    yellowLeftCounterBox.fixedToCamera = true;

    yellowRightCounter = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    rightButton = t.game.input.keyboard.addKey(68);
    rightButton.onDown.add(rightSelector , t);
    yellowRightCounterBox = t.game.add.image(t.game.camera.view.width - 149, t.game.camera.view.height - 45, yellowRightCounter);
    yellowRightCounterBox.anchor.x = 0.5;
    yellowRightCounterBox.anchor.y = 0.5;
    yellowRightCounter.text = "0";
    yellowRightCounterBox.fixedToCamera = true;


    redUpCounter = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    upButton = t.game.input.keyboard.addKey(90);
    upButton.onDown.add(upSelector , t);
    redUpCounterBox = t.game.add.image(t.game.camera.view.width - 249, t.game.camera.view.height - 120, redUpCounter);
    redUpCounterBox.anchor.x = 0.5;
    redUpCounterBox.anchor.y = 0.5;
    redUpCounter.text = "0";
    redUpCounterBox.fixedToCamera = true;

    redDownCounter = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    downButton = t.game.input.keyboard.addKey(83);
    downButton.onDown.add(downSelector , t);
    redDownCounterBox = t.game.add.image(t.game.camera.view.width - 249, t.game.camera.view.height - 95, redDownCounter);
    redDownCounterBox.anchor.x = 0.5;
    redDownCounterBox.anchor.y = 0.5;
    redDownCounter.text = "0";
    redDownCounterBox.fixedToCamera = true;

    redLeftCounter = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    leftButton = t.game.input.keyboard.addKey(81);
    leftButton.onDown.add(leftSelector , t);
    redLeftCounterBox = t.game.add.image(t.game.camera.view.width - 249, t.game.camera.view.height - 70, redLeftCounter);
    redLeftCounterBox.anchor.x = 0.5;
    redLeftCounterBox.anchor.y = 0.5;
    redLeftCounter.text = "0";
    redLeftCounterBox.fixedToCamera = true;

    redRightCounter = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    rightButton = t.game.input.keyboard.addKey(68);
    rightButton.onDown.add(rightSelector , t);
    redRightCounterBox = t.game.add.image(t.game.camera.view.width - 249, t.game.camera.view.height - 45, redRightCounter);
    redRightCounterBox.anchor.x = 0.5;
    redRightCounterBox.anchor.y = 0.5;
    redRightCounter.text = "0";
    redRightCounterBox.fixedToCamera = true;


    blueUpCounter = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    upButton = t.game.input.keyboard.addKey(90);
    upButton.onDown.add(upSelector , t);
    blueUpCounterBox = t.game.add.image(t.game.camera.view.width - 349, t.game.camera.view.height - 120, blueUpCounter);
    blueUpCounterBox.anchor.x = 0.5;
    blueUpCounterBox.anchor.y = 0.5;
    blueUpCounter.text = "0";
    blueUpCounterBox.fixedToCamera = true;

    blueDownCounter = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    downButton = t.game.input.keyboard.addKey(83);
    downButton.onDown.add(downSelector , t);
    blueDownCounterBox = t.game.add.image(t.game.camera.view.width - 349, t.game.camera.view.height - 95, blueDownCounter);
    blueDownCounterBox.anchor.x = 0.5;
    blueDownCounterBox.anchor.y = 0.5;
    blueDownCounter.text = "0";
    blueDownCounterBox.fixedToCamera = true;

    blueLeftCounter = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    leftButton = t.game.input.keyboard.addKey(81);
    leftButton.onDown.add(leftSelector , t);
    blueLeftCounterBox = t.game.add.image(t.game.camera.view.width - 349, t.game.camera.view.height - 70, blueLeftCounter);
    blueLeftCounterBox.anchor.x = 0.5;
    blueLeftCounterBox.anchor.y = 0.5;
    blueLeftCounter.text = "0";
    blueLeftCounterBox.fixedToCamera = true;

    blueRightCounter = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    rightButton = t.game.input.keyboard.addKey(68);
    rightButton.onDown.add(rightSelector , t);
    blueRightCounterBox = t.game.add.image(t.game.camera.view.width - 349, t.game.camera.view.height - 45, blueRightCounter);
    blueRightCounterBox.anchor.x = 0.5;
    blueRightCounterBox.anchor.y = 0.5;
    blueRightCounter.text = "0";
    blueRightCounterBox.fixedToCamera = true;

    ////////////////Control Arrows////////////////
    greenUpArrow = t.game.add.image(t.game.camera.view.width - 73, t.game.camera.view.height - 122, "upArrow")
    greenUpArrow.anchor.x = 0.5;
    greenUpArrow.anchor.y = 0.5;
    greenUpArrow.scale.x = 0.5;
    greenUpArrow.scale.y = 0.5;
    greenUpArrow.fixedToCamera = true;
    greenUpArrow.smoothed = false;

	greenDownArrow = t.game.add.image(t.game.camera.view.width - 73, t.game.camera.view.height - 97, "downArrow")
    greenDownArrow.anchor.x = 0.5;
    greenDownArrow.anchor.y = 0.5;
    greenDownArrow.scale.x = 0.5;
    greenDownArrow.scale.y = 0.5;
    greenDownArrow.fixedToCamera = true;
    greenDownArrow.smoothed = false;

    greenLeftArrow = t.game.add.image(t.game.camera.view.width - 73, t.game.camera.view.height - 72, "leftArrow")
    greenLeftArrow.anchor.x = 0.5;
    greenLeftArrow.anchor.y = 0.5;
    greenLeftArrow.scale.x = 0.5;
    greenLeftArrow.scale.y = 0.5;
    greenLeftArrow.fixedToCamera = true;
    greenLeftArrow.smoothed = false;

    greenRightArrow = t.game.add.image(t.game.camera.view.width - 73, t.game.camera.view.height - 47, "rightArrow")
    greenRightArrow.anchor.x = 0.5;
    greenRightArrow.anchor.y = 0.5;
    greenRightArrow.scale.x = 0.5;
    greenRightArrow.scale.y = 0.5;
    greenRightArrow.fixedToCamera = true;
    greenRightArrow.smoothed = false;


    yellowUpArrow = t.game.add.image(t.game.camera.view.width - 173, t.game.camera.view.height - 122, "upArrow")
    yellowUpArrow.anchor.x = 0.5;
    yellowUpArrow.anchor.y = 0.5;
    yellowUpArrow.scale.x = 0.5;
    yellowUpArrow.scale.y = 0.5;
    yellowUpArrow.fixedToCamera = true;
    yellowUpArrow.smoothed = false;

	yellowDownArrow = t.game.add.image(t.game.camera.view.width - 173, t.game.camera.view.height - 97, "downArrow")
    yellowDownArrow.anchor.x = 0.5;
    yellowDownArrow.anchor.y = 0.5;
    yellowDownArrow.scale.x = 0.5;
    yellowDownArrow.scale.y = 0.5;
    yellowDownArrow.fixedToCamera = true;
    yellowDownArrow.smoothed = false;

    yellowLeftArrow = t.game.add.image(t.game.camera.view.width - 173, t.game.camera.view.height - 72, "leftArrow")
    yellowLeftArrow.anchor.x = 0.5;
    yellowLeftArrow.anchor.y = 0.5;
    yellowLeftArrow.scale.x = 0.5;
    yellowLeftArrow.scale.y = 0.5;
    yellowLeftArrow.fixedToCamera = true;
    yellowLeftArrow.smoothed = false;

    yellowRightArrow = t.game.add.image(t.game.camera.view.width - 173, t.game.camera.view.height - 47, "rightArrow")
    yellowRightArrow.anchor.x = 0.5;
    yellowRightArrow.anchor.y = 0.5;
    yellowRightArrow.scale.x = 0.5;
    yellowRightArrow.scale.y = 0.5;
    yellowRightArrow.fixedToCamera = true;
    yellowRightArrow.smoothed = false;


	redUpArrow = t.game.add.image(t.game.camera.view.width - 273, t.game.camera.view.height - 122, "upArrow")
    redUpArrow.anchor.x = 0.5;
    redUpArrow.anchor.y = 0.5;
    redUpArrow.scale.x = 0.5;
    redUpArrow.scale.y = 0.5;
    redUpArrow.fixedToCamera = true;
    redUpArrow.smoothed = false;

	redDownArrow = t.game.add.image(t.game.camera.view.width - 273, t.game.camera.view.height - 97, "downArrow")
    redDownArrow.anchor.x = 0.5;
    redDownArrow.anchor.y = 0.5;
    redDownArrow.scale.x = 0.5;
    redDownArrow.scale.y = 0.5;
    redDownArrow.fixedToCamera = true;
    redDownArrow.smoothed = false;

    redLeftArrow = t.game.add.image(t.game.camera.view.width - 273, t.game.camera.view.height - 72, "leftArrow")
    redLeftArrow.anchor.x = 0.5;
    redLeftArrow.anchor.y = 0.5;
    redLeftArrow.scale.x = 0.5;
    redLeftArrow.scale.y = 0.5;
    redLeftArrow.fixedToCamera = true;
    redLeftArrow.smoothed = false;

    redRightArrow = t.game.add.image(t.game.camera.view.width - 273, t.game.camera.view.height - 47, "rightArrow")
    redRightArrow.anchor.x = 0.5;
    redRightArrow.anchor.y = 0.5;
    redRightArrow.scale.x = 0.5;
    redRightArrow.scale.y = 0.5;
    redRightArrow.fixedToCamera = true;
    redRightArrow.smoothed = false;


    blueUpArrow = t.game.add.image(t.game.camera.view.width - 373, t.game.camera.view.height - 122, "upArrow")
    blueUpArrow.anchor.x = 0.5;
    blueUpArrow.anchor.y = 0.5;
    blueUpArrow.scale.x = 0.5;
    blueUpArrow.scale.y = 0.5;
    blueUpArrow.fixedToCamera = true;
    blueUpArrow.smoothed = false;

	blueDownArrow = t.game.add.image(t.game.camera.view.width - 373, t.game.camera.view.height - 97, "downArrow")
    blueDownArrow.anchor.x = 0.5;
    blueDownArrow.anchor.y = 0.5;
    blueDownArrow.scale.x = 0.5;
    blueDownArrow.scale.y = 0.5;
    blueDownArrow.fixedToCamera = true;
    blueDownArrow.smoothed = false;

    blueLeftArrow = t.game.add.image(t.game.camera.view.width - 373, t.game.camera.view.height - 72, "leftArrow")
    blueLeftArrow.anchor.x = 0.5;
    blueLeftArrow.anchor.y = 0.5;
    blueLeftArrow.scale.x = 0.5;
    blueLeftArrow.scale.y = 0.5;
    blueLeftArrow.fixedToCamera = true;
    blueLeftArrow.smoothed = false;

    blueRightArrow = t.game.add.image(t.game.camera.view.width - 373, t.game.camera.view.height - 47, "rightArrow")
    blueRightArrow.anchor.x = 0.5;
    blueRightArrow.anchor.y = 0.5;
    blueRightArrow.scale.x = 0.5;
    blueRightArrow.scale.y = 0.5;
    blueRightArrow.fixedToCamera = true;
    blueRightArrow.smoothed = false;
}

/////////////////////////////////Switch focus/////////////////////////////////

function tabPressed(){

	if(this.controlMenu.green === true){
		this.controlMenu.green = false;
		this.controlMenu.greenMenuContour.visible = false;
		this.controlMenu.yellow = true;
		this.controlMenu.yellowMenuContour.visible = true;
	}
	else if(this.controlMenu.yellow === true){
		this.controlMenu.yellow = false;
		this.controlMenu.yellowMenuContour.visible = false;
		this.controlMenu.red = true;
		this.controlMenu.redMenuContour.visible = true;
	}
	else if(this.controlMenu.red === true){
		this.controlMenu.red = false;
		this.controlMenu.redMenuContour.visible = false;
		this.controlMenu.blue = true;
		this.controlMenu.blueMenuContour.visible = true;
	}
	else if(this.controlMenu.blue === true){
		this.controlMenu.blue = false;
		this.controlMenu.blueMenuContour.visible = false;
		this.controlMenu.green = true;
		this.controlMenu.greenMenuContour.visible = true;
	}
}


////////////////Selectors////////////////

function upSelector(){
	
	if(this.controlMenu.green === true){
		greenUpPressed(this);
	}
	else if(this.controlMenu.yellow === true){
		yellowUpPressed(this);
	}
	else if(this.controlMenu.red === true){
		redUpPressed(this);
	}
	else if(this.controlMenu.blue === true){
		blueUpPressed(this);
	}

}

function downSelector(){

	if(this.controlMenu.green === true){
		greenDownPressed(this);
	}
	else if(this.controlMenu.yellow === true){
		yellowDownPressed(this);
	}
	else if(this.controlMenu.red === true){
		redDownPressed(this);
	}
	else if(this.controlMenu.blue === true){
		blueDownPressed(this);
	}

}

function leftSelector(){

	if(this.controlMenu.green === true){
		greenLeftPressed(this);
	}
	else if(this.controlMenu.yellow === true){
		yellowLeftPressed(this);
	}
	else if(this.controlMenu.red === true){
		redLeftPressed(this);
	}
	else if(this.controlMenu.blue === true){
		blueLeftPressed(this);
	}

}

function rightSelector(){

	if(this.controlMenu.green === true){
		greenRightPressed(this);
	}
	else if(this.controlMenu.yellow === true){
		yellowRightPressed(this);
	}
	else if(this.controlMenu.red === true){
		redRightPressed(this);
	}
	else if(this.controlMenu.blue === true){
		blueRightPressed(this);
	}

}

////////////////Trigerred Functions////////////////

function greenUpPressed(t){

    if(t.player.stop){
        greenUpArrow.scale.x = 0.6;
        greenUpArrow.scale.y = 0.6;
        t.game.time.events.add(200, greenUpArrowScale);

        if(altKey.isDown && parseInt(greenUpCounter.text) != 0){
            greenUpCounter.text = (parseInt(greenUpCounter.text) - 1).toString();
        }
        else if(parseInt(greenUpCounter.text) < 15 && !altKey.isDown){
            greenUpCounter.text = (parseInt(greenUpCounter.text) + 1).toString();
        }
    }
}

function greenDownPressed(t){

    if(t.player.stop){
        greenDownArrow.scale.x = 0.6;
        greenDownArrow.scale.y = 0.6;
        t.game.time.events.add(200, greenDownArrowScale);

        if(altKey.isDown && parseInt(greenDownCounter.text) != 0){
            greenDownCounter.text = (parseInt(greenDownCounter.text) - 1).toString();
        }
        else if(parseInt(greenDownCounter.text) < 15 && !altKey.isDown){
            greenDownCounter.text = (parseInt(greenDownCounter.text) + 1).toString();
    	}
    }
}

function greenLeftPressed(t){

    if(t.player.stop){
        greenLeftArrow.scale.x = 0.6;
        greenLeftArrow.scale.y = 0.6;
        t.game.time.events.add(200, greenLeftArrowScale);

        if(altKey.isDown && parseInt(greenLeftCounter.text) != 0){
            greenLeftCounter.text = (parseInt(greenLeftCounter.text) - 1).toString();
        }
        else if(parseInt(greenLeftCounter.text) < 15 && !altKey.isDown){
            greenLeftCounter.text = (parseInt(greenLeftCounter.text) + 1).toString();
        }
    }
}

function greenRightPressed(t){

    if(t.player.stop){
        greenRightArrow.scale.x = 0.6;
        greenRightArrow.scale.y = 0.6;
        t.game.time.events.add(200, greenRightArrowScale);

        if(altKey.isDown && parseInt(greenRightCounter.text) != 0){
            greenRightCounter.text = (parseInt(greenRightCounter.text) - 1).toString();
        }
        else if(parseInt(greenRightCounter.text) < 15 && !altKey.isDown){
            greenRightCounter.text = (parseInt(greenRightCounter.text) + 1).toString();
        }
    }
}


function yellowUpPressed(t){

    if(t.player.stop){
        yellowUpArrow.scale.x = 0.6;
        yellowUpArrow.scale.y = 0.6;
        t.game.time.events.add(200, yellowUpArrowScale);

        if(altKey.isDown && parseInt(yellowUpCounter.text) != 0){
            yellowUpCounter.text = (parseInt(yellowUpCounter.text) - 1).toString();
        }
        else if(parseInt(yellowUpCounter.text) < 15 && !altKey.isDown){
            yellowUpCounter.text = (parseInt(yellowUpCounter.text) + 1).toString();
        }
    }
}

function yellowDownPressed(t){

    if(t.player.stop){
        yellowDownArrow.scale.x = 0.6;
        yellowDownArrow.scale.y = 0.6;
        t.game.time.events.add(200, yellowDownArrowScale);

        if(altKey.isDown && parseInt(yellowDownCounter.text) != 0){
            yellowDownCounter.text = (parseInt(yellowDownCounter.text) - 1).toString();
        }
        else if(parseInt(yellowDownCounter.text) < 15 && !altKey.isDown){
            yellowDownCounter.text = (parseInt(yellowDownCounter.text) + 1).toString();
    	}
    }
}

function yellowLeftPressed(t){

    if(t.player.stop){
        yellowLeftArrow.scale.x = 0.6;
        yellowLeftArrow.scale.y = 0.6;
        t.game.time.events.add(200, yellowLeftArrowScale);

        if(altKey.isDown && parseInt(yellowLeftCounter.text) != 0){
            yellowLeftCounter.text = (parseInt(yellowLeftCounter.text) - 1).toString();
        }
        else if(parseInt(yellowLeftCounter.text) < 15 && !altKey.isDown){
            yellowLeftCounter.text = (parseInt(yellowLeftCounter.text) + 1).toString();
        }
    }
}

function yellowRightPressed(t){

    if(t.player.stop){
        yellowRightArrow.scale.x = 0.6;
        yellowRightArrow.scale.y = 0.6;
        t.game.time.events.add(200, yellowRightArrowScale);

        if(altKey.isDown && parseInt(yellowRightCounter.text) != 0){
            yellowRightCounter.text = (parseInt(yellowRightCounter.text) - 1).toString();
        }
        else if(parseInt(yellowRightCounter.text) < 15 && !altKey.isDown){
            yellowRightCounter.text = (parseInt(yellowRightCounter.text) + 1).toString();
        }
    }
}


function redUpPressed(t){

    if(t.player.stop){
        redUpArrow.scale.x = 0.6;
        redUpArrow.scale.y = 0.6;
        t.game.time.events.add(200, redUpArrowScale);

        if(altKey.isDown && parseInt(redUpCounter.text) != 0){
            redUpCounter.text = (parseInt(redUpCounter.text) - 1).toString();
        }
        else if(parseInt(redUpCounter.text) < 15 && !altKey.isDown){
            redUpCounter.text = (parseInt(redUpCounter.text) + 1).toString();
        }
    }
}

function redDownPressed(t){

    if(t.player.stop){
        redDownArrow.scale.x = 0.6;
        redDownArrow.scale.y = 0.6;
        t.game.time.events.add(200, redDownArrowScale);

        if(altKey.isDown && parseInt(redDownCounter.text) != 0){
            redDownCounter.text = (parseInt(redDownCounter.text) - 1).toString();
        }
        else if(parseInt(redDownCounter.text) < 15 && !altKey.isDown){
            redDownCounter.text = (parseInt(redDownCounter.text) + 1).toString();
    	}
    }
}

function redLeftPressed(t){

    if(t.player.stop){
        redLeftArrow.scale.x = 0.6;
        redLeftArrow.scale.y = 0.6;
        t.game.time.events.add(200, redLeftArrowScale);

        if(altKey.isDown && parseInt(redLeftCounter.text) != 0){
            redLeftCounter.text = (parseInt(redLeftCounter.text) - 1).toString();
        }
        else if(parseInt(redLeftCounter.text) < 15 && !altKey.isDown){
            redLeftCounter.text = (parseInt(redLeftCounter.text) + 1).toString();
        }
    }
}

function redRightPressed(t){

    if(t.player.stop){
        redRightArrow.scale.x = 0.6;
        redRightArrow.scale.y = 0.6;
        t.game.time.events.add(200, redRightArrowScale);

        if(altKey.isDown && parseInt(redRightCounter.text) != 0){
            redRightCounter.text = (parseInt(redRightCounter.text) - 1).toString();
        }
        else if(parseInt(redRightCounter.text) < 15 && !altKey.isDown){
            redRightCounter.text = (parseInt(redRightCounter.text) + 1).toString();
        }
    }
}


function blueUpPressed(t){

    if(t.player.stop){
        blueUpArrow.scale.x = 0.6;
        blueUpArrow.scale.y = 0.6;
        t.game.time.events.add(200, blueUpArrowScale);

        if(altKey.isDown && parseInt(blueUpCounter.text) != 0){
            blueUpCounter.text = (parseInt(blueUpCounter.text) - 1).toString();
        }
        else if(parseInt(blueUpCounter.text) < 15 && !altKey.isDown){
            blueUpCounter.text = (parseInt(blueUpCounter.text) + 1).toString();
        }
    }
}

function blueDownPressed(t){

    if(t.player.stop){
        blueDownArrow.scale.x = 0.6;
        blueDownArrow.scale.y = 0.6;
        t.game.time.events.add(200, blueDownArrowScale);

        if(altKey.isDown && parseInt(blueDownCounter.text) != 0){
            blueDownCounter.text = (parseInt(blueDownCounter.text) - 1).toString();
        }
        else if(parseInt(blueDownCounter.text) < 15 && !altKey.isDown){
            blueDownCounter.text = (parseInt(blueDownCounter.text) + 1).toString();
    	}
    }
}

function blueLeftPressed(t){

    if(t.player.stop){
        blueLeftArrow.scale.x = 0.6;
        blueLeftArrow.scale.y = 0.6;
        t.game.time.events.add(200, blueLeftArrowScale);

        if(altKey.isDown && parseInt(blueLeftCounter.text) != 0){
            blueLeftCounter.text = (parseInt(blueLeftCounter.text) - 1).toString();
        }
        else if(parseInt(blueLeftCounter.text) < 15 && !altKey.isDown){
            blueLeftCounter.text = (parseInt(blueLeftCounter.text) + 1).toString();
        }
    }
}

function blueRightPressed(t){

    if(t.player.stop){
        blueRightArrow.scale.x = 0.6;
        blueRightArrow.scale.y = 0.6;
        t.game.time.events.add(200, blueRightArrowScale);

        if(altKey.isDown && parseInt(blueRightCounter.text) != 0){
            blueRightCounter.text = (parseInt(blueRightCounter.text) - 1).toString();
        }
        else if(parseInt(blueRightCounter.text) < 15 && !altKey.isDown){
            blueRightCounter.text = (parseInt(blueRightCounter.text) + 1).toString();
        }
    }
}

////////////////Arrow's Scaling Functions////////////////

function greenUpArrowScale(){
    greenUpArrow.scale.x = 0.5;
    greenUpArrow.scale.y = 0.5;
}

function greenDownArrowScale(){
    greenDownArrow.scale.x = 0.5;
    greenDownArrow.scale.y = 0.5;
}

function greenLeftArrowScale(){
    greenLeftArrow.scale.x = 0.5;
    greenLeftArrow.scale.y = 0.5;
}

function greenRightArrowScale(){
    greenRightArrow.scale.x = 0.5;
    greenRightArrow.scale.y = 0.5;
}


function yellowUpArrowScale(){
    yellowUpArrow.scale.x = 0.5;
    yellowUpArrow.scale.y = 0.5;
}

function yellowDownArrowScale(){
    yellowDownArrow.scale.x = 0.5;
    yellowDownArrow.scale.y = 0.5;
}

function yellowLeftArrowScale(){
    yellowLeftArrow.scale.x = 0.5;
    yellowLeftArrow.scale.y = 0.5;
}

function yellowRightArrowScale(){
    yellowRightArrow.scale.x = 0.5;
    yellowRightArrow.scale.y = 0.5;
}


function redUpArrowScale(){
    redUpArrow.scale.x = 0.5;
    redUpArrow.scale.y = 0.5;
}

function redDownArrowScale(){
    redDownArrow.scale.x = 0.5;
    redDownArrow.scale.y = 0.5;
}

function redLeftArrowScale(){
    redLeftArrow.scale.x = 0.5;
    redLeftArrow.scale.y = 0.5;
}

function redRightArrowScale(){
    redRightArrow.scale.x = 0.5;
    redRightArrow.scale.y = 0.5;
}


function blueUpArrowScale(){
    blueUpArrow.scale.x = 0.5;
    blueUpArrow.scale.y = 0.5;
}

function blueDownArrowScale(){
    blueDownArrow.scale.x = 0.5;
    blueDownArrow.scale.y = 0.5;
}

function blueLeftArrowScale(){
    blueLeftArrow.scale.x = 0.5;
    blueLeftArrow.scale.y = 0.5;
}

function blueRightArrowScale(){
    blueRightArrow.scale.x = 0.5;
    blueRightArrow.scale.y = 0.5;
}