
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

        //Load the map
        this.map = this.add.tilemap('room1');
        this.map.addTilesetImage('sci-fi-tiles','tiles_16x16');

        //Create layers
        this.backgroundLayer = this.map.createLayer('Ground');
        this.wallLayer = this.map.createLayer('Wall');

        //Allow collisions with walls
        this.map.setCollisionBetween(0, 999, true, this.wallLayer);

        //Create the player
        this.player = new Game.Player(this.game, 100, 100);
        this.game.physics.arcade.enable(this.player);
        this.game.add.existing(this.player);

        //Add the keyboard
        key = this.game.input.keyboard;
        this.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);
        
        //Add mouse buttons
        this.game.input.mouse.capture = true;

        //Add weapons
        this.weapon = new Weapon.SingleBullet(this.game);

        //Add text
        basicFont = this.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        this.game.add.image(15, 150, basicFont);
    }, 
 
    update : function(){ 

        //Check collisions between the player and walls
        this.game.physics.arcade.collide(this.player, this.wallLayer);

        //If a bullet collide a wall the callback function collisionHandler is triggered
        this.game.physics.arcade.collide(this.weapon, this.wallLayer, collisionHandler, null, this);

        //If input is left click
        console.log(this.game.input.activePointer.leftButton.isDown);
        if (this.game.input.activePointer.leftButton.isDown === true){
            console.log(this.game.input.activePointer.leftButton.isDown);
            //Shoot
            this.weapon.fire(this.player, this.game.input.mousePointer);
            //Write things
            basicFont.text = "wow 42";
            basicFont.text = "";
        }

        //Get mouse position, useful to place things at a certain place  
        basicFont.text("Mouse position\nx = " + Math.round(this.game.input.x) + "; y = " + Math.round(this.game.input.y));
    }
}

function collisionHandler(weapon, wallLayer){
    //Destroy the projectile after a collision
    weapon.kill();
}