Game.ScoreScreen1 = function(){
 
};
 Game.ScoreScreen1.prototype = { 
 
 
    preload : function(){ 
        
    }, 
 
    create : function(){

    	rank = this.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        rankBox = this.game.add.image(250, 150, rank);
        rankBox.anchor.setTo(0.5,1);
        rankBox.scale.setTo(3,3);
        rank.text = "rank";

    	scores = this.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        scoresBox = this.game.add.image(650, 150, scores);
        scoresBox.anchor.setTo(0.5,1);
        scoresBox.scale.setTo(3,3);
        scores.text = "score";

    	names = this.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        namesBox = this.game.add.image(1100, 150, names);
        namesBox.anchor.setTo(0.5,1);
        namesBox.scale.setTo(3,3);
        names.text = "name";

    	var localStorageTab = new Array(window.localStorage.length);
    	var rankTab = new Array(window.localStorage.length);
    	var rankTabBox = new Array(window.localStorage.length);
    	var nameTab = new Array(window.localStorage.length);
    	var nameTabBox = new Array(window.localStorage.length);
    	var scoreTab = new Array(window.localStorage.length);
    	var scoreTabBox = new Array(window.localStorage.length);

    	for(var i = 0; i < window.localStorage.length; i++){
    		localStorageTab[i] = JSON.parse(window.localStorage.getItem(String(i)));

    		rankTab[i] = this.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        	rankTabBox[i] = this.game.add.image(250, (225 + 75*i), rankTab[i]);
        	rankTabBox[i].anchor.setTo(0.5,1);
        	rankTabBox[i].scale.setTo(2.5,2.5);
        	rankTab[i].text = String(i + 1);
    	}

		var result = sort(localStorageTab);

		for(var i = 0; i < window.localStorage.length; i++){
    		scoreTab[i] = this.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        	scoreTabBox[i] = this.game.add.image(650, (225 + 75*i), scoreTab[i]);
        	scoreTabBox[i].anchor.setTo(0.5,1);
        	scoreTabBox[i].scale.setTo(2.5,2.5);
        	scoreTab[i].text = String(result[0][i]);

    		nameTab[i] = this.game.add.retroFont('basicFont', 16, 16, " !§\"$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16, 0, 0);
        	nameTabBox[i] = this.game.add.image(1100, (225 + 75*i), nameTab[i]);
        	nameTabBox[i].anchor.setTo(0.5,1);
        	nameTabBox[i].scale.setTo(2.5,2.5);
        	nameTab[i].text = String(result[1][i]);        	
		}
    	
    },

    update : function(){
    },
};

function resetLocalStorage(){
	window.localStorage.clear();
}

function sort(T){

    var scoreTab = new Array(window.localStorage.length);
    var nameTab = new Array(window.localStorage.length);
    j = 0;

    T.forEach(function(v) {
  		scoreTab[j] = parseFloat(v.time);
  		nameTab[j] = v.name;
  		j++;
	});

	var done = false;
	while (!done) {
	  done = true;
	  for (var i = 1; i < scoreTab.length; i++) {
	  	if (scoreTab[i - 1] > scoreTab[i]) {
	    	done = false;
	    	var tmp = scoreTab[i - 1];
	    	var tmp2 = nameTab[i - 1];
	    	scoreTab[i - 1] = scoreTab[i];
	    	nameTab[i - 1] = nameTab[i];
	    	scoreTab[i] = tmp;
	    	nameTab[i] = tmp2;
	    }
	  }
 	}

 	return [scoreTab, nameTab];
}