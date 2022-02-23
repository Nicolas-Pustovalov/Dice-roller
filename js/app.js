
var player = "";
var dealer = "";
// On ajoute une fonction pour tirer un nombre aléatoire entre 1 et 6
var getRand = function(min = 0,max = 10){
    var nbre01 = Math.random();
    var possibleScale = max - min;
    return Math.round(nbre01 * possibleScale + min);
};

var createDice = function(idDelaZoneOuJouer){
    // Dans app.js il faut faire en sorte de créer une div
    var div = document.createElement('div');

    div.classList.add('dice');

    var divToPlayIn = document.getElementById(idDelaZoneOuJouer);

    divToPlayIn.appendChild(div);
    // Je crée un nombre aléatoire
    var diceNumber = getRand(1, 6);
    // On se sert du nombre obtenu pour modifier la position de l'arrière plan du dé
    // 1 -> "-0px"
    // 2 -> -100px 
    // 3 -> -200px
    // 4 -> -300px
    // 5 -> -400px 
    // 6 -> -500px

    div.style.backgroundPosition = -((diceNumber-1) * 100) + "px";
};




// Il faudrait demander à l'utilisateur de saisir combien de dés il veut lancer
var nombreSouhaite;

// Récupérer le form pour réagir à ses events
var form = document.getElementById('controls');
var handler = function(event) {
    // J'empeche le navigateur de recharger la page
    event.preventDefault();

    console.log(event.target);
    console.log('submit a eu lieu');

    var input = document.getElementById('numberInput');

    nombreSouhaite = parseInt(input.value, 10);

    console.log(input);

    var player = document.getElementById('player');
    var dealer = document.getElementById('dealer');
    console.log(player, dealer)
    player.innerHTML = "";
    dealer.innerHTML = "";


    for (var i = 0;  i < nombreSouhaite ;i++) {

        setTimeout(function(){
            console.log('Stop !');

            createDice('player');
            // Je donne l'id dealer pour que le dé aille dans cette div
            createDice('dealer');
        }, i * 1000);   
    }

};

form.addEventListener('submit', handler);

