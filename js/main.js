var game = new Phaser.Game(256, 256, Phaser.AUTO, 'Projet 42', this, false, false);

game.state.add("boot", boot);

game.state.start("boot");