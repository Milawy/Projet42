

/////////////////////////////////Global Var/////////////////////////////////

var key;

Game.Game= function(){
 
};
 Game.Game.prototype = { 
 
 
    preload : function(){ 
      
        
    }, 
 
    create : function(){

        this.game.renderer.renderSession.roundPixels = true; //allow pixel art

        this.physics.startSystem(Phaser.Physics.ARCADE);

        //load the map
        this.map = this.add.tilemap('room1');
        this.map.addTilesetImage('sci-fi-tiles','tiles_16x16');

        //create layers
        this.backgroundLayer = this.map.createLayer('Ground');
        this.wallLayer = this.map.createLayer('Wall');

        //allow collision with walls
        this.map.setCollisionBetween(0, 999, true, this.wallLayer);

        //create the player
        this.player = new Game.Player(this.game, 100, 100);
        this.game.physics.arcade.enable(this.player);
        this.game.add.existing(this.player);

        //add the keyboard
        key = this.game.input.keyboard;

    }, 
 
    update : function(){ 

        //check collisions
        this.game.physics.arcade.collide(this.player, this.wallLayer);


        /////////////////////////////////Movements/////////////////////////////////

        if (key.isDown(90) && !key.isDown(81) && !key.isDown(83) && !key.isDown(68)){
            this.player.move("up");
        }
        if (key.isDown(83) && !key.isDown(90) && !key.isDown(81) && !key.isDown(68)){
            this.player.move("down");
        }
        if (key.isDown(68) && !key.isDown(90) && !key.isDown(83) && !key.isDown(81)){
            this.player.move("right");
        }
        if (key.isDown(81) && !key.isDown(90) && !key.isDown(83) && !key.isDown(68)){
            this.player.move("left");
        }
        if (key.isDown(81) && key.isDown(90)){
            this.player.move("upLeft");
        }
        if (key.isDown(81) && key.isDown(83)){
            this.player.move("downLeft");
        }
        if (key.isDown(68) && key.isDown(90)){
            this.player.move("upRight");
        }
        if (key.isDown(68) && key.isDown(83)){
            this.player.move("downRight");
        }
        if (!key.isDown(81) && !key.isDown(68) && !key.isDown(83) && !key.isDown(90)){
            this.player.move("stand");
        }
    }
}