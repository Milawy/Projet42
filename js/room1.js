





//////////////////////////////////Phaser 3 version//////////////////////////
/*
/////////////////////////////////Variables/////////////////////////////////
let player;
let cursor;
var fireRate = 350;
var T = -1;
var clock;
var wallLayer;
var bulletSpeed = 250;

class room1 extends Phaser.Scene {

	constructor() {
		super( {key : "room1"} );
		this.currentScene;
	};

	preload () {

        this.load.image('tiles', '../assets/img/sci-fi-tiles.png');
        this.load.tilemapTiledJSON('map', '../assets/map/room1.json');
        this.load.image('bullet', '../assets/img/bullet1.png')

        this.load.spritesheet('hero', 
        	'../assets/sprites/hero.png',
        	{ frameWidth: 16, frameHeight: 16 }
    	);
    }


    create () {
        
        /////////////////////////////////Room1 creation/////////////////////////////////
	    const map = this.make.tilemap({ key: "map" });

	  	const tileset = map.addTilesetImage("sci-fi-tiles", "tiles");

	  	wallLayer = map.createStaticLayer("Wall", tileset, 0, 0);
	  	const groundLayer = map.createStaticLayer("Ground", tileset, 0, 0);

	  	wallLayer.setCollisionByProperty({ collides: true });


		/////////////////////////////////Player creation/////////////////////////////////
		player = this.physics.add.sprite(100, 100, 'hero');
		this.physics.add.collider(player, wallLayer);
		
		//animations
		this.anims.create({
		    key: 'stop',
		    frames: this.anims.generateFrameNumbers('hero', { start: 0, end: 0 }),
		    frameRate: 20,
		    repeat: -1
		});

		this.anims.create({
		    key: 'side',
		    frames: this.anims.generateFrameNumbers('hero', { start: 0, end: 2 }),
		    frameRate: 20,
		    repeat: -1
		});

		this.anims.create({
		    key: 'up',
		    frames: this.anims.generateFrameNumbers('hero', { start: 3, end: 5 }),
		    frameRate: 20,
		    repeat: -1
		});

		this.anims.create({
		    key: 'down',
		    frames: this.anims.generateFrameNumbers('hero', { start: 6, end: 8 }),
		    frameRate: 20,
		    repeat: -1
		});


		/////////////////////////////////Player inputs/////////////////////////////////
		this.key_Z = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
		this.key_Q = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
		this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
		this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
		this.fireButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);


		/////////////////////////////////Bullet class/////////////////////////////////
		this.bullets = this.physics.add.group({
		    defaultKey: 'bullet',
		});

		this.physics.add.collider(this.bullets, wallLayer, bulletCollideWithWall);
    }


  	update (time, delta){

  		/////////////////////////////////Player Movements/////////////////////////////////
  		player.setVelocityX(0);
		player.setVelocityY(0);

		//basic left & right
		if (this.key_Q.isDown && this.key_D.isUp && this.key_Z.isUp && this.key_S.isUp){
		    player.setVelocityX(-160);
		    player.flipX = false;
		    player.anims.play('side', true);
		}
		else if (this.key_D.isDown && this.key_Q.isUp && this.key_Z.isUp && this.key_S.isUp){
		    player.setVelocityX(160);
		    player.flipX = true;
		    player.anims.play('side', true);
		}

		//basic up & down
		if (this.key_Z.isDown && this.key_Q.isUp && this.key_D.isUp && this.key_S.isUp) {
		    player.setVelocityY(-160);
		    player.flipX = false;
		    player.anims.play('up', true);
		}
		if (this.key_S.isDown && this.key_Q.isUp && this.key_Z.isUp && this.key_D.isUp) {
		    player.body.setVelocityY(160);
		    player.flipX = false;
		    player.anims.play('down', true);
		}

		if(this.key_Z.isUp && this.key_Q.isUp && this.key_S.isUp && this.key_D.isUp){
			player.anims.play('stop', true);
		}

		//up right diag
		if(this.key_Z.isDown && this.key_D.isDown){
			player.setVelocityY(-160);
			player.setVelocityX(160);
			player.flipX = false;
		    player.anims.play('up', true);
		}

		//up left diag
		if(this.key_Z.isDown && this.key_Q.isDown){
			player.setVelocityY(-160);
			player.setVelocityX(-160);
			player.flipX = false;
		    player.anims.play('up', true);
		}

		//down right diag
		if(this.key_S.isDown && this.key_D.isDown){
			player.setVelocityY(160);
			player.setVelocityX(160);
			player.flipX = false;
		    player.anims.play('down', true);
		}

		//down left diag
		if(this.key_S.isDown && this.key_Q.isDown){
			player.setVelocityY(160);
			player.setVelocityX(-160);
			player.flipX = false;
		    player.anims.play('down', true);
		}

		//pour que la diagonale ne soit pas plus rapide
		player.body.velocity.normalize().scale(100);

		
		/////////////////////////////////Fire Rate/////////////////////////////////

		if (this.fireButton.isDown){

			if(T == -1){
        		fire(player, this.bullets, this.input.activePointer);
        		T = 0;
        	}

        	T += delta;

        	if(T > fireRate){
        		fire(player, this.bullets, this.input.activePointer);
        		T = 0;
        	}
    	}

    	if(this.fireButton.isUp){
    		T = -1;
    	}

	}

};


function fire(player, bullets, pointer){
 
    let bullet = bullets.get(player.x, player.y)

    var vec = new Phaser.Math.Vector2((pointer.x - player.x), (pointer.y - player.y));
    var vecAngle = Phaser.Math.Angle.Between(player.x, player.y, pointer.x, pointer.y);

 	bullet.rotation = vecAngle;
    bullet.setActive(true);
    bullet.setVisible(true);
    bullet.body.velocity.x = Math.cos(vecAngle)*bulletSpeed;
    bullet.body.velocity.y = Math.sin(vecAngle)*bulletSpeed;

}

function bulletCollideWithWall(bullet, wallLayer){
	bullet.setActive(false);
    bullet.setVisible(false);
}*/
