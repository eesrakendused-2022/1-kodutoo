let d = new Date();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let time = d.getTime();
let day = d.getDay();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();

let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];
let days = ["Pühapäev", "Esmaspäv", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];

let dayContainer = document.getElementById('day') ;
let monthContainer = document.getElementById('month');
let dateContainer = document.getElementById('date');
let secondsContainer = document.getElementById('seconds');
let minutesContainer = document.getElementById('minutes');
let hoursContainer = document.getElementById('hours');


dayContainer.innerHTML = days[day];
document.getElementById('year').innerHTML = year;
monthContainer.innerHTML = months[month];
dateContainer.innerHTML = date;
updateClock();




window.setInterval(updateClock, 1000);

function changeColor(){
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    container.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
}

function resetColor(){

    container.style.backgroundColor = 'rgb(255,255,255)';
}

function changeColorToBlack(){

    container.style.backgroundColor = 'rgb(0,0,0)';
}

function changeColorToAquamarine(){

    container.style.backgroundColor = 'rgb(102,221,170)';
}

function changeColorToYellow(){
    container.style.backgroundColor = 'rgb(255,255,0)';
}

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


    secondsContainer.innerHTML = ":" + seconds;
    minutesContainer.innerHTML = ":" + minutes;
    hoursContainer.innerHTML = hours;
}
