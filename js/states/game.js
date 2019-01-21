var key;

Game.Game= function(){
 
};
 Game.Game.prototype = { 
 
 
    preload : function(){ 
      
        
    }, 
 
    create : function(){
        
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.map = this.add.tilemap('room1');

        this.map.addTilesetImage('sci-fi-tiles','tiles_16x16');

        this.backgroundLayer = this.map.createLayer('Ground');
        this.wallLayer = this.map.createLayer('Wall');

        this.map.setCollisionBetween(0, 999, true, this.wallLayer);

        this.player = new Game.Player(this.game, 100, 100);

        this.game.physics.arcade.enable(this.player);
        this.game.add.existing(this.player);

        key = this.game.input.keyboard;

    }, 
 
    update : function(){ 

        //check collisions
        this.game.physics.arcade.collide(this.player, this.wallLayer);

        if (key.isDown(90)){
            this.player.move("up");
        }
        if (key.isDown(83)){
            this.player.move("down");
        }
        if (key.isDown(68)){
            this.player.move("right");
        }
        if (key.isDown(81)){
            this.player.move("left");
        }
        if (!key.isDown(81) && !key.isDown(68) && !key.isDown(83) && !key.isDown(90)){
            this.player.move("stand");
        }
    }
}


////////////////////////////Phaser 3 version////////////////////////////
/*var config = {
    type: Phaser.AUTO,
    width: 256,
    height: 256,
    zoom: 3,
    pixelArt: true,
    scene: [ room1 ],
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 }, // Top down game, so no gravity
            debug: false
        }
    }
};

let game = new Phaser.Game(config);*/

