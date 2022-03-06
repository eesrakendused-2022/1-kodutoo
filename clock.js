let d = new Date();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let time = d.getTime();
let day = d.getDay();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();

let body = document.getElementById('body');

let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];

let dateContainer = document.getElementById('date');
let monthContainer = document.getElementById('month');
let dayContainer = document.getElementById('day');
let secondsContainer = document.getElementById('seconds');
let minutesContainer = document.getElementById('minutes');
let hoursContainer = document.getElementById('hours');
let timeContainer = document.getElementById('time');
let yearContainer = document.getElementById('year');
let mainContainer = document.getElementById('container');

dayContainer.innerHTML = days[day];
yearContainer.innerHTML = year;
monthContainer.innerHTML = months[month] + "&nbsp";
dateContainer.innerHTML = date + "&nbsp";

updateClock();

// secondsContainer.innerHTML = seconds;
// minutesContainer.innerHTML = minutes + ":";
// hoursContainer.innerHTML = hours + ":";

window.setInterval(updateClock, 1000);

function updateClock(){
    d = new Date();
    hours = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();

    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    if(hours < 10){
        hours = "0" + hours;
    }
    
    secondsContainer.innerHTML = seconds;
    minutesContainer.innerHTML = minutes + ":";
    hoursContainer.innerHTML = hours + ":";
}

window.addEventListener('keypress', changetheme);

function changetheme(t){
    console.log(t.key);
    if(t.key == "t"){
        if(body.style.backgroundColor == 'rgb(158, 220, 245)'){
            body.style.backgroundColor = 'rgb(53, 51, 51)';
            body.style.color = 'rgb(0, 0, 0)';
        } else {
            body.style.backgroundColor = 'rgb(158, 220, 245)';
            body.style.color = 'rgb(133, 63, 133)';
        }
    }
}

window.addEventListener('keypress', changestyle);

function changestyle(s){
    console.log(s.key);
    if(s.key == "s"){
        if(body.style.fontFamily == 'fantasy'){
            body.style.fontFamily = 'serif';
        } else {
            body.style.fontFamily = 'fantasy';
        }
    }
}

window.addEventListener('keypress', onlytime);

function onlytime(g){
    console.log(g.key);
    if(g.key == "g"){
        timeContainer.style.fontSize = '700%';
        dateContainer.innerHTML = null;
        monthContainer.innerHTML = null;
        dayContainer.innerHTML = null;
        yearContainer.innerHTML = null;
    }
}

window.addEventListener('keypress', backnormal);

function backnormal(r){
    console.log(r.key);
    if(r.key == "r"){
        timeContainer.style.fontSize = '120px';
        dayContainer.innerHTML = days[day];
        yearContainer.innerHTML = year;
        monthContainer.innerHTML = months[month] + "&nbsp";
        dateContainer.innerHTML = date + "&nbsp";
    }
}
