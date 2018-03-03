var baza=[
	["Łóżko", "Sen", "Spać", "Nogi", "Leżeć", "Chrapać"],
	["Most", "Brzeg", "Łączyć", "Podpora", "Zwodzony", "Wiszący"],
	["Lalka", "VooDoo", "Zabawka", "Dziewczynka", "Warkocze", "Plastik"],
	["Dom", "Budować", "Cegła", "Mieszkać", "Chata", "Rodzinny"],
	["Komórka", "Telefon", "Dzwonić", "Jądro", "Mitochondrium", "Element"],
	["Choroba", "Dysfunkcja", "Lekarstwo", "Gorączka", "Lekarz", "Grypa"],
	["Piekarz", "Piec", "Chleb", "Pieczywo", "Mąka", "Piekarnia"],
	["Morze", "Woda", "Fale", "Statek", "Pływać", "Słony"],
	["Wyścig", "Samochód", "Meta", "Czas", "Rywalizacja", "Kolarski"],
]

var randButton= document.querySelector("#rand");
var title= document.querySelector("#keyword");
var first= document.querySelector("#first");
var second= document.querySelector("#second");
var third= document.querySelector("#third");
var fourth= document.querySelector("#fourth");
var fifth= document.querySelector("#fifth");
var green= document.querySelector("#green");
var red= document.querySelector("#red");
var score= document.querySelector("#score");
var start= document.querySelector("#start");
var greenScores=0;
var redScores=0;
var timer = document.getElementById('counter');
var ring = new Audio("telephone-ring-01a.wav");
var timerLoop;
var greensTurn = false;
var whichTeam= document.querySelector("#whichTeam");



start.addEventListener("click", function(){
    newWord();
    turn();
    this.disabled=true;
    randButton.disabled=false;
    score.disabled=false;
});


function turn() {
    greensTurn = !greensTurn;
    seconds = 120;
    timerLoop = setInterval(decrementAndCheck, 1000);
    if(greensTurn){
        green.style.borderBottom="10px solid #CEFA75";
        red.style.border="0px";
    }
    else{
        red.style.borderBottom="10px solid #FF7070";
        green.style.border="0px";
    }
    
    
}

function decrementAndCheck() {
    seconds -= 1;
    timer.textContent =  seconds;
    if(seconds===0){
    ring.play();    
    clearInterval(timerLoop);
    start.disabled=false;
        if(greensTurn)
            whichTeam.textContent="czerwonych";
        else
            whichTeam.textContent="zielonych";
    randButton.disabled=true;
    score.disabled=true;
    }
}

function newWord(){
	var rand= losuj();
	title.textContent = baza[rand][0];
	first.textContent = baza[rand][1];
	second.textContent = baza[rand][2];
	third.textContent = baza[rand][3];
	fourth.textContent = baza[rand][4];
	fifth.textContent = baza[rand][5];
	console.log(rand);	
}

randButton.addEventListener("click", newWord);

score.addEventListener("click", function(){
    newWord();
	if(greensTurn){
    greenScores=greenScores+1;
    green.textContent=greenScores;
    }
	else{
    redScores=redScores+1;
    red.textContent=redScores;
    }   
});
	
	
function losuj(){
	var liczba=Math.floor(Math.random() * baza.length);
	return liczba;
}
