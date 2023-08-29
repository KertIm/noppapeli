var nopat = [0,0];
var c=document.getElementById("noppa");
var ctx=c.getContext("2d");


var pisteet=0; // heittovuoron pisteet
var pistetaulukko = [0,0];
var vuoro = 0;
var kaikkipisteet = 0;
var dice1 = new Image(); dice1.src ="Images/dice1.png";
var dice2 = new Image(); dice2.src ="Images/dice2.png";
var dice3 = new Image(); dice3.src ="Images/dice3.png";
var dice4 = new Image(); dice4.src ="Images/dice4.png";
var dice5 = new Image(); dice5.src ="Images/dice5.png";
var dice6 = new Image(); dice6.src ="Images/dice6.png";
var kuvat=[dice1,dice2,dice3,dice4,dice5,dice6];

function roll() { //
  var uusi = Math.floor(Math.random() * 6);
  ctx.drawImage(kuvat[uusi],0,0);

  //noppa.classlist.add("shake");

  pisteet = pisteet  + uusi+1;
  if (uusi==0) {
    pisteet = 0;
    vuoronVaihto();
  }

 

  refresh();
}
function vuoronVaihto() {
  console.log("vaihdavuoro");
  if (vuoro == 0) {
    pistetaulukko[0] += pisteet;
    vuoro = 1;
  } else {
    pistetaulukko[1] += pisteet;
    vuoro = 0;
  }
  pisteet = 0;
  refresh();

}
function refresh () {
  document.getElementById('pisteet').innerHTML = pisteet;
  document.getElementById('paikka1').innerHTML = pistetaulukko[0];
  document.getElementById('paikka2').innerHTML = pistetaulukko[1];

    if (vuoro == 0){
      document.getElementById('turn').innerHTML = "pelaajan 1 vuoro";
    }
    else {
      vuoro = 1;
      document.getElementById('turn').innerHTML = "pelaajan 2 vuoro";
    }
    
    if (pistetaulukko[0] >= 100){
      document.getElementById("voittaja").innerHTML="pelaaja 1 voittaa";    
    }
    else if(pistetaulukko[1] >= 100) {
      document.getElementById("voittaja").innerHTML="pelaaja 2 voittaa"; 
    }
} 















/**function sivut() {//test these
  let selected = "";
  document.location.href = newUrl;
  window.location.pathname = '/relative-link'
  window.location = 'http://localhost/index.html#?options=go_here';
}


thinking space 
 * ask players and dise
 * käytä i lauseketta selviittääkseen miten pelataan
*/
/**var nopat = [0];
var c=document.getElementById("noppa");
var ctx=c.getContext("2d");


var pisteet=0; // heittovuoron pisteet
var pistetaulukko = [0,0];
var vuoro = 0;
var kaikkipisteet = 0;
var dice1 = new Image(); dice1.src ="Images/dice1.png";
var dice2 = new Image(); dice2.src ="Images/dice2.png";
var dice3 = new Image(); dice3.src ="Images/dice3.png";
var dice4 = new Image(); dice4.src ="Images/dice4.png";
var dice5 = new Image(); dice5.src ="Images/dice5.png";
var dice6 = new Image(); dice6.src ="Images/dice6.png";
var kuvat=[dice1,dice2,dice3,dice4,dice5,dice6];

function roll() { //now when gets 1 keeps turn---need to fix so it changes 
  var uusi = Math.floor(Math.random() * 6);
  ctx.drawImage(kuvat[uusi],0,0);
  pisteet = pisteet  + uusi+1;
  if (uusi==0) {
    pisteet = 0;
    vuoronVaihto();
  }
  refresh();
}
function vuoronVaihto() {
  console.log("vaihdavuoro");
  if (vuoro == 0) {
    pistetaulukko[0] += pisteet;
    vuoro = 1;
  } else {
    pistetaulukko[1] += pisteet;
    vuoro = 0;
  }
  pisteet = 0;
  refresh();

}
function refresh () {
  document.getElementById('pisteet').innerHTML = pisteet;
  document.getElementById('paikka1').innerHTML = pistetaulukko[0];
  document.getElementById('paikka2').innerHTML = pistetaulukko[1];

    if (vuoro == 0){
      document.getElementById('turn').innerHTML = "pelaajan 1 vuoro";
    }
    else {
      vuoro = 1;
      document.getElementById('turn').innerHTML = "pelaajan 2 vuoro";
    }
    
    if (pistetaulukko[0] >= 100){
      document.getElementById("voittaja").innerHTML="pelaaja 1 voittaa";    
    }
    else if(pistetaulukko[1] >= 100) {
      document.getElementById("voittaja").innerHTML="pelaaja 2 voittaa"; 
    }
}
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} */