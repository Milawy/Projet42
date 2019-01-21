var game = new Phaser.Game(256, 256, Phaser.AUTO);

game.state.add("boot", boot);

game.state.start("boot");