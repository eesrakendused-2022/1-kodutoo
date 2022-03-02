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

let hoursContainer = document.querySelector('#hours');
let minutesContainer = document.querySelector('#minutes');
let secondsContainer = document.querySelector('#seconds');
let dayContainer = document.querySelector('#day');
let dateContainer = document.querySelector('#date');
let monthContainer = document.querySelector('#month');
let yearContainer = document.querySelector('#year');

dayContainer.innerHTML = days[day];
dateContainer.innerHTML = date;
monthContainer.innerHTML = months[month];
yearContainer.innerHTML = year;

updateClock();
window.setInterval(updateClock, 1000);

let timeContainer = document.querySelector('#time');

// change between 24-hour and 12-hour format
timeContainer.addEventListener('click', function() {
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



// change between languages
let githubLink = document.querySelector('#githubLink');
let etLangBtn = document.querySelector('#etLang');
let enLangBtn = document.querySelector('#enLang');
let colorInput = document.querySelector('#colorInput');
let changeColorBtn = document.querySelector('#changeColor');
let resetColorBtn = document.querySelector('#resetColor');

etLangBtn.addEventListener('click', function() {
    dayContainer.innerHTML = days[day];
    monthContainer.innerHTML = months[month];
    colorInput.placeholder = "värv";
    changeColorBtn.innerHTML = "Muuda";
    resetColorBtn.innerHTML = "Taasta";
});
enLangBtn.addEventListener('click', function() {
    dayContainer.innerHTML = daysEN[day];
    monthContainer.innerHTML = monthsEN[month];
    colorInput.placeholder = "color";
    changeColorBtn.innerHTML = "Change";
    resetColorBtn.innerHTML = "Reset";
});



// change and reset colors
changeColorBtn.addEventListener('click', function() {
    document.body.style.color = 
    githubLink.style.color = 
    etLangBtn.style.color = 
    enLangBtn.style.color = 
    changeColorBtn.style.color = 
    resetColorBtn.style.color = colorInput.value;
    colorInput.value = "";
});
resetColorBtn.addEventListener("click", function() {
    document.body.style.color = 
    githubLink.style.color = 
    etLangBtn.style.color = 
    enLangBtn.style.color = 
    changeColorBtn.style.color = 
    resetColorBtn.style.color = "#ef6c00";
});