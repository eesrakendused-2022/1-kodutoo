let d = new Date();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();
let day = d.getDay();

let fontSize = 13;
let lang = "EST";

if (lang == "EST") {

}
if (lang == "ENG") {

}

let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];
let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];

let hoursContainer = document.getElementById('hours');
let minutesContainer = document.getElementById('minutes');
let secondsContainer = document.getElementById('seconds');
let dateContainer = document.getElementById('date');
let monthContainer = document.getElementById('month');
let dayContainer = document.getElementById('day');

dateContainer.innerHTML = date;
monthContainer.innerHTML = months[month];
document.getElementById('year').innerHTML = year;
dayContainer.innerHTML = days[day];
/*
hoursContainer.innerHTML = hours;
minutesContainer.innerHTML = ":" + minutes;
secondsContainer.innerHTML = ":" + seconds;
*/
updateClock();

window.setInterval(updateClock, 1000);
document.getElementById('smaller').addEventListener("click", function() {
    fontSize --;
    document.getElementById('container').style.fontSize = fontSize + "px";
});
document.getElementById('bigger').addEventListener("click", function() {
    fontSize ++;
    document.getElementById('container').style.fontSize = fontSize + "px";
});

function updateClock() {
    d = new Date();
    hours = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    hoursContainer.innerHTML = hours;
    minutesContainer.innerHTML = ":" + minutes;
    secondsContainer.innerHTML = ":" + seconds;
}