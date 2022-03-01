let d = new Date();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let day = d.getDay();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();

let is24Hour = true;
let amPm;

let days = ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", 
"reede", "laupäev"];
let months = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", 
"august", "september", "oktoober", "november", "detsember"];

let daysEN = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", 
"saturday"];
let monthsEN = ["january", "february", "march", "april", "may", "june", "july", 
"august", "september", "october", "november", "december"];

let hoursContainer = document.getElementById('hours');
let minutesContainer = document.getElementById('minutes');
let secondsContainer = document.getElementById('seconds');
let dayContainer = document.getElementById('day');
let dateContainer = document.getElementById('date');
let monthContainer = document.getElementById('month');

dayContainer.innerHTML = days[day];
dateContainer.innerHTML = date;
monthContainer.innerHTML = months[month];
document.getElementById('year').innerHTML = year;

updateClock();
window.setInterval(updateClock, 1000);

// change between languages
document.getElementById('et').addEventListener("click", function() {
    dayContainer.innerHTML = days[day];
    monthContainer.innerHTML = months[month];
});
document.getElementById('en').addEventListener("click", function() {
    dayContainer.innerHTML = daysEN[day];
    monthContainer.innerHTML = monthsEN[month];
});

// change between 24-hour and 12-hour format
document.getElementById('time').addEventListener("click", function() {
    // invert the value of is24Hour
    is24Hour = !is24Hour;
});

function updateClock() {
    d = new Date();
    hours = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();

    /*
    convert 24-hour format to 12-hour format
    determine am or pm
    if time is over 12 hours, return the remainder of modulo 12
    if time is 00, change it to 12
    */
    if (!is24Hour) {
        amPm = " am";

        if (hours >= 12) {
            amPm = " pm";
        }

        hours = hours % 12;

        if (hours == 0) {
            hours = 12;
        }
    }

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

    // add or remove am/pm suffix to seconds
    if (!is24Hour) {
        secondsContainer.innerHTML = ":" + seconds + amPm;
    } else {
        secondsContainer.innerHTML = ":" + seconds;
    }
}