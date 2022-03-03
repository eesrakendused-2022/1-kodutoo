var clock = document.getElementById("clock");
var blueStyle = document.getElementById("styleChange");
var normStyle = document.getElementById("styleChange1");
var redStyle = document.getElementById("styleChange2");
var peppaStyle = document.getElementById("styleChange3");
var woofStyle = document.getElementById("styleChange4");
var catStyle = document.getElementById("styleChange5");
var logo = document.querySelector("#logo");
var fullScreen = document.querySelector("#fullScreen");
var counter = 0;

function sendToGit(){
    window.open("https://github.com/kristoplv/1-kodutoo");
}

logo.addEventListener("click", sendToGit);

blueStyle.addEventListener("click", function(){
    clock.style.backgroundImage = 'url("/pictures/clocky.jpg")';
});

normStyle.addEventListener("click", function(){
    clock.style.backgroundImage = 'url("/pictures/clock.png")';
});
redStyle.addEventListener("click", function(){
    clock.style.backgroundImage = 'url("/pictures/redC.png")';
});
peppaStyle.addEventListener("click", function(){
    clock.style.backgroundImage = 'url("/pictures/peppaC.png")';
});
woofStyle.addEventListener("click", function(){
    clock.style.backgroundImage = 'url("/pictures/doggoC.png")';
});
catStyle.addEventListener("click", function(){
    clock.style.backgroundImage = 'url("/pictures/catC.png")';
});
fullScreen.addEventListener("click", function(){
    if(counter ==0){
        document.body.requestFullscreen();
        fullScreen.style.backgroundImage = 'url("/pictures/fullOff.png")';
        counter++;
    } else {
        document.exitFullscreen();
        fullScreen.style.backgroundImage = 'url("/pictures/full.png")';
        counter--;
    }
})
