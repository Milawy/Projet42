
/////////////////////////////////Global Var/////////////////////////////////

var key, pauseButton, fireButton, cameraSizeX, cameraSizeY;

cameraZoom = 1.1;
cameraSizeX = 700*cameraZoom;
cameraSizeY = 411*cameraZoom;

Game.Game= function(){
 
};
 Game.Game.prototype = { 
 
 
    preload : function(){ 
        
    }, 
 
    create : function(){


        /////////////////////////////////Scaling & Render/////////////////////
        //Scaling time
        this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
        this.game.scale.setGameSize(cameraSizeX, cameraSizeY);
        this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

        //Render time
        this.game.renderer.renderSession.roundPixels = true; //allow pixel art

        //this.world.renderer.renderSession.roundPixels = true;
        Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);
        this.physics.startSystem(Phaser.Physics.ARCADE);

        //Bg color
        //this.game.stage.backgroundColor = "#FFE29C";


        /////////////////////////////////Map/////////////////////////////////
        //Load the map
        this.map = this.add.tilemap('room1newTile');
        this.map.addTilesetImage('tile_32x32','tiles_32x32');
        this.map.smoothed = false;


        //Create layers
        this.backgroundLayer = this.map.createLayer('Ground');
        this.wallLayer = this.map.createLayer('Wall');
        this.backgroundLayer.smoothed = false;
        this.wallLayer.smoothed = false;

        //Allow collisions with walls
        this.map.setCollisionBetween(0, 999, true, this.wallLayer);


        /////////////////////////////////Green zones/////////////////////////////////
        z1 = this.game.add.sprite(125, 180, "fontGreenRect");
        z1.anchor.setTo(0.5,0.5);
        z1.alpha = 0.4;
        z2 = this.game.add.sprite(650, 450, "fontGreenRect");
        z2.anchor.setTo(0.5,0.5);
        z2.alpha = 0.4;
        z3 = this.game.add.sprite(125, 450, "fontGreenRect");
        z3.anchor.setTo(0.5,0.5);
        z3.alpha = 0.4;


        /////////////////////////////////Exit///////////////////////////////////
        exit = this.game.add.sprite(125, 450, "blueLight");
        exit.anchor.setTo(0.5,0.5);
        exit.alpha = 0.5;


        /////////////////////////////////Player/////////////////////////////////
        //Create the player
        this.player = new Game.Player(this.game, 125, 180);
        this.game.physics.arcade.enable(this.player);
        this.game.add.existing(this.player);
        this.player.smoothed = false;
        

        /////////////////////////////////Camera/////////////////////////////////
        this.game.world.resize(4000, 4000); // create offset limits
        Game.game.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);


        /////////////////////////////////Weapon/////////////////////////////////
        //add the keyboard and inputs
        key = this.game.input.keyboard;
        fireButton = this.game.input.activePointer.leftButton;
        this.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);


        /////////////////////////////////Pause Menu/////////////////////////////////
        //set event listener to pause/unpause the game
        pauseMessage = this.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        pauseBox = this.game.input.keyboard.addKey(27);
        pauseBox.onDown.add(pause , this);


        /////////////////////////////////Menu Font/////////////////////////////////
        fontMenu = this.game.add.image(Game.game.camera.view.x + (cameraSizeX - 65) , Game.game.camera.view.y + (cameraSizeY - 85), "fontGreenRect");
        fontMenu.smoothed = false;
        fontMenu.anchor.x = 0.5;
        fontMenu.anchor.y = 0.5;
        fontMenu.scale.y = 1.2
        fontMenu.fixedToCamera = true;


        /////////////////////////////////Control Inputs/////////////////////////////////
        upCounter = this.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        upButton = this.game.input.keyboard.addKey(90);
        upButton.onDown.add(upPressed , this);
        upCounterBox = this.game.add.image(Game.game.camera.view.x + (cameraSizeX - 49) , Game.game.camera.view.y + (cameraSizeY - 120), upCounter);
        upCounterBox.anchor.x = 0.5;
        upCounterBox.anchor.y = 0.5;
        upCounter.text = "0";
        upCounterBox.fixedToCamera = true;

        downCounter = this.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        downButton = this.game.input.keyboard.addKey(83);
        downButton.onDown.add(downPressed , this);
        downCounterBox = this.game.add.image(Game.game.camera.view.x + (cameraSizeX - 49) , Game.game.camera.view.y + (cameraSizeY - 95), downCounter);
        downCounterBox.anchor.x = 0.5;
        downCounterBox.anchor.y = 0.5;
        downCounter.text = "0";
        downCounterBox.fixedToCamera = true;

        leftCounter = this.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        leftButton = this.game.input.keyboard.addKey(81);
        leftButton.onDown.add(leftPressed , this);
        leftCounterBox = this.game.add.image(Game.game.camera.view.x + (cameraSizeX - 49) , Game.game.camera.view.y + (cameraSizeY - 70), leftCounter);
        leftCounterBox.anchor.x = 0.5;
        leftCounterBox.anchor.y = 0.5;
        leftCounter.text = "0";
        leftCounterBox.fixedToCamera = true;

        rightCounter = this.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        rightButton = this.game.input.keyboard.addKey(68);
        rightButton.onDown.add(rightPressed , this);
        rightCounterBox = this.game.add.image(Game.game.camera.view.x + (cameraSizeX - 49) , Game.game.camera.view.y + (cameraSizeY - 45), rightCounter);
        rightCounterBox.anchor.x = 0.5;
        rightCounterBox.anchor.y = 0.5;
        rightCounter.text = "0";
        rightCounterBox.fixedToCamera = true;

        altKey = this.game.input.keyboard.addKey(18);
        rKey = this.game.input.keyboard.addKey(82);
        rKey.onDown.add(restart, this);


        /////////////////////////////////Arrow Images/////////////////////////////////
        upArrow = this.game.add.image(Game.game.camera.view.x + (cameraSizeX - 73) , Game.game.camera.view.y + (cameraSizeY - 122), "upArrow")
        upArrow.anchor.x = 0.5;
        upArrow.anchor.y = 0.5;
        upArrow.scale.x = 0.5;
        upArrow.scale.y = 0.5;
        upArrow.fixedToCamera = true;
        upArrow.smoothed = false;

        downArrow = this.game.add.image(Game.game.camera.view.x + (cameraSizeX - 73) , Game.game.camera.view.y + (cameraSizeY - 97), "downArrow")
        downArrow.anchor.x = 0.5;
        downArrow.anchor.y = 0.5;
        downArrow.scale.x = 0.5;
        downArrow.scale.y = 0.5;
        downArrow.fixedToCamera = true;
        downArrow.smoothed = false;

        leftArrow = this.game.add.image(Game.game.camera.view.x + (cameraSizeX - 73) , Game.game.camera.view.y + (cameraSizeY - 72), "leftArrow")
        leftArrow.anchor.x = 0.5;
        leftArrow.anchor.y = 0.5;
        leftArrow.scale.x = 0.5;
        leftArrow.scale.y = 0.5;
        leftArrow.fixedToCamera = true;
        leftArrow.smoothed = false;

        rightArrow = this.game.add.image(Game.game.camera.view.x + (cameraSizeX - 73) , Game.game.camera.view.y + (cameraSizeY - 47), "rightArrow")
        rightArrow.anchor.x = 0.5;
        rightArrow.anchor.y = 0.5;
        rightArrow.scale.x = 0.5;
        rightArrow.scale.y = 0.5;
        rightArrow.fixedToCamera = true;
        rightArrow.smoothed = false;
    }, 

 
    update : function(){ 
        
        //Check collisions between the player and walls
        this.game.physics.arcade.collide(this.player, this.wallLayer);

        if(this.player.overlap(z1) || this.player.overlap(z2) || this.player.overlap(z3)){
            this.player.isOnGreenZone = true;
        }
        else{
            this.player.isOnGreenZone = false;
        }

        if(this.player.overlap(exit)){
            this.game.state.start(this.game.state.current);
        }

        if (fireButton.isDown){
            this.player.start = true;
        }

    }
}


function pause(){
    
    if(this.game.paused == true){

        this.game.paused = false;
        pauseBox.destroy();

    }
    else {

        this.game.paused = true;
        pauseBox = this.game.add.image(Game.game.camera.view.x + (cameraSizeX/2) , Game.game.camera.view.y + (cameraSizeY/2), pauseMessage);
        pauseBox.anchor.x = 0.5;
        pauseBox.anchor.y = 0.5;
        pauseMessage.text = "Pause";

    }
}

function restart(){
    this.game.state.start(this.game.state.current);
}


function upPressed(){

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