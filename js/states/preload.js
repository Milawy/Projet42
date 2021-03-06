Game.Preloader = function(){
  this.loadtext;
};
 
Game.Preload = {
 
  preload : function(){

    this.load.image('loading', 'assets/img/loading.png');
  },
 
  create : function(){

   /////////////////////////////////Loading screen/////////////////////////////////

   var loadingBar = this.add.sprite(308, this.game.height/2 - 150, "loading");
   this.load.setPreloadSprite(loadingBar);

   this.load.onLoadComplete.add(this.loadComplete, this);
 
   //We call the loading function to load files
   this.startLoad();
 
  },
 
 startLoad: function(){


  // Tilemap
  this.load.tilemap('tutorial1', '/assets/map/tutorial1.json', null, Phaser.Tilemap.TILED_JSON);
  this.load.tilemap('stage1', '/assets/map/stage1.json', null, Phaser.Tilemap.TILED_JSON);
  this.load.tilemap('stage2', '/assets/map/stage2.json', null, Phaser.Tilemap.TILED_JSON);
  this.load.tilemap('stage3', '/assets/map/stage3.json', null, Phaser.Tilemap.TILED_JSON);


  // SpriteSheet
  this.load.spritesheet('greenButton', 'assets/sprites/greenButton.png', 190, 49);
  this.load.spritesheet('bot', 'assets/sprites/robot_full.png', 36, 39);
  this.load.spritesheet('bot2', 'assets/sprites/robot_full_red.png', 36, 39);
  this.load.spritesheet('star', 'assets/img/star.png', 240, 256);
  this.load.spritesheet('screen', 'assets/img/EcranEcritures.png', 43, 34);
  this.load.spritesheet('panel', 'assets/img/PanneauLeds.png', 43, 32);


  // Image
  this.load.image('tileset', 'assets/img/tileset.png');
  this.load.image('basicFont', 'assets/font/willFont42.png');
  this.load.image('mainTitle', 'assets/img/mainTitle.png');
  this.load.image('fullscreenButton', 'assets/img/fullscreenButton.png');
  this.load.image('fullscreenOffButton', 'assets/img/fullscreenOffButton.png');
  this.load.image('upArrow', 'assets/img/upArrow.png');
  this.load.image('downArrow', 'assets/img/downArrow.png');
  this.load.image('leftArrow', 'assets/img/leftArrow.png');
  this.load.image('rightArrow', 'assets/img/rightArrow.png');
  this.load.image('greenMenu', 'assets/img/green_panel.png');
  this.load.image('yellowMenu', 'assets/img/yellow_panel.png');
  this.load.image('redMenu', 'assets/img/red_panel.png');
  this.load.image('blueMenu', 'assets/img/blue_panel.png');
  this.load.image('greenZone', 'assets/img/greenZone.png');
  this.load.image('greyContour', 'assets/img/grey_contour.png');
  this.load.image('exitFlag', 'assets/img/theEnd.png');
  this.load.image('pauseIcon', 'assets/img/pauseIcon.png');
  this.load.image('soundOn', 'assets/img/soundOn.png');
  this.load.image('soundOff', 'assets/img/soundOff.png');
  this.load.image('exit', 'assets/img/exit.png');
  this.load.image('stoneBoard', 'assets/img/stoneBoard.png');
  this.load.image('restartFont', 'assets/img/restartFont.png');
  this.load.image('readyIcon', 'assets/img/ready.png');
  this.load.image('keyboardP1', 'assets/img/keyboardP1.png');
  this.load.image('keyboardP2', 'assets/img/keyboardP2.png');
  this.load.image('title', 'assets/img/title.png');


  // Audio
  this.load.audio('maintheme', 'assets/sound/moderator-funk-for-food.mp3');
  this.load.audio('starSound', 'assets/sound/portal.mp3');
  this.load.audio('win', 'assets/sound/win.mp3');


  this.load.start();
 
 },
 
 loadUpdate : function(){
       
 },
 
  loadComplete : function(){
     //Everything's loaded, launch the game
     this.state.start('Menu');
  }
}