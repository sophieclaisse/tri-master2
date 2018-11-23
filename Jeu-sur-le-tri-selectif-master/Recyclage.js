document.getElementById("random").innerHTML= '<img id="image" src="'+"visuels2/recycle.png"+'" />';

score = 0;
essais= 10;

function obj (Dechet, couleur){
    this.Dechet= Dechet;
    this.couleur= couleur;
    }

var Tab = [];
Tab.push(new obj("visuels2/rouleau_carton(B).jpg","bleu"));
Tab.push(new obj("visuels2/bouteille_plastique(J).jpg", "jaune"));
Tab.push(new obj("visuels2/bouteille_verre(V).jpg", "vert"));
Tab.push(new obj("visuels2/brique_lait(J).jpg", "jaune"));
Tab.push(new obj("visuels2/conserve(J).jpg", "jaune"));
Tab.push(new obj("visuels2/deo(J).jpg", "jaune"));
Tab.push(new obj("visuels2/organiques(M).jpg", "marron"));
Tab.push(new obj("visuels2/papier_journal(B).jpg)", "bleu"));
Tab.push(new obj("visuels2/pot_confiture(V).jpg", "vert"));
Tab.push(new obj("visuels2/pot_plastique(M).jpg", "marron"));
console.log(Tab);


var random = Math.round(Math.random() * 9);
console.log(random);

//PLAY
document.getElementById("play").addEventListener("click", function (){
    random = Math.round(Math.random() * 9);
    document.getElementById("random").innerHTML= '<img id="image" src="'+Tab[random].Dechet+'" />';

    document.getElementById("play").disabled= true;

});

//NEXT
document.getElementById("next").addEventListener("click", function(){
    essais--;

    random = Math.round(Math.random() * 9);
    document.getElementById("random").innerHTML= '<img id="image" src="'+Tab[random].Dechet+'" />';

    document.getElementById("jaune").disabled= false;
    document.getElementById("bleu").disabled= false;
    document.getElementById("marron").disabled= false;
    document.getElementById("vert").disabled= false;
});

//RESET
document.getElementById("reset").addEventListener("click", function (){
    document.getElementById("random").innerHTML= '<img id="image" src="'+"visuels2/recycle.png"+'" />';
    document.getElementById("icone").innerHTML= "";
    document.getElementById("play").disabled= false;

    score = 0;
    document.getElementById("points").innerHTML = "Vous avez " + score + " points";
});



//EVENTS POUBELLES

document.getElementById("jaune").addEventListener("click", function(){

    if (Tab[random].couleur=="jaune"){
        good();
        result();
    }

    else{
        wrong();
    }

});

document.getElementById("bleu").addEventListener("click", function(){


    if (Tab[random].couleur=="bleu"){
        good ();
        result();
    }

    else{
        wrong();

    }
});

document.getElementById("vert").addEventListener("click", function(){

    if (Tab[random].couleur=="vert"){
        good ();
        result();
    }

    else{
        wrong();
    }
});

document.getElementById("marron").addEventListener("click", function(){

    if (Tab[random].couleur=="marron"){
        good ();
        result();
    }

    else{
       wrong();
    }
});


//CONSEQUENCES EVENTS
function good (){
    document.getElementById("icone").innerHTML= '<img id="image" src="'+"visuels/right.png"+'" />';

    document.getElementById("jaune").disabled= true;
    document.getElementById("bleu").disabled= true;
    document.getElementById("marron").disabled= true;
    document.getElementById("vert").disabled= true;
}

function wrong (){
    document.getElementById("icone").innerHTML= '<img id="image" src="'+"visuels/wrong.png"+'" />';

    document.getElementById("jaune").disabled= true;
    document.getElementById("bleu").disabled= true;
    document.getElementById("marron").disabled= true;
    document.getElementById("vert").disabled= true;
}

//RESULTATS

function result (){
    score++;
    document.getElementById("points").innerHTML = "Vous avez " + score + " points";
}


