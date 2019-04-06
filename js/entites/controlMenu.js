
/////////////////////////////////Create/////////////////////////////////

Game.controlMenu = function (t) {

	////////////////Menu Font////////////////
    fontMenu = t.game.add.image(Game.game.camera.view.x + (cameraSizeX - 65) , Game.game.camera.view.y + (cameraSizeY - 85), "fontGreenRect");
    fontMenu.smoothed = false;
    fontMenu.anchor.x = 0.5;
    fontMenu.anchor.y = 0.5;
    fontMenu.scale.y = 1.2
    fontMenu.fixedToCamera = true;

    ////////////////Control Inputs////////////////
    upCounter = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    upButton = t.game.input.keyboard.addKey(90);
    upButton.onDown.add(upPressed , t);
    upCounterBox = t.game.add.image(Game.game.camera.view.x + (cameraSizeX - 49) , Game.game.camera.view.y + (cameraSizeY - 120), upCounter);
    upCounterBox.anchor.x = 0.5;
    upCounterBox.anchor.y = 0.5;
    upCounter.text = "0";
    upCounterBox.fixedToCamera = true;

    downCounter = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    downButton = t.game.input.keyboard.addKey(83);
    downButton.onDown.add(downPressed , t);
    downCounterBox = t.game.add.image(Game.game.camera.view.x + (cameraSizeX - 49) , Game.game.camera.view.y + (cameraSizeY - 95), downCounter);
    downCounterBox.anchor.x = 0.5;
    downCounterBox.anchor.y = 0.5;
    downCounter.text = "0";
    downCounterBox.fixedToCamera = true;

    leftCounter = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    leftButton = t.game.input.keyboard.addKey(81);
    leftButton.onDown.add(leftPressed , t);
    leftCounterBox = t.game.add.image(Game.game.camera.view.x + (cameraSizeX - 49) , Game.game.camera.view.y + (cameraSizeY - 70), leftCounter);
    leftCounterBox.anchor.x = 0.5;
    leftCounterBox.anchor.y = 0.5;
    leftCounter.text = "0";
    leftCounterBox.fixedToCamera = true;

    rightCounter = t.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
    rightButton = t.game.input.keyboard.addKey(68);
    rightButton.onDown.add(rightPressed , t);
    rightCounterBox = t.game.add.image(Game.game.camera.view.x + (cameraSizeX - 49) , Game.game.camera.view.y + (cameraSizeY - 45), rightCounter);
    rightCounterBox.anchor.x = 0.5;
    rightCounterBox.anchor.y = 0.5;
    rightCounter.text = "0";
    rightCounterBox.fixedToCamera = true;

    ////////////////Control Arrows////////////////
    upArrow = t.game.add.image(Game.game.camera.view.x + (cameraSizeX - 73) , Game.game.camera.view.y + (cameraSizeY - 122), "upArrow")
    upArrow.anchor.x = 0.5;
    upArrow.anchor.y = 0.5;
    upArrow.scale.x = 0.5;
    upArrow.scale.y = 0.5;
    upArrow.fixedToCamera = true;
    upArrow.smoothed = false;

	downArrow = t.game.add.image(Game.game.camera.view.x + (cameraSizeX - 73) , Game.game.camera.view.y + (cameraSizeY - 97), "downArrow")
    downArrow.anchor.x = 0.5;
    downArrow.anchor.y = 0.5;
    downArrow.scale.x = 0.5;
    downArrow.scale.y = 0.5;
    downArrow.fixedToCamera = true;
    downArrow.smoothed = false;

    leftArrow = t.game.add.image(Game.game.camera.view.x + (cameraSizeX - 73) , Game.game.camera.view.y + (cameraSizeY - 72), "leftArrow")
    leftArrow.anchor.x = 0.5;
    leftArrow.anchor.y = 0.5;
    leftArrow.scale.x = 0.5;
    leftArrow.scale.y = 0.5;
    leftArrow.fixedToCamera = true;
    leftArrow.smoothed = false;

    rightArrow = t.game.add.image(Game.game.camera.view.x + (cameraSizeX - 73) , Game.game.camera.view.y + (cameraSizeY - 47), "rightArrow")
    rightArrow.anchor.x = 0.5;
    rightArrow.anchor.y = 0.5;
    rightArrow.scale.x = 0.5;
    rightArrow.scale.y = 0.5;
    rightArrow.fixedToCamera = true;
    rightArrow.smoothed = false;
}

/////////////////////////////////Update/////////////////////////////////

Game.controlMenu.prototype.update = function(){


}

////////////////Trigrred Functions////////////////

function upPressed(){

	//nota : here this is t due to listener add
    if(this.player.isOnGreenZone){
        upArrow.scale.x = 0.6;
        upArrow.scale.y = 0.6;
        this.game.time.events.add(200, upArrowScale);

        if(altKey.isDown && parseInt(upCounter.text) != 0){
            upCounter.text = (parseInt(upCounter.text) - 1).toString();
        }
        else if(parseInt(upCounter.text) < 15 && !altKey.isDown){
            upCounter.text = (parseInt(upCounter.text) + 1).toString();
        }
    }
}

function downPressed(){

    if(this.player.isOnGreenZone){
        downArrow.scale.x = 0.6;
        downArrow.scale.y = 0.6;
        this.game.time.events.add(200, downArrowScale);

        if(altKey.isDown && parseInt(downCounter.text) != 0){
            downCounter.text = (parseInt(downCounter.text) - 1).toString();
        }
        else if(parseInt(downCounter.text) < 15 && !altKey.isDown){
            downCounter.text = (parseInt(downCounter.text) + 1).toString();
    }
    }
}

function leftPressed(){

    if(this.player.isOnGreenZone){
        leftArrow.scale.x = 0.6;
        leftArrow.scale.y = 0.6;
        this.game.time.events.add(200, leftArrowScale);

        if(altKey.isDown && parseInt(leftCounter.text) != 0){
            leftCounter.text = (parseInt(leftCounter.text) - 1).toString();
        }
        else if(parseInt(leftCounter.text) < 15 && !altKey.isDown){
            leftCounter.text = (parseInt(leftCounter.text) + 1).toString();
        }
    }
}

function rightPressed(){

    if(this.player.isOnGreenZone){
        rightArrow.scale.x = 0.6;
        rightArrow.scale.y = 0.6;
        this.game.time.events.add(200, rightArrowScale);

        if(altKey.isDown && parseInt(rightCounter.text) != 0){
            rightCounter.text = (parseInt(rightCounter.text) - 1).toString();
        }
        else if(parseInt(rightCounter.text) < 15 && !altKey.isDown){
            rightCounter.text = (parseInt(rightCounter.text) + 1).toString();
        }
    }
}

////////////////Arrow's Scaling Functions////////////////

function upArrowScale(){
    upArrow.scale.x = 0.5;
    upArrow.scale.y = 0.5;
}

function downArrowScale(){
    downArrow.scale.x = 0.5;
    downArrow.scale.y = 0.5;
}

function leftArrowScale(){
    leftArrow.scale.x = 0.5;
    leftArrow.scale.y = 0.5;
}

function rightArrowScale(){
    rightArrow.scale.x = 0.5;
    rightArrow.scale.y = 0.5;
}