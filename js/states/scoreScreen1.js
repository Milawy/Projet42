Game.ScoreScreen1 = function(){
 
};
 Game.ScoreScreen1.prototype = { 
 
 
    preload : function(){ 
        
    }, 
 
    create : function(){

    	var scoresTab = new Array(window.localStorage.length)

    	for(var i = 0; i < window.localStorage.length; i++){
    		scoresTab[i] = JSON.parse(window.localStorage.getItem(String(i)));
    	}

    	console.log(scoresTab);
    	window.localStorage.clear();
    	
    },

    update : function(){
    },
};

function resetLocalStorage(){
	window.localStorage.clear();
}