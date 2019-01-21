Game.Preloader = function(){
  // ici les variables que nous allons utiliser dans cet groupe de code
  // nous allons afficher la progression du chargement des données du jeu
  this.loadtext; // variable de texte
};
 
Game.Preload = {
 
  preload : function(){
   // aucune ressource à précharger pour cet état
  },
 
  create : function(){
   //nous ajoutons au départ le texte "chargement", à la position x 10 et y 100, et de couleur #fff i.e blanc
   this.loadText = this.add.text(10, 100, 'Chargement', { fill: '#ffffff' });
   //A chaque chargement de fichier nous appelons la fonction fileComplete que nous allons définir plus loin
   this.load.onFileComplete.add(this.fileComplete, this);
   //lorsque toutes les fichiers seront chargés, nous appelons la fonction loadComplete
   this.load.onLoadComplete.add(this.loadComplete, this);
 
   //on appelle la fonction qui va définir le chargement des fichiers
   this.startLoad();
 
  },
 
 startLoad: function(){
  //ici nous indiquons tous les fichiers que nous souhaitons charger pour notre jeu
  //et leur assignons à chacun un nom unique par lequel nous allons les référencer pour les utiliser
  this.load.tilemap('room1', '/assets/map/room1.json', null, Phaser.Tilemap.TILED_JSON);
  this.load.image('tiles_16x16', 'assets/img/sci-fi-tiles.png');
  this.load.spritesheet('player', 'assets/sprites/hero.png', 16, 16);
  //on lance le chargement
  this.load.start();
 
 },
 
 update : function(){
   
    //n'est pas utile pour cet état, nous la definissons à titre didactique mais elle n'est pas nécessaire
 
 },
 
 
  //Maintenant, définissons nos fonctions!
  
  fileComplete: function ( progress, cacheKey, success, totalLoaded, totalFiles) {
  
     //à chaque nouveau fichier chargé nous mettons à jour notre variable loadText
     this.loadText.setText("Fichiers chargés : " + progress + "% - " + totalLoaded + " sur " + totalFiles);
 
  },
 
  loadComplete : function(){
     // tous les fichiers sont chargés, on peut donc lancer l'état suivant : le jeu!
     this.state.start('Game');
  }
}