
/////////////////////////////////Global Var/////////////////////////////////

Game.Stage1= function(){
 
};
 Game.Stage1.prototype = { 
 
 
    preload : function(){ 
        
    }, 
 
    create : function(){


        /////////////////////////////////Scaling & Render/////////////////////
        //Scaling time
        this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
        this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

        //Render time
        this.game.renderer.renderSession.roundPixels = true; //allow pixel art

        //this.world.renderer.renderSession.roundPixels = true;
        Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);
        this.physics.startSystem(Phaser.Physics.ARCADE);

        //here the camera size (adapt it for each stage)
        this.scale.setGameSize(974, 550);
        this.game.stage.disableVisibilityChange = true;

        //Bg color
        //this.game.stage.backgroundColor = "#FFE29C";


        /////////////////////////////////Map/////////////////////////////////
        //Load the map
        this.map = this.add.tilemap('stage1');
        this.map.addTilesetImage('tileset','tileset');
        this.map.smoothed = false;

        //Create layers
        this.backgroundLayer = this.map.createLayer('Ground');
        this.wallLayer = this.map.createLayer('Wall');
        this.backgroundLayer.smoothed = false;
        this.wallLayer.smoothed = false;
        this.wallLayer.debug = true;

        //Center the map
        this.wallLayer.fixedToCamera = false;
        this.backgroundLayer.fixedToCamera = false;
        this.wallLayer.scrollFactorX = 0;
        this.wallLayer.scrollFactorY = 0;
        this.backgroundLayer.scrollFactorX = 0;
        this.backgroundLayer.scrollFactorY = 0;
        deltaW = (this.camera.width - this.map.widthInPixels)/2;
        this.wallLayer.position.set(deltaW, 0);
        this.backgroundLayer.position.set(deltaW, 0);
        this.wallLayer.position.x = deltaW;
        this.backgroundLayer.position.x = deltaW;

        //Allow collisions with walls
        this.map.setCollisionBetween(0, 999, true, this.wallLayer);


        /////////////////////////////////Zones/////////////////////////////////
        greenZone = new Game.colorZones(this, "green", 135, 140, 0.5, 0.5);
        yellowZone = new Game.colorZones(this, "yellow", 735, 150, 0.5, 1);
        redZone = new Game.colorZones(this, "red", 735, 370, 0.5, 1);


        /////////////////////////////////Exit///////////////////////////////////
        exit = this.game.add.sprite(135, 365, "blueLight");
        exit.anchor.setTo(0.5,0.5);
        exit.scale.setTo(1.3,1.3);
        exit.alpha = 0.5;


        /////////////////////////////////Player/////////////////////////////////
        this.player = new Game.Player(this.game, 200, 140);
        this.game.physics.arcade.enable(this.player);
        this.game.add.existing(this.player);
        this.player.smoothed = false;
        

        /////////////////////////////////Camera/////////////////////////////////
        this.game.world.resize(1000, 1000); // create offset limits
        Game.game.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

        /////////////////////////////////Pause Menu////////////////////////////////
        this.pauseMenu = new Game.pauseMenu(this);

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

        if(this.player.overlap(greenZone.zone)){
            this.player.green = true;
        }
        else{
            this.player.green = false;
        }

        if(this.player.overlap(yellowZone.zone)){
            this.player.yellow = true;
        }
        else{
            this.player.yellow = false;
        }

        if(this.player.overlap(redZone.zone)){
            this.player.red = true;
        }
        else{
            this.player.red = false;
        }

        if(this.player.overlap(exit)){
            this.game.state.start(this.game.state.current);
        }
    }
}


function restart(){
    this.game.state.start(this.game.state.current);
}