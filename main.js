var hucre = [];
var puan = 0;

function getRandomInt(min,max){

return Math.floor(Math.random() * (max - min)) + min;

}

function renkKodu(renkId){

if(renkId == 1) {return "#E26464";}
else if(renkId == 2) {return "#66ADE3";}
else if(renkId == 3) {return "#E2DE64";}
else if(renkId == 4) {return "#86E264";}

}

function renkDegistir(hucreId,renk){

hucre[hucreId] = renk;
document.getElementById("hucre" + hucreId).style.background = renkKodu(renk);

}

function oyunGuncelle(){

document.getElementById("puan").innerHTML = puan + " Puan";

var random1 = getRandomInt(1,5);
var random2 = getRandomInt(1,5);

while (random1 == random2){

random2 = getRandomInt(1,5);

}

var i = 1;
while (i<=4){

renkDegistir(i,random1);

i++;

}

var randomHucre = getRandomInt(1,5);
renkDegistir(randomHucre,random2);

}

function tikKontrol(hucreId){

var dogruHucre = 0;
if (hucre[1] != hucre[2]){

    if(hucre[1] == hucre[3]){

        dogruHucre = 2;

    }
    else{

        dogruHucre = 1;

    }

}

else {

    if(hucre[1] == hucre[3]){

        dogruHucre = 4;

    }
    else{

        dogruHucre = 3;

    }
}

if(hucreId == dogruHucre){

puan = puan + 10;
oyunGuncelle();

}
else{

if(puan>0){

if(puan==10){

    puan =0;

}
else{

    puan = puan-20;

}
}

oyunGuncelle();

}

}