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
  
  this.load.tilemap('room1', '/assets/map/room1.json', null, Phaser.Tilemap.TILED_JSON);

  this.load.spritesheet('player', 'assets/sprites/hero.png', 16, 16);
  this.load.spritesheet('medusa', 'assets/sprites/medusa.png', 46, 64);
  this.load.spritesheet('playButton', 'assets/img/playButtonV2.png', 48, 21);

  this.load.image('tiles_16x16', 'assets/img/sci-fi-tiles.png');
  this.load.image('bullet', 'assets/img/bullet1.png');
  this.load.image('basicFont', 'assets/font/willFont42.png');
  this.load.image('menuBackground', 'assets/img/startScreen.png');

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