Dans game/update :
text.setText('Bitmap Fonts!\nx: ' + Math.round(game.input.x) + ' y: ' + Math.round(game.input.y));

////////////////////////////////////////////////////////////////////////////////////////////////////////

var transparent = false;
var antialias = false;

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-testotests', this, transparent, antialias);

function preload() {

    game.load.image('grill', 'assets/pics/grillSausageTest.png');

}

function create() {

    game.stage.backgroundColor = '#0076a3';

    var sprite = game.add.sprite(32, -100, 'grill');
    sprite.scale.set(4);

}

function render () {

    game.debug.text("Anti-alias: " + game.antialias, 10, 32);
    // game.debug.text("Anti-alias: " + Phaser.Canvas.getSmoothingEnabled(game.context), 10, 32);
    // game.debug.text("Anti-alias: " + game.renderer.renderSession.smoothProperty, 10, 32);

}