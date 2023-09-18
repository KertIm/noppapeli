var pelaajat = []; 
var kuvat=["images/dice1.png", "images/dice2.png", "images/dice3.png", 
"images/dice4.png", "images/dice5.png", "images/dice6.png"];

var pisteet=0; 
var pistetaulukko = [];    
var vuoro = 0;    //kenen vuoro
var kaikkipisteet = 0;
var tuplatMaara = 0; 

function lisaa(){
  var nimi = document.getElementById("text1").value;
  pelaajat.push(nimi);
  pistetaulukko.push(0);
  nayta();
}
function roll() { //
    var uusi1 = Math.floor(Math.random() * 6);
    var uusi2 = Math.floor(Math.random() * 6);

    var new1 = kuvat[uusi1];
    var new2 = kuvat[uusi2];

    document.getElementById("ekanoppa").src = new1;
    document.getElementById("tokanoppa").src = new2;

    if (uusi1 == uusi2){ 
      
      tuplatMaara = tuplatMaara + 1;
      if(tuplatMaara == 3){  
        pisteet = 0;
        tuplatMaara = 0;
        vuoronVaihto();
      } else if (uusi1 == 0 && uusi2 == 0){
        pisteet = pisteet + 25;
      } else {
        var tuplat = (uusi1 + uusi2 + 2) * 2;
        pisteet = pisteet + tuplat;
      }
    }else if (uusi1 == 0){
      pisteet = 0;
      tuplatMaara = 0;
      vuoronVaihto();
    } else if (uusi2 == 0){
      pisteet = 0;
      tuplatMaara = 0;
      vuoronVaihto();
    }else {
      pisteet = pisteet + uusi1 + uusi2 + 2;
    }

    document.getElementById('pisteet').innerHTML = pisteet;
    refresh();
    nayta();
}
function vuoronVaihto() {
  tuplatMaara = 0;
  var maara = pelaajat.length - 1;

 if(vuoro < maara){
  pistetaulukko[vuoro] += pisteet;

  if (pistetaulukko[vuoro] >= 100){ 
    document.getElementById("voittaja").innerText="Pelaaja " + pelaajat[vuoro] + " voittaa!";  
    document.getElementById("voittaja").style.display = 'block';
  }
  vuoro += 1;
 } else {
  pistetaulukko[vuoro] += pisteet;

  if (pistetaulukko[vuoro] >= 100){ 
    document.getElementById("voittaja").innerText="Pelaaja " + pelaajat[vuoro] + " voittaa!";  
    document.getElementById("voittaja").style.display = 'block';
  }
  vuoro = 0;
 }
  pisteet = 0; 
  refresh();
} 
function refresh () {

  var tekst = vuoro +1;
  var final = vuoro ;
  var lista = pelaajat.length - 1;
    if (vuoro <= lista ){
      document.getElementById('turn').innerHTML = tekst + ". " + pelaajat[vuoro] +  " vuoro";
    }
    if (pistetaulukko[final] >= 100){ 
      document.getElementById("voittaja").innerText="Pelaaja " + pelaajat[final] + " voittaa!";  
      document.getElementById("voittaja").style.display = 'block';
    }
    document.getElementById('pisteet').innerHTML = pisteet;
    nayta();
}
function nayta(){
  document.getElementById('scores').innerHTML = '';

  for (var i=0; i < pelaajat.length ; i++){
    if (pistetaulukko[i] == 0) {
      document.getElementById('scores').innerHTML += '<li>' + pelaajat[i] + '</li>' + ": 0";
    } else {
      document.getElementById('scores').innerHTML += '<li>' + pelaajat[i] + '</li>' + ": " + pistetaulukko[i];
    }
  }
}