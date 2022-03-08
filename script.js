let d = new Date();
let day = d.getDay();
let month = d.getMonth();
let year = d.getFullYear();
let date = d.getDate();
let dayContainer = document.querySelector('#weekday');
let time = document.querySelector('#time');
let dateContainer = document.querySelector('#date');
let musicContainer = document.querySelector('#music');
let repository = document.querySelector('#repository');
let background = document.querySelector('#background');
let name = document.querySelector('#name');
let days = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'];

dayContainer.innerHTML = days[day];

updateClock();
updateDate();
window.setInterval(updateClock, 1000);

function updateDate(){
    let d = new Date();
    let month = d.getMonth();
    let year = d.getFullYear();
    let date = d.getDate();
    month++;

    if(date < 10){
        date = "0" + date;
    }
    if(month < 10){
        month = "0" + month;
    }

    dateContainer.innerHTML = date + '/' + month + '/' + year;
}

function updateClock(){
    d = new Date();
    let seconds = d.getSeconds();
    let minutes = d.getMinutes();
    let hours = d.getHours();
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(hours < 10){
        hours = "0" + hours;
    }
    time.innerHTML = hours + ':' + minutes + ':' + seconds;
}


musicContainer.addEventListener('click', playMusic);
background.addEventListener('click', changeBackground);
repository.addEventListener("click", ()=>{
    window.location.href="https://github.com/henrynaptal/1-kodutoo";
});

function playMusic(){
    var music = document.getElementById('playMusic');
    var audio = document.getElementById('sound');

    if (audio.paused) {
        audio.play(20);
        music.value = "Vibe OFF";
    }else{
        audio.pause();
        music.value = "Vibe ON";
    }
}

function changeBackground(){
    var background = document.getElementById('background').style.backgroundImage = "url(lightspeed.gif)";
    var music = document.getElementById('music').style.backgroundImage = "url(lightspeed.gif)";
    var repository = document.getElementById('repository').style.backgroundImage = "url(lightspeed.gif)";
    var name = document.getElementById('name').style.backgroundImage = "url(lightspeed.gif)";
    var time = document.getElementById('time').style.backgroundImage = "url(lightspeed.gif)";
    var date = document.getElementById('date').style.backgroundImage = "url(lightspeed.gif)";
    var weekday = document.getElementById('weekday').style.backgroundImage = "url(lightspeed.gif)";
}