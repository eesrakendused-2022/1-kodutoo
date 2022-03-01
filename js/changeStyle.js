var clock = document.getElementById("clock");
var blueStyle = document.getElementById("styleChange");
var normStyle = document.getElementById("styleChange1");
var redStyle = document.getElementById("styleChange2");
var peppaStyle = document.getElementById("styleChange3");
var woofStyle = document.getElementById("styleChange4");
var catStyle = document.getElementById("styleChange5");
var logo = document.querySelector("#logo");

logo.onclick = function(){
    location.href("https://github.com/kristoplv/1-kodutoo");
}

blueStyle.onclick = function(){
    clock.style.backgroundImage = 'url("/pictures/clocky.jpg")';
}

normStyle.onclick = function(){
    clock.style.backgroundImage = 'url("/pictures/clock.png")';
}
redStyle.onclick = function(){
    clock.style.backgroundImage = 'url("/pictures/redC.png")';
}
peppaStyle.onclick = function(){
    clock.style.backgroundImage = 'url("/pictures/peppaC.png")';
}
woofStyle.onclick = function(){
    clock.style.backgroundImage = 'url("/pictures/doggoC.png")';
}
catStyle.onclick = function(){
    clock.style.backgroundImage = 'url("/pictures/catC.png")';
}