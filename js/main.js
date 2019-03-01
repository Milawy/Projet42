var game = new Phaser.Game(1366, 768, Phaser.AUTO, 'Projet 42', this, false, false);

game.state.add("boot", boot);

game.state.start("boot");