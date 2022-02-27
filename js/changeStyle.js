var clock = document.getElementById("clock");
var blueStyle = document.getElementById("styleChange");
var normStyle = document.getElementById("styleChange1");

blueStyle.onclick = function(){
    clock.style.backgroundImage = 'url("/pictures/clocky.jpg")';
}

normStyle.onclick = function(){
    clock.style.backgroundImage = 'url("/pictures/clock.png")';
}