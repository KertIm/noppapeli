var pelaajat = [];
var kuvat=["images/dice1.png", "images/dice2.png", "images/dice3.png", 
"images/dice4.png", "images/dice5.png", "images/dice6.png"];

var pisteet=0; 
var pistetaulukko = [];
var vuoro = 0;
var kaikkipisteet = 0;

function lisaa(){
  var nimi = document.getElementById("text1").value;
  pelaajat.push(nimi);
  pistetaulukko.push(0);
  nayta();
}
function roll() { 
  var uusi = Math.floor(Math.random() * 6);
  var uusikuva = kuvat[uusi];

  document.getElementById("ekanoppa").src = uusikuva;
  
  pisteet = pisteet  + uusi+1;
  if (uusi==0) {
    pisteet = 0;
    vuoronVaihto();
  }
  refresh();
}
function vuoronVaihto() {
  var maara = pelaajat.length - 1;
  
  if(vuoro < maara){
    pistetaulukko[vuoro] += pisteet;
    vuoro += 1;
   } else {
    pistetaulukko[vuoro] += pisteet;
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
    } else if (pistetaulukko[final] >= 100){ 
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
