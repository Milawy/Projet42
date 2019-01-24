

/////////////////////////////////Global Var/////////////////////////////////

var key, font;

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
        this.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);

        //add weapons
        this.weapon = new Weapon.SingleBullet(this.game);

        //add text
        basicFont = this.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        this.game.add.image(15, 150, basicFont);
    }, 
 
    update : function(){ 

        //check collisions between the player and walls
        this.game.physics.arcade.collide(this.player, this.wallLayer);

        //if a bullet collide a wall the callback function collisionHandler is triggered
        this.game.physics.arcade.collide(this.weapon, this.wallLayer, collisionHandler, null, this);

        if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){

            this.weapon.fire(this.player, this.game.input.mousePointer);
            
            basicFont.text = "wow 42";    
            basicFont.text = "";
        }

        //Test get position, useful to place things at a certain place  

        //text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));
    }
}

function collisionHandler(weapon, wallLayer){

    weapon.kill();
}