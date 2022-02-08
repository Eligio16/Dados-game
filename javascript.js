let ran1 = Math.floor((Math.random()*6)+1)
let ranImg1 = "images/dice"+ran1+".png";
document.getElementById('img1').setAttribute('src', ranImg1);

let ran2 = Math.floor((Math.random()*6)+1);
let ranImg2 = "images/dice"+ran2+".png";
document.getElementById("img2").setAttribute("src", ranImg2);

if (ran1 > ran2){
    document.querySelector('h3').innerHTML = "Jugador 1 ganó!";
}
else if (ran1 < ran2){
    document.querySelector('h3').innerHTML = "Jugador 2 ganó!";
}
else if (ran1 == ran2){
    document.querySelector('h3').innerHTML = "Empate!";
}

function refresh(){
    window.location.reload("Actualizar");
}