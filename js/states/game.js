
/////////////////////////////////Global Var/////////////////////////////////

var key, pauseButton, fireButton, cameraSizeX, cameraSizeY;

cameraSizeX = 700;
cameraSizeY = 411;

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
        this.game.stage.backgroundColor = "#FFE29C";


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


        /////////////////////////////////Player/////////////////////////////////
        //Create the player
        this.player = new Game.Player(this.game, 65, 65);
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

        //add weapons
        this.weapon = new Weapon.SingleBullet(this.game);


        /////////////////////////////////Pause Menu/////////////////////////////////
        //set event listener to pause/unpause the game
        pauseMessage = this.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        pauseBox = this.game.input.keyboard.addKey(27);
        pauseBox.onDown.add(pause , this);


        /////////////////////////////////Menu Font/////////////////////////////////
        fontMenu = this.game.add.image(Game.game.camera.view.x + (cameraSizeX - 65) , Game.game.camera.view.y + (cameraSizeY - 115), "fontGreenRect");
        fontMenu.smoothed = false;
        fontMenu.anchor.x = 0.5;
        fontMenu.anchor.y = 0.5;
        fontMenu.scale.y = 1.2
        fontMenu.fixedToCamera = true;


        /////////////////////////////////Control Inputs/////////////////////////////////
        upCounter = this.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        upButton = this.game.input.keyboard.addKey(90);
        upButton.onDown.add(upPressed , this);
        upCounterBox = this.game.add.image(Game.game.camera.view.x + (cameraSizeX - 49) , Game.game.camera.view.y + (cameraSizeY - 150), upCounter);
        upCounterBox.anchor.x = 0.5;
        upCounterBox.anchor.y = 0.5;
        upCounter.text = "0";
        upCounterBox.fixedToCamera = true;

        downCounter = this.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        downButton = this.game.input.keyboard.addKey(83);
        downButton.onDown.add(downPressed , this);
        downCounterBox = this.game.add.image(Game.game.camera.view.x + (cameraSizeX - 49) , Game.game.camera.view.y + (cameraSizeY - 125), downCounter);
        downCounterBox.anchor.x = 0.5;
        downCounterBox.anchor.y = 0.5;
        downCounter.text = "0";
        downCounterBox.fixedToCamera = true;

        leftCounter = this.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        leftButton = this.game.input.keyboard.addKey(81);
        leftButton.onDown.add(leftPressed , this);
        leftCounterBox = this.game.add.image(Game.game.camera.view.x + (cameraSizeX - 49) , Game.game.camera.view.y + (cameraSizeY - 100), leftCounter);
        leftCounterBox.anchor.x = 0.5;
        leftCounterBox.anchor.y = 0.5;
        leftCounter.text = "0";
        leftCounterBox.fixedToCamera = true;

        rightCounter = this.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        rightButton = this.game.input.keyboard.addKey(68);
        rightButton.onDown.add(rightPressed , this);
        rightCounterBox = this.game.add.image(Game.game.camera.view.x + (cameraSizeX - 49) , Game.game.camera.view.y + (cameraSizeY - 75), rightCounter);
        rightCounterBox.anchor.x = 0.5;
        rightCounterBox.anchor.y = 0.5;
        rightCounter.text = "0";
        rightCounterBox.fixedToCamera = true;

        altKey = this.game.input.keyboard.addKey(18);


        /////////////////////////////////Arrow Images/////////////////////////////////
        upArrow = this.game.add.image(Game.game.camera.view.x + (cameraSizeX - 73) , Game.game.camera.view.y + (cameraSizeY - 152), "upArrow")
        upArrow.anchor.x = 0.5;
        upArrow.anchor.y = 0.5;
        upArrow.scale.x = 0.5;
        upArrow.scale.y = 0.5;
        upArrow.fixedToCamera = true;
        upArrow.smoothed = false;

        downArrow = this.game.add.image(Game.game.camera.view.x + (cameraSizeX - 73) , Game.game.camera.view.y + (cameraSizeY - 127), "downArrow")
        downArrow.anchor.x = 0.5;
        downArrow.anchor.y = 0.5;
        downArrow.scale.x = 0.5;
        downArrow.scale.y = 0.5;
        downArrow.fixedToCamera = true;
        downArrow.smoothed = false;

        leftArrow = this.game.add.image(Game.game.camera.view.x + (cameraSizeX - 73) , Game.game.camera.view.y + (cameraSizeY - 102), "leftArrow")
        leftArrow.anchor.x = 0.5;
        leftArrow.anchor.y = 0.5;
        leftArrow.scale.x = 0.5;
        leftArrow.scale.y = 0.5;
        leftArrow.fixedToCamera = true;
        leftArrow.smoothed = false;

        rightArrow = this.game.add.image(Game.game.camera.view.x + (cameraSizeX - 73) , Game.game.camera.view.y + (cameraSizeY - 77), "rightArrow")
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

        //If a bullet collide a wall the callback function collisionHandler is triggered
        this.game.physics.arcade.collide(this.weapon, this.wallLayer, collisionHandler, null, this);

        if (fireButton.isDown){
            this.player.start = true;

        }

    }
}


function collisionHandler(weapon, wallLayer){

    weapon.kill();
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


function upPressed(){

    upArrow.scale.x = 0.6;
    upArrow.scale.y = 0.6;
    this.game.time.events.add(200, upArrowScale);

    if(altKey.isDown){
        upCounter.text = (parseInt(upCounter.text) - 1).toString();
    }
    else{
        upCounter.text = (parseInt(upCounter.text) + 1).toString();
    }
}

function downPressed(){

    downArrow.scale.x = 0.6;
    downArrow.scale.y = 0.6;
    this.game.time.events.add(200, downArrowScale);

    if(altKey.isDown){
        downCounter.text = (parseInt(downCounter.text) - 1).toString();
    }
    else{
        downCounter.text = (parseInt(downCounter.text) + 1).toString();
    }
}

function leftPressed(){

    leftArrow.scale.x = 0.6;
    leftArrow.scale.y = 0.6;
    this.game.time.events.add(200, leftArrowScale);

    if(altKey.isDown){
        leftCounter.text = (parseInt(leftCounter.text) - 1).toString();
    }
    else{
        leftCounter.text = (parseInt(leftCounter.text) + 1).toString();
    }
}

function rightPressed(){

    rightArrow.scale.x = 0.6;
    rightArrow.scale.y = 0.6;
    this.game.time.events.add(200, rightArrowScale);

    if(altKey.isDown){
        rightCounter.text = (parseInt(rightCounter.text) - 1).toString();
    }
    else{
        rightCounter.text = (parseInt(rightCounter.text) + 1).toString();
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