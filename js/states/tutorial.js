
/////////////////////////////////Global Var/////////////////////////////////

Game.Tutorial= function(){
 
};
 Game.Tutorial.prototype = { 
 
 
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
        this.scale.setGameSize(940, 550);
        this.game.stage.disableVisibilityChange = true;

        //Bg color
        //this.game.stage.backgroundColor = "#FFE29C";


        /////////////////////////////////Map/////////////////////////////////
        //Load the map
        this.map = this.add.tilemap('tutorial1');
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
            greenZone = new Game.colorZones(this, "green", 256, 140, 1, 0.5);
        }
        else{
            greenZone = new Game.colorZones(this, "green", 256, 140, 0.5, 0.5);
        }
        yellowZone = new Game.colorZones(this, "yellow", 256, 355, 1, 1);
        redZone = new Game.colorZones(this, "red", 773, 355, 1, 1);


        /////////////////////////////////Exit///////////////////////////////////
        exit = this.game.add.sprite(773, 125, "blueLight");
        exit.anchor.setTo(0.5, 0.5);
        exit.scale.setTo(1.3, 1.3);
        exit.alpha = 0.5;


        ////////////////////////////////Player//////////////////////////////////
        if(multiplayer){
            this.player = new Game.Player(this.game, 235, 140);
            this.game.physics.arcade.enable(this.player);
            this.game.add.existing(this.player);
            this.player.smoothed = false;
            this.player2 = new Game.Player2(this.game, 275, 140);
            this.game.physics.arcade.enable(this.player2);
            this.game.add.existing(this.player2);
            this.player2.smoothed = false;
        }
        else{
            this.player = new Game.Player(this.game, 256, 140);
            this.game.physics.arcade.enable(this.player);
            this.game.add.existing(this.player);
            this.player.smoothed = false;
        }
        

        /////////////////////////////////Camera/////////////////////////////////
        this.game.world.resize(2000, 2000); // create offset limits
        this.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);


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

        /////////////////////////////////Star///////////////////////////////////
        star = new Game.star(this, 300, 200, 1, 1);
        this.game.physics.arcade.enable(star);
        this.game.add.existing(star);


        /////////////////////////////////Pause Menu////////////////////////////////
        this.pauseMenu = new Game.pauseMenu(this);


        /////////////////////////////////Ready Icon////////////////////////////////
        readyP1 = this.game.add.sprite(this.game.camera.view.width - 440, this.game.camera.view.height - 55, "readyIcon");
        readyP1.scale.setTo(0.2,0.2);
        readyP1.anchor.setTo(0.5,0.5);
        readyP1.visible = false;
        readyP1.fixedToCamera = true;
        readyP2 = this.game.add.sprite(this.game.camera.view.width - 495, this.game.camera.view.height - 55, "readyIcon");
        readyP2.scale.setTo(0.2,0.2);
        readyP2.anchor.setTo(0.5,0.5);
        readyP2.visible = false;
        readyP2.fixedToCamera = true;

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

            if(this.player.P1Ready && this.player2.P2Ready){
                this.player.stop = false;
                this.player.P1Ready = false;
                this.player2.stop = false;
                this.player2.P2Ready = false;
                readyP1.visible = true;
                readyP2.visible = true;
            }

            if(this.player.P1Ready){
                readyP1.visible = true;
            }
            if(this.player2.P2Ready){
                readyP2.visible = true;
            }
        }
        else if(this.player.P1Ready){
            this.player.stop = false;
            this.player.P1Ready = false;
            readyP1.visible = true;
        }

        //mouse pointer coord for placing zones
        //console.log(this.input.activePointer.x, this.input.activePointer.y);
    }
}

function restart(){
    this.game.state.start(this.game.state.current);
}