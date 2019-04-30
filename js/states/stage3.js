
/////////////////////////////////Global Var/////////////////////////////////

Game.Stage3 = function(){
 
};
 Game.Stage3.prototype = { 
 
 
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
        this.scale.setGameSize(1367*1.2, 800*1.2);
        //this.scale.setGameSize(2550, 1500);
        this.game.stage.disableVisibilityChange = true;

        //Bg color
        //this.game.stage.backgroundColor = "#FFE29C";


        /////////////////////////////////Map/////////////////////////////////
        //Load the map
        this.map = this.add.tilemap('stage3');
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
            greenZone = new Game.colorZones(this, "green", 120, 955, 1, 0.5);
            greenZone2 = new Game.colorZones(this, "green", 565, 580, 1, 0.7);
            //greenZone3 = new Game.colorZones(this, "green", 1145, 130, 1, 1);
        }
        else{
            greenZone = new Game.colorZones(this, "green", 120, 955, 0.5, 0.5);
            greenZone2 = new Game.colorZones(this, "green", 565, 580, 1, 0.7);
            greenZone3 = new Game.colorZones(this, "green", 1145, 130, 1, 1);
        }
        yellowZone = new Game.colorZones(this, "yellow", 485, 915, 1, 0.5);
        yellowZone2 = new Game.colorZones(this, "yellow", 950, 495, 1, 0.7);
        redZone = new Game.colorZones(this, "red", 850, 980, 1, 0.8);
        redZone2 = new Game.colorZones(this, "red", 720, 470, 0.8, 0.5);
        blueZone = new Game.colorZones(this, "blue", 855, 125, 0.5, 1);
        blueZone2 = new Game.colorZones(this, "blue", 1145, 130, 1, 1);


        /////////////////////////////////Exit///////////////////////////////////
        exit = this.game.add.sprite(630, 110, "blueLight");
        exit.anchor.setTo(0.5, 0.5);
        exit.scale.setTo(1.3, 1.3);
        exit.alpha = 0.5;
        /*exit2 = this.game.add.sprite(1500, 128, "blueLight");
        exit2.anchor.setTo(0.5, 0.5);
        exit2.scale.setTo(1.3, 1.3);
        exit2.alpha = 0.5;*/


        ////////////////////////////////Player//////////////////////////////////
        if(multiplayer){
            this.player = new Game.Player(this.game, 120, 955);
            this.game.physics.arcade.enable(this.player);
            this.game.add.existing(this.player);
            this.player.smoothed = false;
            this.player2 = new Game.Player2(this.game, 120, 955);
            this.game.physics.arcade.enable(this.player2);
            this.game.add.existing(this.player2);
            this.player2.smoothed = false;
        }
        else{
            this.player = new Game.Player(this.game, 120, 955);
            this.game.physics.arcade.enable(this.player);
            this.game.add.existing(this.player);
            this.player.smoothed = false;
        }
        

        /////////////////////////////////Camera/////////////////////////////////
        this.game.world.resize(2000, 1150); // create offset limits
        this.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.009);


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
        star = new Game.star(this, 795, 225);
        this.game.physics.arcade.enable(star);
        this.game.add.existing(star);
        star2 = new Game.star(this, 835, 865);
        this.game.physics.arcade.enable(star2);
        this.game.add.existing(star2);


        /////////////////////////////////Pause Menu////////////////////////////////
        this.pauseMenu = new Game.pauseMenu(this);


        /////////////////////////////////Ready Icon////////////////////////////////
        readyP1 = this.game.add.sprite(this.game.camera.view.width - 495, this.game.camera.view.height - 55, "readyIcon");
        readyP1.scale.setTo(0.2,0.2);
        readyP1.anchor.setTo(0.5,0.5);
        readyP1.visible = false;
        readyP1.fixedToCamera = true;
        readyP2 = this.game.add.sprite(this.game.camera.view.width - 440, this.game.camera.view.height - 55, "readyIcon");
        readyP2.scale.setTo(0.2,0.2);
        readyP2.anchor.setTo(0.5,0.5);
        readyP2.visible = false;
        readyP2.fixedToCamera = true;

        ////////////////////////////////Timer////////////////////////////////
        timer = this.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        timerBox = this.game.add.image(this.game.camera.view.width/2 + 42, 42, timer);
        timerBox.anchor.setTo(0.5,0.5);
        timerBox.scale.setTo(2.5,2.5);
        timerBox.fixedToCamera = true;
        timer.text = "0"
        this.startingTime = 0;
    }, 

 
    update : function(){

        ////////////////////////////////Player1/////////////////////////////////

        //Check collisions between the player and walls
        this.game.physics.arcade.collide(this.player, this.wallLayer);

        if(this.player.overlap(greenZone.zone) || this.player.overlap(greenZone2.zone)){
            this.player.green = true;
        }
        else{
            this.player.green = false;
        }

        if(this.player.overlap(yellowZone.zone) || this.player.overlap(yellowZone2.zone)){
            this.player.yellow = true;
        }
        else{
            this.player.yellow = false;
        }

        if(this.player.overlap(redZone.zone) || this.player.overlap(redZone2.zone)){
            this.player.red = true;
        }
        else{
            this.player.red = false;
        }

        if(this.player.overlap(blueZone.zone) || this.player.overlap(blueZone2.zone)){
            this.player.blue = true;
        }
        else{
            this.player.blue = false;
        }

        if(this.player.overlap(exit)){

            var playerName = prompt("Player 1 Won ! Enter your name", "name");
            const person = {
                name : String(playerName),
                stage : "stage3",
                time : String(timer.text),
            }
            const id = window.localStorage.length;
            window.localStorage.setItem(String(id), JSON.stringify(person));
            this.state.start('ScoreScreen4');
        }

        ////////////////////////////////Player2/////////////////////////////////

        if(multiplayer){

            this.game.physics.arcade.collide(this.player2, this.wallLayer);
            this.game.physics.arcade.collide(this.player, this.player2);

            if(this.player2.overlap(greenZone.zone) || this.player2.overlap(greenZone2.zone)){
                this.player2.green = true;
            }
            else{
                this.player2.green = false;
            }

            if(this.player2.overlap(yellowZone.zone) || this.player2.overlap(yellowZone2.zone)){
                this.player2.yellow = true;
            }
            else{
                this.player2.yellow = false;
            }

            if(this.player2.overlap(redZone.zone) || this.player2.overlap(redZone2.zone)){
                this.player2.red = true;
            }
            else{
                this.player2.red = false;
            }

            if(this.player2.overlap(blueZone.zone) || this.player2.overlap(blueZone2.zone)){
                this.player2.blue = true;
            }
            else{
                this.player2.blue = false;
            }

            if(this.player2.overlap(exit)){
                var playerName = prompt("Player 2 Won ! Enter your name", "name");
                const person = {
                    name : String(playerName),
                    stage : "stage3",
                    time : String(timer.text),
                }
                const id = window.localStorage.length;
                window.localStorage.setItem(String(id), JSON.stringify(person));
                this.state.start('ScoreScreen4');
            }

            if(this.player.P1Ready && this.player2.P2Ready){
                this.player.stop = false;
                this.player.P1Ready = false;
                this.player2.stop = false;
                this.player2.P2Ready = false;
                readyP1.visible = true;
                readyP2.visible = true;
                this.startingTime = this.game.time.time;
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
            this.startingTime = this.game.time.time;
        }

        if(this.startingTime != 0){
            timer.text = ((this.game.time.time - this.startingTime)/1000).toFixed(2);
        }

        //mouse pointer coord for placing zones
        if(this.game.input.activePointer.isDown){
            console.log(this.input.activePointer.x, this.input.activePointer.y);
        }
    }
}

function restart(){
    this.game.state.start(this.game.state.current);
}