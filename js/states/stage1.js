
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

        //Allow collisions with walls
        this.map.setCollisionBetween(0, 999, true, this.wallLayer);


        /////////////////////////////////Zones/////////////////////////////////
        if(multiplayer){
            greenZone = new Game.colorZones(this, "green", 263, 130, 0.5, 1);
        }
        else{
            greenZone = new Game.colorZones(this, "green", 263, 130, 0.5, 0.5);
        }
        yellowZone = new Game.colorZones(this, "yellow", 800, 130, 0.5, 1);
        redZone = new Game.colorZones(this, "red", 800, 320, 0.5, 1);


        /////////////////////////////////Exit///////////////////////////////////
        exit = this.game.add.sprite(263, 320, "blueLight");
        exit.anchor.setTo(0.5,0.5);
        exit.scale.setTo(1.3,1.3);
        exit.alpha = 0.5;


        /////////////////////////////////Player/////////////////////////////////
        if(multiplayer){
            this.player = new Game.Player(this.game, 263, 110);
            this.game.physics.arcade.enable(this.player);
            this.game.add.existing(this.player);
            this.player.smoothed = false;
            this.player2 = new Game.Player2(this.game, 263, 150);
            this.game.physics.arcade.enable(this.player2);
            this.game.add.existing(this.player2);
            this.player2.smoothed = false;
        }
        else{
            this.player = new Game.Player(this.game, 263, 130);
            this.game.physics.arcade.enable(this.player);
            this.game.add.existing(this.player);
            this.player.smoothed = false;
        }
        

        /////////////////////////////////Camera/////////////////////////////////
        this.game.world.resize(2000, 2000); // create offset limits
        Game.game.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

        /////////////////////////////////Control Inputs////////////////////////////////
        altKey = this.game.input.keyboard.addKey(18);
        alt2Key = this.game.input.keyboard.addKey(39);
        rKey = this.game.input.keyboard.addKey(82);
        rKey.onDown.add(restart, this);


        /////////////////////////////////Control Menu/////////////////////////////////
        this.controlMenu = new Game.controlMenu(this);
        if(multiplayer){
            this.controlMenu2 = new Game.controlMenu2(this);
        }

        /////////////////////////////////Pause Menu////////////////////////////////
        this.pauseMenu = new Game.pauseMenu(this);

    }, 

 
    update : function(){ 
        
        ////////////////////////////////Player1/////////////////////////////////

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
            this.game.state.start("Stage1");
        }


        ////////////////////////////////Player2/////////////////////////////////

        if(multiplayer){
            this.game.physics.arcade.collide(this.player2, this.wallLayer);

            if(this.player2.overlap(greenZone.zone)){
                this.player2.green = true;
            }
            else{
                this.player2.green = false;
            }

            if(this.player2.overlap(yellowZone.zone)){
                this.player2.yellow = true;
            }
            else{
                this.player2.yellow = false;
            }

            if(this.player2.overlap(redZone.zone)){
                this.player2.red = true;
            }
            else{
                this.player2.red = false;
            }

            if(this.player2.overlap(exit)){
                this.game.state.start("Stage1");
            }
        }

        //mouse pointer coord for placing zones
        //console.log(this.input.activePointer.x, this.input.activePointer.y);
    }
}


function restart(){
    this.game.state.start(this.game.state.current);
}