
/////////////////////////////////Global Var/////////////////////////////////

var key, pauseButton, fireButton;

Game.Game= function(){
 
};
 Game.Game.prototype = { 
 
 
    preload : function(){ 
      
        
    }, 
 
    create : function(){


        this.game.renderer.renderSession.roundPixels = true; //allow pixel art
        this.physics.startSystem(Phaser.Physics.ARCADE);


        /////////////////////////////////Map/////////////////////////////////
        //Load the map
        this.map = this.add.tilemap('room1');
        this.map.addTilesetImage('sci-fi-tiles','tiles_16x16');

        //Create layers
        this.backgroundLayer = this.map.createLayer('Ground');
        this.wallLayer = this.map.createLayer('Wall');

        //Allow collisions with walls
        this.map.setCollisionBetween(0, 999, true, this.wallLayer);


        /////////////////////////////////Player/////////////////////////////////
        //Create the player
        this.player = new Game.Player(this.game, 112, 224);
        this.game.physics.arcade.enable(this.player);
        this.game.add.existing(this.player);

        //WORK IN PROGRESS
        /*//Create medusa
        this.medusa = new Game.Medusa(this.game, 150, 150);
        this.game.physics.arcade.enable(this.medusa);
        this.game.add.existing(this.medusa);*/


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
        pauseButton = this.game.input.keyboard.addKey(27);
        pauseButton.onDown.add(unpause , this);
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


function unpause(){
    
    if(this.game.paused == true){

        this.game.paused = false;
        basicFont.text = "";
    }
    else {

        this.game.paused = true;
        basicFont.text = "Pause";
    }
}