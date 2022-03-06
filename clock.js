let d = new Date();
let day = d.getDay();
let year = d.getFullYear();
let month = d.getMonth();
let date = d.getDate();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();

let fontSize = 50;

let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];

let dateContainer = document.getElementById('date');
let monthContainer = document.getElementById('month');
let dayContainer = document.getElementById('day');

let secondsContainer = document.getElementById('seconds');
let minutesContainer = document.getElementById('minutes');
let hoursContainer = document.getElementById('hours');

dayContainer.innerHTML = days[day];
document.getElementById('year').innerHTML = "&nbsp" + year + "&nbsp";
monthContainer.innerHTML = months[month];
dateContainer.innerHTML = date + ".";
secondsContainer.innerHTML = ":" + seconds;
minutesContainer.innerHTML = ":" + minutes;
hoursContainer.innerHTML = hours;
updateClock();

window.setInterval(updateClock, 1000);
document.getElementById('smaller').addEventListener("click", function(){
    fontSize --;
    document.getElementById('container').style.fontSize = fontSize + "px";
});

document.getElementById('bigger').addEventListener("click", function(){
    fontSize ++;
    document.getElementById('container').style.fontSize = fontSize + "px";
});

function updateClock(){
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

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
