
/////////////////////////////////Global Var/////////////////////////////////

var key, pauseButton, fireButton, cameraSizeX, cameraSizeY;

cameraSizeX = 450;
cameraSizeY = 264;

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
        console.log(this.game.world)
        Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);
        this.physics.startSystem(Phaser.Physics.ARCADE);


        /////////////////////////////////Map/////////////////////////////////
        //Load the map
        this.map = this.add.tilemap('couloir');
        this.map.addTilesetImage('sci-fi-tiles','tiles_16x16');
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
        this.player = new Game.Player(this.game, 22, 22);
        this.game.physics.arcade.enable(this.player);
        this.game.add.existing(this.player);
        this.player.smoothed = false;
        
        /////////////////////////////////Camera/////////////////////////////////
        this.game.world.resize(900, 300); // create offset limits
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


        /////////////////////////////////Control Inputs/////////////////////////////////
        upCounter = this.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        upButton = this.game.input.keyboard.addKey(90);
        upButton.onDown.add(upPressed , this);
        upCounterBox = this.game.add.image(Game.game.camera.view.x + (cameraSizeX - 42) , Game.game.camera.view.y + (cameraSizeY - 150), upCounter);
        upCounterBox.anchor.x = 0.5;
        upCounterBox.anchor.y = 0.5;
        upCounter.text = "0";

        downCounter = this.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        downButton = this.game.input.keyboard.addKey(83);
        downButton.onDown.add(downPressed , this);
        downCounterBox = this.game.add.image(Game.game.camera.view.x + (cameraSizeX - 42) , Game.game.camera.view.y + (cameraSizeY - 125), downCounter);
        downCounterBox.anchor.x = 0.5;
        downCounterBox.anchor.y = 0.5;
        downCounter.text = "0";

        leftCounter = this.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        leftButton = this.game.input.keyboard.addKey(68);
        leftButton.onDown.add(leftPressed , this);
        leftCounterBox = this.game.add.image(Game.game.camera.view.x + (cameraSizeX - 42) , Game.game.camera.view.y + (cameraSizeY - 100), leftCounter);
        leftCounterBox.anchor.x = 0.5;
        leftCounterBox.anchor.y = 0.5;
        leftCounter.text = "0";

        rightCounter = this.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        rightButton = this.game.input.keyboard.addKey(81);
        rightButton.onDown.add(rightPressed , this);
        rightCounterBox = this.game.add.image(Game.game.camera.view.x + (cameraSizeX - 42) , Game.game.camera.view.y + (cameraSizeY - 75), rightCounter);
        rightCounterBox.anchor.x = 0.5;
        rightCounterBox.anchor.y = 0.5;
        rightCounter.text = "0"; 
        
    }, 

 
    update : function(){ 
        
        //Check collisions between the player and walls
        this.game.physics.arcade.collide(this.player, this.wallLayer);

        //If a bullet collide a wall the callback function collisionHandler is triggered
        this.game.physics.arcade.collide(this.weapon, this.wallLayer, collisionHandler, null, this);

        if (fireButton.isDown){

            this.weapon.fire(this.player, this.game.input.mousePointer);
        }

        /////////////////////////////////Update of the counter menu/////////////////////////////////
        upCounterBox.destroy();
        upCounterBox = this.game.add.image(Game.game.camera.view.x + (cameraSizeX - 42) , Game.game.camera.view.y + (cameraSizeY - 150), upCounter);
        upCounterBox.anchor.x = 0.5;
        upCounterBox.anchor.y = 0.5;

        downCounterBox.destroy();
        downCounterBox = this.game.add.image(Game.game.camera.view.x + (cameraSizeX - 42) , Game.game.camera.view.y + (cameraSizeY - 125), downCounter);
        downCounterBox.anchor.x = 0.5;
        downCounterBox.anchor.y = 0.5;

        leftCounterBox.destroy();
        leftCounterBox = this.game.add.image(Game.game.camera.view.x + (cameraSizeX - 42) , Game.game.camera.view.y + (cameraSizeY - 100), leftCounter);
        leftCounterBox.anchor.x = 0.5;
        leftCounterBox.anchor.y = 0.5;

        rightCounterBox.destroy();
        rightCounterBox = this.game.add.image(Game.game.camera.view.x + (cameraSizeX - 42) , Game.game.camera.view.y + (cameraSizeY - 75), rightCounter);
        rightCounterBox.anchor.x = 0.5;
        rightCounterBox.anchor.y = 0.5;

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
    upCounter.text = (parseInt(upCounter.text) + 1).toString();
}

function downPressed(){
    downCounter.text = (parseInt(downCounter.text) + 1).toString();
}

function leftPressed(){
    leftCounter.text = (parseInt(leftCounter.text) + 1).toString();
}

function rightPressed(){
    rightCounter.text = (parseInt(rightCounter.text) + 1).toString();
}