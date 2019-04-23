
/////////////////////////////////Create/////////////////////////////////

Game.controlMenu2 = function (t) {

	////////////////Selected Menu2/////////////
	this.green = true;
	this.yellow = false;
	this.red = false;
	this.blue = false;

	switchKey = t.game.input.keyboard.addKey(107);
	switchKey.onDown.add(switchMenu2 , t);

    /////////////////////J2/////////////////////
    J2Font = t.game.add.image(65, t.game.camera.view.height - 175, "restartFont");
    J2Font.anchor.setTo(0.5,0.5);
    J2Font.scale.setTo(0.2,0.5);
    J2Font.fixedToCamera = true;
    var J2Style = { font: "20px Times New Roman", fill: "#f11"};
    J2 = t.game.add.text(65, t.game.camera.view.height - 165, "J2", J2Style);
    J2.anchor.setTo(0.5,0.5);
    J2.scale.setTo(1.5,1.5);
    J2.fixedToCamera = true;
    J2.smoothed = false;

	////////////////Menu2 Font////////////////
    greenMenu2 = t.game.add.image(65, t.game.camera.view.height - 85, "greenMenu");
    greenMenu2.smoothed = false; //nota : green pos (65,85)
    greenMenu2.anchor.x = 0.5;
    greenMenu2.anchor.y = 0.5;
    greenMenu2.scale.y = 1.2
    greenMenu2.fixedToCamera = true;
	this.greenMenu2Contour = t.game.add.image(65, t.game.camera.view.height - 85, "greyContour");
    this.greenMenu2Contour.anchor.setTo(0.5,0.5);
    this.greenMenu2Contour.scale.y = 1.2
    this.greenMenu2Contour.fixedToCamera = true;
    this.greenMenu2Contour.visible = true;

    yellowMenu2 = t.game.add.image(165, t.game.camera.view.height - 85, "yellowMenu");
    yellowMenu2.smoothed = false; //nota : yellow pos (165,85)
    yellowMenu2.anchor.x = 0.5;
    yellowMenu2.anchor.y = 0.5;
    yellowMenu2.scale.y = 1.2
    yellowMenu2.fixedToCamera = true;
	this.yellowMenu2Contour = t.game.add.image(165, t.game.camera.view.height - 85, "greyContour");
    this.yellowMenu2Contour.anchor.setTo(0.5,0.5);
    this.yellowMenu2Contour.scale.y = 1.2
    this.yellowMenu2Contour.fixedToCamera = true;
    this.yellowMenu2Contour.visible = false;

    redMenu2 = t.game.add.image(265, t.game.camera.view.height - 85, "redMenu");
    redMenu2.smoothed = false; //nota : red pos (165,85)
    redMenu2.anchor.x = 0.5;
    redMenu2.anchor.y = 0.5;
    redMenu2.scale.y = 1.2
    redMenu2.fixedToCamera = true;
	this.redMenu2Contour = t.game.add.image(265, t.game.camera.view.height - 85, "greyContour");
    this.redMenu2Contour.anchor.setTo(0.5,0.5);
    this.redMenu2Contour.scale.y = 1.2
    this.redMenu2Contour.fixedToCamera = true;
    this.redMenu2Contour.visible = false;

    blueMenu2 = t.game.add.image(365, t.game.camera.view.height - 85, "blueMenu");
    blueMenu2.smoothed = false; //nota : blue pos (165,85)
    blueMenu2.anchor.x = 0.5;
    blueMenu2.anchor.y = 0.5;
    blueMenu2.scale.y = 1.2
    blueMenu2.fixedToCamera = true;
	this.blueMenu2Contour = t.game.add.image(365, t.game.camera.view.height - 85, "greyContour");
    this.blueMenu2Contour.anchor.setTo(0.5,0.5);
    this.blueMenu2Contour.scale.y = 1.2
    this.blueMenu2Contour.fixedToCamera = true;
    this.blueMenu2Contour.visible = false;

    ////////////////Control Inputs////////////////
    greenUpCounter2 = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    upButton2 = t.game.input.keyboard.addKey(104);
    upButton2.onDown.add(upSelector2 , t);
    greenUpCounter2Box = t.game.add.image(49, t.game.camera.view.height - 120, greenUpCounter2);
    greenUpCounter2Box.anchor.x = 0.5;
    greenUpCounter2Box.anchor.y = 0.5;
    greenUpCounter2.text = "0";
    greenUpCounter2Box.fixedToCamera = true;

    greenDownCounter2 = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    downButton2 = t.game.input.keyboard.addKey(101);
    downButton2.onDown.add(downSelector2 , t);
    greenDownCounter2Box = t.game.add.image(49, t.game.camera.view.height - 95, greenDownCounter2);
    greenDownCounter2Box.anchor.x = 0.5;
    greenDownCounter2Box.anchor.y = 0.5;
    greenDownCounter2.text = "0";
    greenDownCounter2Box.fixedToCamera = true;

    greenLeftCounter2 = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    leftButton2 = t.game.input.keyboard.addKey(100);
    leftButton2.onDown.add(leftSelector2 , t);
    greenLeftCounter2Box = t.game.add.image(49, t.game.camera.view.height - 70, greenLeftCounter2);
    greenLeftCounter2Box.anchor.x = 0.5;
    greenLeftCounter2Box.anchor.y = 0.5;
    greenLeftCounter2.text = "0";
    greenLeftCounter2Box.fixedToCamera = true;

    greenRightCounter2 = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    rightButton2 = t.game.input.keyboard.addKey(102);
    rightButton2.onDown.add(rightSelector2 , t);
    greenRightCounter2Box = t.game.add.image(49, t.game.camera.view.height - 45, greenRightCounter2);
    greenRightCounter2Box.anchor.x = 0.5;
    greenRightCounter2Box.anchor.y = 0.5;
    greenRightCounter2.text = "0";
    greenRightCounter2Box.fixedToCamera = true;


    yellowUpCounter2 = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    upButton2 = t.game.input.keyboard.addKey(104);
    upButton2.onDown.add(upSelector2 , t);
    yellowUpCounter2Box = t.game.add.image(149, t.game.camera.view.height - 120, yellowUpCounter2);
    yellowUpCounter2Box.anchor.x = 0.5;
    yellowUpCounter2Box.anchor.y = 0.5;
    yellowUpCounter2.text = "0";
    yellowUpCounter2Box.fixedToCamera = true;

    yellowDownCounter2 = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    downButton2 = t.game.input.keyboard.addKey(101);
    downButton2.onDown.add(downSelector2 , t);
    yellowDownCounter2Box = t.game.add.image(149, t.game.camera.view.height - 95, yellowDownCounter2);
    yellowDownCounter2Box.anchor.x = 0.5;
    yellowDownCounter2Box.anchor.y = 0.5;
    yellowDownCounter2.text = "0";
    yellowDownCounter2Box.fixedToCamera = true;

    yellowLeftCounter2 = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    leftButton2 = t.game.input.keyboard.addKey(100);
    leftButton2.onDown.add(leftSelector2 , t);
    yellowLeftCounter2Box = t.game.add.image(149, t.game.camera.view.height - 70, yellowLeftCounter2);
    yellowLeftCounter2Box.anchor.x = 0.5;
    yellowLeftCounter2Box.anchor.y = 0.5;
    yellowLeftCounter2.text = "0";
    yellowLeftCounter2Box.fixedToCamera = true;

    yellowRightCounter2 = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    rightButton2 = t.game.input.keyboard.addKey(102);
    rightButton2.onDown.add(rightSelector2 , t);
    yellowRightCounter2Box = t.game.add.image(149, t.game.camera.view.height - 45, yellowRightCounter2);
    yellowRightCounter2Box.anchor.x = 0.5;
    yellowRightCounter2Box.anchor.y = 0.5;
    yellowRightCounter2.text = "0";
    yellowRightCounter2Box.fixedToCamera = true;


    redUpCounter2 = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    upButton2 = t.game.input.keyboard.addKey(104);
    upButton2.onDown.add(upSelector2 , t);
    redUpCounter2Box = t.game.add.image(249, t.game.camera.view.height - 120, redUpCounter2);
    redUpCounter2Box.anchor.x = 0.5;
    redUpCounter2Box.anchor.y = 0.5;
    redUpCounter2.text = "0";
    redUpCounter2Box.fixedToCamera = true;

    redDownCounter2 = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    downButton2 = t.game.input.keyboard.addKey(101);
    downButton2.onDown.add(downSelector2 , t);
    redDownCounter2Box = t.game.add.image(249, t.game.camera.view.height - 95, redDownCounter2);
    redDownCounter2Box.anchor.x = 0.5;
    redDownCounter2Box.anchor.y = 0.5;
    redDownCounter2.text = "0";
    redDownCounter2Box.fixedToCamera = true;

    redLeftCounter2 = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    leftButton2 = t.game.input.keyboard.addKey(100);
    leftButton2.onDown.add(leftSelector2 , t);
    redLeftCounter2Box = t.game.add.image(249, t.game.camera.view.height - 70, redLeftCounter2);
    redLeftCounter2Box.anchor.x = 0.5;
    redLeftCounter2Box.anchor.y = 0.5;
    redLeftCounter2.text = "0";
    redLeftCounter2Box.fixedToCamera = true;

    redRightCounter2 = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    rightButton2 = t.game.input.keyboard.addKey(102);
    rightButton2.onDown.add(rightSelector2 , t);
    redRightCounter2Box = t.game.add.image(249, t.game.camera.view.height - 45, redRightCounter2);
    redRightCounter2Box.anchor.x = 0.5;
    redRightCounter2Box.anchor.y = 0.5;
    redRightCounter2.text = "0";
    redRightCounter2Box.fixedToCamera = true;


    blueUpCounter2 = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    upButton2 = t.game.input.keyboard.addKey(104);
    upButton2.onDown.add(upSelector2 , t);
    blueUpCounter2Box = t.game.add.image(349, t.game.camera.view.height - 120, blueUpCounter2);
    blueUpCounter2Box.anchor.x = 0.5;
    blueUpCounter2Box.anchor.y = 0.5;
    blueUpCounter2.text = "0";
    blueUpCounter2Box.fixedToCamera = true;

    blueDownCounter2 = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    downButton2 = t.game.input.keyboard.addKey(101);
    downButton2.onDown.add(downSelector2 , t);
    blueDownCounter2Box = t.game.add.image(349, t.game.camera.view.height - 95, blueDownCounter2);
    blueDownCounter2Box.anchor.x = 0.5;
    blueDownCounter2Box.anchor.y = 0.5;
    blueDownCounter2.text = "0";
    blueDownCounter2Box.fixedToCamera = true;

    blueLeftCounter2 = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    leftButton2 = t.game.input.keyboard.addKey(100);
    leftButton2.onDown.add(leftSelector2 , t);
    blueLeftCounter2Box = t.game.add.image(349, t.game.camera.view.height - 70, blueLeftCounter2);
    blueLeftCounter2Box.anchor.x = 0.5;
    blueLeftCounter2Box.anchor.y = 0.5;
    blueLeftCounter2.text = "0";
    blueLeftCounter2Box.fixedToCamera = true;

    blueRightCounter2 = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    rightButton2 = t.game.input.keyboard.addKey(102);
    rightButton2.onDown.add(rightSelector2 , t);
    blueRightCounter2Box = t.game.add.image(349, t.game.camera.view.height - 45, blueRightCounter2);
    blueRightCounter2Box.anchor.x = 0.5;
    blueRightCounter2Box.anchor.y = 0.5;
    blueRightCounter2.text = "0";
    blueRightCounter2Box.fixedToCamera = true;

    ////////////////Control Arrows////////////////
    greenUpArrow2 = t.game.add.image(73, t.game.camera.view.height - 122, "upArrow")
    greenUpArrow2.anchor.x = 0.5;
    greenUpArrow2.anchor.y = 0.5;
    greenUpArrow2.scale.x = 0.5;
    greenUpArrow2.scale.y = 0.5;
    greenUpArrow2.fixedToCamera = true;
    greenUpArrow2.smoothed = false;

	greenDownArrow2 = t.game.add.image(73, t.game.camera.view.height - 97, "downArrow")
    greenDownArrow2.anchor.x = 0.5;
    greenDownArrow2.anchor.y = 0.5;
    greenDownArrow2.scale.x = 0.5;
    greenDownArrow2.scale.y = 0.5;
    greenDownArrow2.fixedToCamera = true;
    greenDownArrow2.smoothed = false;

    greenLeftArrow2 = t.game.add.image(73, t.game.camera.view.height - 72, "leftArrow")
    greenLeftArrow2.anchor.x = 0.5;
    greenLeftArrow2.anchor.y = 0.5;
    greenLeftArrow2.scale.x = 0.5;
    greenLeftArrow2.scale.y = 0.5;
    greenLeftArrow2.fixedToCamera = true;
    greenLeftArrow2.smoothed = false;

    greenRightArrow2 = t.game.add.image(73, t.game.camera.view.height - 47, "rightArrow")
    greenRightArrow2.anchor.x = 0.5;
    greenRightArrow2.anchor.y = 0.5;
    greenRightArrow2.scale.x = 0.5;
    greenRightArrow2.scale.y = 0.5;
    greenRightArrow2.fixedToCamera = true;
    greenRightArrow2.smoothed = false;


    yellowUpArrow2 = t.game.add.image(173, t.game.camera.view.height - 122, "upArrow")
    yellowUpArrow2.anchor.x = 0.5;
    yellowUpArrow2.anchor.y = 0.5;
    yellowUpArrow2.scale.x = 0.5;
    yellowUpArrow2.scale.y = 0.5;
    yellowUpArrow2.fixedToCamera = true;
    yellowUpArrow2.smoothed = false;

	yellowDownArrow2 = t.game.add.image(173, t.game.camera.view.height - 97, "downArrow")
    yellowDownArrow2.anchor.x = 0.5;
    yellowDownArrow2.anchor.y = 0.5;
    yellowDownArrow2.scale.x = 0.5;
    yellowDownArrow2.scale.y = 0.5;
    yellowDownArrow2.fixedToCamera = true;
    yellowDownArrow2.smoothed = false;

    yellowLeftArrow2 = t.game.add.image(173, t.game.camera.view.height - 72, "leftArrow")
    yellowLeftArrow2.anchor.x = 0.5;
    yellowLeftArrow2.anchor.y = 0.5;
    yellowLeftArrow2.scale.x = 0.5;
    yellowLeftArrow2.scale.y = 0.5;
    yellowLeftArrow2.fixedToCamera = true;
    yellowLeftArrow2.smoothed = false;

    yellowRightArrow2 = t.game.add.image(173, t.game.camera.view.height - 47, "rightArrow")
    yellowRightArrow2.anchor.x = 0.5;
    yellowRightArrow2.anchor.y = 0.5;
    yellowRightArrow2.scale.x = 0.5;
    yellowRightArrow2.scale.y = 0.5;
    yellowRightArrow2.fixedToCamera = true;
    yellowRightArrow2.smoothed = false;


	redUpArrow2 = t.game.add.image(273, t.game.camera.view.height - 122, "upArrow")
    redUpArrow2.anchor.x = 0.5;
    redUpArrow2.anchor.y = 0.5;
    redUpArrow2.scale.x = 0.5;
    redUpArrow2.scale.y = 0.5;
    redUpArrow2.fixedToCamera = true;
    redUpArrow2.smoothed = false;

	redDownArrow2 = t.game.add.image(273, t.game.camera.view.height - 97, "downArrow")
    redDownArrow2.anchor.x = 0.5;
    redDownArrow2.anchor.y = 0.5;
    redDownArrow2.scale.x = 0.5;
    redDownArrow2.scale.y = 0.5;
    redDownArrow2.fixedToCamera = true;
    redDownArrow2.smoothed = false;

    redLeftArrow2 = t.game.add.image(273, t.game.camera.view.height - 72, "leftArrow")
    redLeftArrow2.anchor.x = 0.5;
    redLeftArrow2.anchor.y = 0.5;
    redLeftArrow2.scale.x = 0.5;
    redLeftArrow2.scale.y = 0.5;
    redLeftArrow2.fixedToCamera = true;
    redLeftArrow2.smoothed = false;

    redRightArrow2 = t.game.add.image(273, t.game.camera.view.height - 47, "rightArrow")
    redRightArrow2.anchor.x = 0.5;
    redRightArrow2.anchor.y = 0.5;
    redRightArrow2.scale.x = 0.5;
    redRightArrow2.scale.y = 0.5;
    redRightArrow2.fixedToCamera = true;
    redRightArrow2.smoothed = false;


    blueUpArrow2 = t.game.add.image(373, t.game.camera.view.height - 122, "upArrow")
    blueUpArrow2.anchor.x = 0.5;
    blueUpArrow2.anchor.y = 0.5;
    blueUpArrow2.scale.x = 0.5;
    blueUpArrow2.scale.y = 0.5;
    blueUpArrow2.fixedToCamera = true;
    blueUpArrow2.smoothed = false;

	blueDownArrow2 = t.game.add.image(373, t.game.camera.view.height - 97, "downArrow")
    blueDownArrow2.anchor.x = 0.5;
    blueDownArrow2.anchor.y = 0.5;
    blueDownArrow2.scale.x = 0.5;
    blueDownArrow2.scale.y = 0.5;
    blueDownArrow2.fixedToCamera = true;
    blueDownArrow2.smoothed = false;

    blueLeftArrow2 = t.game.add.image(373, t.game.camera.view.height - 72, "leftArrow")
    blueLeftArrow2.anchor.x = 0.5;
    blueLeftArrow2.anchor.y = 0.5;
    blueLeftArrow2.scale.x = 0.5;
    blueLeftArrow2.scale.y = 0.5;
    blueLeftArrow2.fixedToCamera = true;
    blueLeftArrow2.smoothed = false;

    blueRightArrow2 = t.game.add.image(373, t.game.camera.view.height - 47, "rightArrow")
    blueRightArrow2.anchor.x = 0.5;
    blueRightArrow2.anchor.y = 0.5;
    blueRightArrow2.scale.x = 0.5;
    blueRightArrow2.scale.y = 0.5;
    blueRightArrow2.fixedToCamera = true;
    blueRightArrow2.smoothed = false;
}

/////////////////////////////////Switch focus/////////////////////////////////

function switchMenu2(){

	if(this.controlMenu2.green === true){
		this.controlMenu2.green = false;
		this.controlMenu2.greenMenu2Contour.visible = false;
		this.controlMenu2.yellow = true;
		this.controlMenu2.yellowMenu2Contour.visible = true;
	}
	else if(this.controlMenu2.yellow === true){
		this.controlMenu2.yellow = false;
		this.controlMenu2.yellowMenu2Contour.visible = false;
		this.controlMenu2.red = true;
		this.controlMenu2.redMenu2Contour.visible = true;
	}
	else if(this.controlMenu2.red === true){
		this.controlMenu2.red = false;
		this.controlMenu2.redMenu2Contour.visible = false;
		this.controlMenu2.blue = true;
		this.controlMenu2.blueMenu2Contour.visible = true;
	}
	else if(this.controlMenu2.blue === true){
		this.controlMenu2.blue = false;
		this.controlMenu2.blueMenu2Contour.visible = false;
		this.controlMenu2.green = true;
		this.controlMenu2.greenMenu2Contour.visible = true;
	}
}


////////////////Selectors////////////////

function upSelector2(){
	
	if(this.controlMenu2.green === true){
		greenUpPressed2(this);
	}
	else if(this.controlMenu2.yellow === true){
		yellowUpPressed2(this);
	}
	else if(this.controlMenu2.red === true){
		redUpPressed2(this);
	}
	else if(this.controlMenu2.blue === true){
		blueUpPressed2(this);
	}

}

function downSelector2(){

	if(this.controlMenu2.green === true){
		greenDownPressed2(this);
	}
	else if(this.controlMenu2.yellow === true){
		yellowDownPressed2(this);
	}
	else if(this.controlMenu2.red === true){
		redDownPressed2(this);
	}
	else if(this.controlMenu2.blue === true){
		blueDownPressed2(this);
	}

}

function leftSelector2(){

	if(this.controlMenu2.green === true){
		greenLeftPressed2(this);
	}
	else if(this.controlMenu2.yellow === true){
		yellowLeftPressed2(this);
	}
	else if(this.controlMenu2.red === true){
		redLeftPressed2(this);
	}
	else if(this.controlMenu2.blue === true){
		blueLeftPressed2(this);
	}

}

function rightSelector2(){

	if(this.controlMenu2.green === true){
		greenRightPressed2(this);
	}
	else if(this.controlMenu2.yellow === true){
		yellowRightPressed2(this);
	}
	else if(this.controlMenu2.red === true){
		redRightPressed2(this);
	}
	else if(this.controlMenu2.blue === true){
		blueRightPressed2(this);
	}

}

////////////////Trigerred Functions////////////////

function greenUpPressed2(t){

    if(t.player.stop){
        greenUpArrow2.scale.x = 0.6;
        greenUpArrow2.scale.y = 0.6;
        t.game.time.events.add(200, greenUpArrow2Scale2);

        if(alt2Key.isDown && parseInt(greenUpCounter2.text) != 0){
            greenUpCounter2.text = (parseInt(greenUpCounter2.text) - 1).toString();
        }
        else if(parseInt(greenUpCounter2.text) < 10 && !alt2Key.isDown){
            greenUpCounter2.text = (parseInt(greenUpCounter2.text) + 1).toString();
        }
    }
}

function greenDownPressed2(t){

    if(t.player.stop){
        greenDownArrow2.scale.x = 0.6;
        greenDownArrow2.scale.y = 0.6;
        t.game.time.events.add(200, greenDownArrow2Scale2);

        if(alt2Key.isDown && parseInt(greenDownCounter2.text) != 0){
            greenDownCounter2.text = (parseInt(greenDownCounter2.text) - 1).toString();
        }
        else if(parseInt(greenDownCounter2.text) < 10 && !alt2Key.isDown){
            greenDownCounter2.text = (parseInt(greenDownCounter2.text) + 1).toString();
    	}
    }
}

function greenLeftPressed2(t){

    if(t.player.stop){
        greenLeftArrow2.scale.x = 0.6;
        greenLeftArrow2.scale.y = 0.6;
        t.game.time.events.add(200, greenLeftArrow2Scale2);

        if(alt2Key.isDown && parseInt(greenLeftCounter2.text) != 0){
            greenLeftCounter2.text = (parseInt(greenLeftCounter2.text) - 1).toString();
        }
        else if(parseInt(greenLeftCounter2.text) < 10 && !alt2Key.isDown){
            greenLeftCounter2.text = (parseInt(greenLeftCounter2.text) + 1).toString();
        }
    }
}

function greenRightPressed2(t){

    if(t.player.stop){
        greenRightArrow2.scale.x = 0.6;
        greenRightArrow2.scale.y = 0.6;
        t.game.time.events.add(200, greenRightArrow2Scale2);

        if(alt2Key.isDown && parseInt(greenRightCounter2.text) != 0){
            greenRightCounter2.text = (parseInt(greenRightCounter2.text) - 1).toString();
        }
        else if(parseInt(greenRightCounter2.text) < 10 && !alt2Key.isDown){
            greenRightCounter2.text = (parseInt(greenRightCounter2.text) + 1).toString();
        }
    }
}


function yellowUpPressed2(t){

    if(t.player.stop){
        yellowUpArrow2.scale.x = 0.6;
        yellowUpArrow2.scale.y = 0.6;
        t.game.time.events.add(200, yellowUpArrow2Scale2);

        if(alt2Key.isDown && parseInt(yellowUpCounter2.text) != 0){
            yellowUpCounter2.text = (parseInt(yellowUpCounter2.text) - 1).toString();
        }
        else if(parseInt(yellowUpCounter2.text) < 10 && !alt2Key.isDown){
            yellowUpCounter2.text = (parseInt(yellowUpCounter2.text) + 1).toString();
        }
    }
}

function yellowDownPressed2(t){

    if(t.player.stop){
        yellowDownArrow2.scale.x = 0.6;
        yellowDownArrow2.scale.y = 0.6;
        t.game.time.events.add(200, yellowDownArrow2Scale2);

        if(alt2Key.isDown && parseInt(yellowDownCounter2.text) != 0){
            yellowDownCounter2.text = (parseInt(yellowDownCounter2.text) - 1).toString();
        }
        else if(parseInt(yellowDownCounter2.text) < 10 && !alt2Key.isDown){
            yellowDownCounter2.text = (parseInt(yellowDownCounter2.text) + 1).toString();
    	}
    }
}

function yellowLeftPressed2(t){

    if(t.player.stop){
        yellowLeftArrow2.scale.x = 0.6;
        yellowLeftArrow2.scale.y = 0.6;
        t.game.time.events.add(200, yellowLeftArrow2Scale2);

        if(alt2Key.isDown && parseInt(yellowLeftCounter2.text) != 0){
            yellowLeftCounter2.text = (parseInt(yellowLeftCounter2.text) - 1).toString();
        }
        else if(parseInt(yellowLeftCounter2.text) < 10 && !alt2Key.isDown){
            yellowLeftCounter2.text = (parseInt(yellowLeftCounter2.text) + 1).toString();
        }
    }
}

function yellowRightPressed2(t){

    if(t.player.stop){
        yellowRightArrow2.scale.x = 0.6;
        yellowRightArrow2.scale.y = 0.6;
        t.game.time.events.add(200, yellowRightArrow2Scale2);

        if(alt2Key.isDown && parseInt(yellowRightCounter2.text) != 0){
            yellowRightCounter2.text = (parseInt(yellowRightCounter2.text) - 1).toString();
        }
        else if(parseInt(yellowRightCounter2.text) < 10 && !alt2Key.isDown){
            yellowRightCounter2.text = (parseInt(yellowRightCounter2.text) + 1).toString();
        }
    }
}


function redUpPressed2(t){

    if(t.player.stop){
        redUpArrow2.scale.x = 0.6;
        redUpArrow2.scale.y = 0.6;
        t.game.time.events.add(200, redUpArrow2Scale2);

        if(alt2Key.isDown && parseInt(redUpCounter2.text) != 0){
            redUpCounter2.text = (parseInt(redUpCounter2.text) - 1).toString();
        }
        else if(parseInt(redUpCounter2.text) < 10 && !alt2Key.isDown){
            redUpCounter2.text = (parseInt(redUpCounter2.text) + 1).toString();
        }
    }
}

function redDownPressed2(t){

    if(t.player.stop){
        redDownArrow2.scale.x = 0.6;
        redDownArrow2.scale.y = 0.6;
        t.game.time.events.add(200, redDownArrow2Scale2);

        if(alt2Key.isDown && parseInt(redDownCounter2.text) != 0){
            redDownCounter2.text = (parseInt(redDownCounter2.text) - 1).toString();
        }
        else if(parseInt(redDownCounter2.text) < 10 && !alt2Key.isDown){
            redDownCounter2.text = (parseInt(redDownCounter2.text) + 1).toString();
    	}
    }
}

function redLeftPressed2(t){

    if(t.player.stop){
        redLeftArrow2.scale.x = 0.6;
        redLeftArrow2.scale.y = 0.6;
        t.game.time.events.add(200, redLeftArrow2Scale2);

        if(alt2Key.isDown && parseInt(redLeftCounter2.text) != 0){
            redLeftCounter2.text = (parseInt(redLeftCounter2.text) - 1).toString();
        }
        else if(parseInt(redLeftCounter2.text) < 10 && !alt2Key.isDown){
            redLeftCounter2.text = (parseInt(redLeftCounter2.text) + 1).toString();
        }
    }
}

function redRightPressed2(t){

    if(t.player.stop){
        redRightArrow2.scale.x = 0.6;
        redRightArrow2.scale.y = 0.6;
        t.game.time.events.add(200, redRightArrow2Scale2);

        if(alt2Key.isDown && parseInt(redRightCounter2.text) != 0){
            redRightCounter2.text = (parseInt(redRightCounter2.text) - 1).toString();
        }
        else if(parseInt(redRightCounter2.text) < 10 && !alt2Key.isDown){
            redRightCounter2.text = (parseInt(redRightCounter2.text) + 1).toString();
        }
    }
}


function blueUpPressed2(t){

    if(t.player.stop){
        blueUpArrow2.scale.x = 0.6;
        blueUpArrow2.scale.y = 0.6;
        t.game.time.events.add(200, blueUpArrow2Scale2);

        if(alt2Key.isDown && parseInt(blueUpCounter2.text) != 0){
            blueUpCounter2.text = (parseInt(blueUpCounter2.text) - 1).toString();
        }
        else if(parseInt(blueUpCounter2.text) < 10 && !alt2Key.isDown){
            blueUpCounter2.text = (parseInt(blueUpCounter2.text) + 1).toString();
        }
    }
}

function blueDownPressed2(t){

    if(t.player.stop){
        blueDownArrow2.scale.x = 0.6;
        blueDownArrow2.scale.y = 0.6;
        t.game.time.events.add(200, blueDownArrow2Scale2);

        if(alt2Key.isDown && parseInt(blueDownCounter2.text) != 0){
            blueDownCounter2.text = (parseInt(blueDownCounter2.text) - 1).toString();
        }
        else if(parseInt(blueDownCounter2.text) < 10 && !alt2Key.isDown){
            blueDownCounter2.text = (parseInt(blueDownCounter2.text) + 1).toString();
    	}
    }
}

function blueLeftPressed2(t){

    if(t.player.stop){
        blueLeftArrow2.scale.x = 0.6;
        blueLeftArrow2.scale.y = 0.6;
        t.game.time.events.add(200, blueLeftArrow2Scale2);

        if(alt2Key.isDown && parseInt(blueLeftCounter2.text) != 0){
            blueLeftCounter2.text = (parseInt(blueLeftCounter2.text) - 1).toString();
        }
        else if(parseInt(blueLeftCounter2.text) < 10 && !alt2Key.isDown){
            blueLeftCounter2.text = (parseInt(blueLeftCounter2.text) + 1).toString();
        }
    }
}

function blueRightPressed2(t){

    if(t.player.stop){
        blueRightArrow2.scale.x = 0.6;
        blueRightArrow2.scale.y = 0.6;
        t.game.time.events.add(200, blueRightArrow2Scale2);

        if(alt2Key.isDown && parseInt(blueRightCounter2.text) != 0){
            blueRightCounter2.text = (parseInt(blueRightCounter2.text) - 1).toString();
        }
        else if(parseInt(blueRightCounter2.text) < 10 && !alt2Key.isDown){
            blueRightCounter2.text = (parseInt(blueRightCounter2.text) + 1).toString();
        }
    }
}

////////////////Arrow2's Scaling Functions////////////////

function greenUpArrow2Scale2(){
    greenUpArrow2.scale.x = 0.5;
    greenUpArrow2.scale.y = 0.5;
}

function greenDownArrow2Scale2(){
    greenDownArrow2.scale.x = 0.5;
    greenDownArrow2.scale.y = 0.5;
}

function greenLeftArrow2Scale2(){
    greenLeftArrow2.scale.x = 0.5;
    greenLeftArrow2.scale.y = 0.5;
}

function greenRightArrow2Scale2(){
    greenRightArrow2.scale.x = 0.5;
    greenRightArrow2.scale.y = 0.5;
}


function yellowUpArrow2Scale2(){
    yellowUpArrow2.scale.x = 0.5;
    yellowUpArrow2.scale.y = 0.5;
}

function yellowDownArrow2Scale2(){
    yellowDownArrow2.scale.x = 0.5;
    yellowDownArrow2.scale.y = 0.5;
}

function yellowLeftArrow2Scale2(){
    yellowLeftArrow2.scale.x = 0.5;
    yellowLeftArrow2.scale.y = 0.5;
}

function yellowRightArrow2Scale2(){
    yellowRightArrow2.scale.x = 0.5;
    yellowRightArrow2.scale.y = 0.5;
}


function redUpArrow2Scale2(){
    redUpArrow2.scale.x = 0.5;
    redUpArrow2.scale.y = 0.5;
}

function redDownArrow2Scale2(){
    redDownArrow2.scale.x = 0.5;
    redDownArrow2.scale.y = 0.5;
}

function redLeftArrow2Scale2(){
    redLeftArrow2.scale.x = 0.5;
    redLeftArrow2.scale.y = 0.5;
}

function redRightArrow2Scale2(){
    redRightArrow2.scale.x = 0.5;
    redRightArrow2.scale.y = 0.5;
}


function blueUpArrow2Scale2(){
    blueUpArrow2.scale.x = 0.5;
    blueUpArrow2.scale.y = 0.5;
}

function blueDownArrow2Scale2(){
    blueDownArrow2.scale.x = 0.5;
    blueDownArrow2.scale.y = 0.5;
}

function blueLeftArrow2Scale2(){
    blueLeftArrow2.scale.x = 0.5;
    blueLeftArrow2.scale.y = 0.5;
}

function blueRightArrow2Scale2(){
    blueRightArrow2.scale.x = 0.5;
    blueRightArrow2.scale.y = 0.5;
}