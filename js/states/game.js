
/////////////////////////////////Global Var/////////////////////////////////

var key, pauseButton, fireButton;

Game.Game= function(){
 
};
 Game.Game.prototype = { 
 
 
    preload : function(){ 
        
    }, 
 
    create : function(){


        /////////////////////////////////Scaling & Render/////////////////////
        //Scaling time
        this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
        this.game.scale.setGameSize(350, 205);
        this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

        //Render time
        this.game.renderer.renderSession.roundPixels = true; //allow pixel art
        Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);
        this.physics.startSystem(Phaser.Physics.ARCADE);


        /////////////////////////////////Map/////////////////////////////////
        //Load the map
        this.map = this.add.tilemap('couloir');
        this.map.addTilesetImage('sci-fi-tiles','tiles_16x16');

        //Create layers
        this.backgroundLayer = this.map.createLayer('Ground');
        this.wallLayer = this.map.createLayer('Wall');

        //Allow collisions with walls
        this.map.setCollisionBetween(0, 999, true, this.wallLayer);


        /////////////////////////////////Player/////////////////////////////////
        //Create the player
        this.player = new Game.Player(this.game, 22, 22);
        this.game.physics.arcade.enable(this.player);
        this.game.add.existing(this.player);

        
        /////////////////////////////////Camera/////////////////////////////////
        this.game.world.resize(900, 300); // create offset limits
        Game.game.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
        console.log(Game.game.camera);


        /////////////////////////////////Weapon/////////////////////////////////
        //add the keyboard and inputs
        key = this.game.input.keyboard;
        fireButton = this.game.input.activePointer.leftButton;
        this.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);

        //add weapons
        this.weapon = new Weapon.SingleBullet(this.game);


        /////////////////////////////////Dialogue/////////////////////////////////
        //add text
        basicFont = this.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        this.game.add.image(this.game.world.centerX - 40, this.game.world.centerY - 8, basicFont);


        /////////////////////////////////Pause Menu/////////////////////////////////
        //set event listener to pause/unpause the game
        
        pauseMessage = this.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        pauseButton = this.game.input.keyboard.addKey(27);
        pauseButton.onDown.add(pause , this);
        //pauseButton.anchor.x = 0.5;
        //pauseButton.anchor.y = 0.5;
        
    }, 

 
    update : function(){ 
        
        //Check collisions between the player and walls
        this.game.physics.arcade.collide(this.player, this.wallLayer);

        //If a bullet collide a wall the callback function collisionHandler is triggered
        this.game.physics.arcade.collide(this.weapon, this.wallLayer, collisionHandler, null, this);

        if (fireButton.isDown){

            this.weapon.fire(this.player, this.game.input.mousePointer);
        }

    }
}


function collisionHandler(weapon, wallLayer){

    weapon.kill();
}


function pause(){
    
    if(this.game.paused == true){

        this.game.paused = false;
        //pauseMessage.text = "";
        message.destroy();

    }
    else {

        this.game.paused = true;
        message = this.game.add.image(this.player.x - 50, this.player.y - 50, pauseMessage);
        pauseMessage.text = "Pause";

    }
}