

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

        this.weapon = new Weapon.SingleBullet(this.game);

        this.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);

    }, 
 
    update : function(){ 

        //check collisions
        this.game.physics.arcade.collide(this.player, this.wallLayer);

        if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){

            this.weapon.fire(this.player, this.game.input.mousePointer);
        }

    }
}