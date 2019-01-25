

/////////////////////////////////Basic template for Bullets/////////////////////////////////

var Bullet = function (game, key) {

    Phaser.Sprite.call(this, game, 0, 0, key);

    this.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;

    this.anchor.set(0.5);

    this.checkWorldBounds = true;		
    this.outOfBoundsKill = true;
    this.exists = false;

    this.scaleSpeed = 0;

};


Bullet.prototype = Object.create(Phaser.Sprite.prototype);
Bullet.prototype.constructor = Bullet;


Bullet.prototype.fire = function (player, angle, speed, pointer) {

    this.reset(player.x, player.y);
    this.scale.set(1);

    var vecX = (pointer.x - player.x);
	var vecY = (pointer.y - player.y);
    var vecAngle = this.game.physics.arcade.angleBetween(player, pointer);

    this.rotation = vecAngle;

    this.body.velocity.x = Math.cos(vecAngle)*150;
    this.body.velocity.y = Math.sin(vecAngle)*150;
    
};


Bullet.prototype.update = function () {

    if (this.scaleSpeed > 0){
        this.scale.x += this.scaleSpeed;
        this.scale.y += this.scaleSpeed;
    }

};


/////////////////////////////////Single fire weapon/////////////////////////////////

var Weapon = {}

Weapon.SingleBullet = function (game) {

    Phaser.Group.call(this, game, game.world, 'Single Bullet', false, true, Phaser.Physics.ARCADE);

    this.nextFire = 0;
    this.fireRate = 250;

    for (var i = 0; i < 64; i++){
        this.add(new Bullet(game, 'bullet'), true);
    }

    return this;
};


Weapon.SingleBullet.prototype = Object.create(Phaser.Group.prototype);
Weapon.SingleBullet.prototype.constructor = Weapon.SingleBullet;


Weapon.SingleBullet.prototype.fire = function (source, pointer) {

    if (this.game.time.time < this.nextFire) { return; }

    var x = source.x + 10;
    var y = source.y + 10;

    this.getFirstExists(false).fire(source, 0, this.bulletSpeed, pointer);

    this.nextFire = this.game.time.time + this.fireRate;
};