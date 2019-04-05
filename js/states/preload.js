Game.Preloader = function(){
  //Here are the variables that we'll use in that group code
  //We'll display the loading progression of game data
  this.loadtext; //Text variable
};
 
Game.Preload = {
 
  preload : function(){

    this.load.image('loading', 'assets/img/loading.png');
  },
 
  create : function(){

   /////////////////////////////////Loading screen/////////////////////////////////

   var loadingBar = this.add.sprite(0, 0, "loading");
   this.load.setPreloadSprite(loadingBar);

   this.load.onLoadComplete.add(this.loadComplete, this);
 
   //We call the loading function to load files
   this.startLoad();
 
  },
 
 startLoad: function(){
  

  // Tilemap
  this.load.tilemap('testRoom', '/assets/map/testRoom.json', null, Phaser.Tilemap.TILED_JSON);
  this.load.tilemap('bigRoom1', '/assets/map/bigRoom1.json', null, Phaser.Tilemap.TILED_JSON);
  this.load.tilemap('bigRoom2', '/assets/map/map4.json', null, Phaser.Tilemap.TILED_JSON);
  this.load.tilemap('couloir', '/assets/map/couloir.json', null, Phaser.Tilemap.TILED_JSON);
  this.load.tilemap('room1newTile', '/assets/map/Room1newTile2.json', null, Phaser.Tilemap.TILED_JSON);


  // SpriteSheet
  this.load.spritesheet('player', 'assets/sprites/hero.png', 16, 16);
  this.load.spritesheet('door', 'assets/img/door.png', 16, 16);
  this.load.spritesheet('greenButton', 'assets/sprites/greenButton.png', 190, 49);
  this.load.spritesheet('bot', 'assets/sprites/robot_full.png', 36, 39);



  // Image
  this.load.image('tiles_16x16', 'assets/img/sci-fi-tiles.png');
  this.load.image('tileset', 'assets/img/tileset.png');
  this.load.image('bullet', 'assets/img/bullet1.png');
  this.load.image('basicFont', 'assets/font/willFont42.png');
  this.load.image('mainTitle', 'assets/img/mainTitle.png');
  this.load.image('fullscreenButton', 'assets/img/fullscreenButton.png');
  this.load.image('fullscreenOffButton', 'assets/img/fullscreenOffButton.png');
  this.load.image('upArrow', 'assets/img/upArrow.png');
  this.load.image('downArrow', 'assets/img/downArrow.png');
  this.load.image('leftArrow', 'assets/img/leftArrow.png');
  this.load.image('rightArrow', 'assets/img/rightArrow.png');
  this.load.image('fontGreenRect', 'assets/img/fontGreenRect.png');
  this.load.image('blueLight', 'assets/img/blueLight.png');
  


  // Audio
  this.load.audio('mainTheme', 'assets/sound/comeAndGetYourLove.mp3');


  this.load.start();
 
 },
 
 update : function(){
   
    //Useless for now
 
 },
 
  loadComplete : function(){
     //Everything's loaded, launch the game
     this.state.start('Menu');
  }
}