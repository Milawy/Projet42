
/////////////////////////////////Global Var/////////////////////////////////

var key, pauseButton, fireButton, cameraSizeX, cameraSizeY;

cameraZoom = 1.2;
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
        this.map.addTilesetImage('tileset','tileset');
        this.map.smoothed = false;

        //Create layers
        this.backgroundLayer = this.map.createLayer('Ground');
        this.wallLayer = this.map.createLayer('Wall');
        this.backgroundLayer.smoothed = false;
        this.wallLayer.smoothed = false;

        //Allow collisions with walls
        this.map.setCollisionBetween(0, 999, true, this.wallLayer);


        /////////////////////////////////Green zones/////////////////////////////////
        z1 = this.game.add.sprite(135, 140, "fontGreenRect");
        z1.anchor.setTo(0.5,0.5);
        z1.alpha = 0.4;
        z2 = this.game.add.sprite(710, 365, "fontGreenRect");
        z2.anchor.setTo(0.5,0.5);
        z2.alpha = 0.4;
        z3 = this.game.add.sprite(135, 365, "fontGreenRect");
        z3.anchor.setTo(0.5,0.5);
        z3.alpha = 0.4;


        /////////////////////////////////Exit///////////////////////////////////
        exit = this.game.add.sprite(135, 365, "blueLight");
        exit.anchor.setTo(0.5,0.5);
        exit.alpha = 0.5;


        /////////////////////////////////Player/////////////////////////////////
        this.player = new Game.Player(this.game, 135, 140);
        this.game.physics.arcade.enable(this.player);
        this.game.add.existing(this.player);
        this.player.smoothed = false;
        

        /////////////////////////////////Camera/////////////////////////////////
        this.game.world.resize(4000, 4000); // create offset limits
        Game.game.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);


        /////////////////////////////////Pause Menu/////////////////////////////////
        //set event listener to pause/unpause the game
        pauseMessage = this.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        pauseBox = this.game.input.keyboard.addKey(27);
        pauseBox.onDown.add(pause , this);


        /////////////////////////////////Control Inputs////////////////////////////////
        altKey = this.game.input.keyboard.addKey(18);
        rKey = this.game.input.keyboard.addKey(82);
        rKey.onDown.add(restart, this);


        /////////////////////////////////Control Menu/////////////////////////////////
        this.controlMenu = new Game.controlMenu(this);
        
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