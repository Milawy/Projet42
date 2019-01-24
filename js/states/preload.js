Game.Preloader = function(){
  //Here are the variables that we'll use in that group code
  //We'll display the loading progression of game data
  this.loadtext; //Text variable
};
 
Game.Preload = {
 
  preload : function(){
   //Nothing to preload now
  },
 
  create : function(){

   /////////////////////////////////Loading screen/////////////////////////////////

   this.loadText = this.add.text(10, 100, 'Chargement', { fill: '#ffffff' });
   this.load.onFileComplete.add(this.fileComplete, this);
   this.load.onLoadComplete.add(this.loadComplete, this);
 
   //We call the loading function to load files
   this.startLoad();
 
  },
 
 startLoad: function(){
  
  this.load.tilemap('room1', '/assets/map/room1.json', null, Phaser.Tilemap.TILED_JSON);
  this.load.spritesheet('player', 'assets/sprites/hero.png', 16, 16);
  this.load.image('tiles_16x16', 'assets/img/sci-fi-tiles.png');
  this.load.image('bullet', 'assets/img/bullet1.png');
  this.load.image('basicFont', 'assets/font/willFont42.png');

  this.load.start();
 
 },
 
 update : function(){
   
    //Useless for now
 
 },
 
 
  //Now define functions
  
  fileComplete: function ( progress, cacheKey, success, totalLoaded, totalFiles) {
  
     //Everytime we load a new file, we update the "loadText" variable
     this.loadText.setText("Fichiers chargés : " + progress + "% - " + totalLoaded + " / " + totalFiles);
 
  },
 
  loadComplete : function(){
     //Everything's loaded, launch the game
     this.state.start('Game');
  }
}