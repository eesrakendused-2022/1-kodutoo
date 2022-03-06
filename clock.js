let d = new Date();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let day = d.getDay();
let year = d.getFullYear();
let month = d.getMonth();
let date = d.getDate();
let time = d.getTime();
let am_pm;
let am_pm_hours;
let format = "est";

let fontSize = 45;

let daysEst = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
let daysEng = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthsEst = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];
let monthsEng = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let dayContainer = document.getElementById('day');
let monthsEstContainer = document.getElementById('month');
let dateContainer = document.getElementById('date');
let secondsContainer = document.getElementById('seconds');
let minutesContainer = document.getElementById('minutes');
let hoursContainer = document.getElementById('hours');
let themeSwitcher = document.getElementById('themeSwitcher');
let pageContainer = document.getElementById('pageContainer');
let btnBigger = document.getElementById('bigger');
let btnSmaller = document.getElementById('smaller');


window.setInterval(updateClock, 1000);
document.getElementById('smaller').addEventListener('click', function () {
    fontSize--;
    document.getElementById('clockContainer').style.fontSize = fontSize + "px";
});
document.getElementById('bigger').addEventListener('click', function () {
    fontSize++;
    document.getElementById('clockContainer').style.fontSize = fontSize + "px";
});

document.addEventListener("change", selectLang);

function selectLang() {

    let formatSelect = document.getElementById("languageSelect").value;
    if (formatSelect == "est") {
        format = "est";
        dayContainer.innerHTML = daysEst[day];
        monthsEstContainer.innerHTML = monthsEst[month];
    }
    if (formatSelect == "eng") {
        format = "eng";
        dayContainer.innerHTML = daysEng[day];
        monthsEstContainer.innerHTML = monthsEng[month];
    }
}


function updateClock() {
    d = new Date();
    hours = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (format == "est") {
        secondsContainer.innerHTML = ":" + seconds;
        minutesContainer.innerHTML = ":" + minutes;
        hoursContainer.innerHTML = hours;
    }
    if (format == "eng") {
        if (hours >= 12) {
            am_pm = "PM";
        } else {
            am_pm = "AM";
        }
        am_pm_hours = (hours % 12) || 12;
        secondsContainer.innerHTML = ":" + seconds + am_pm;
        minutesContainer.innerHTML = ":" + minutes;
        hoursContainer.innerHTML = am_pm_hours;
    }
}

document.getElementById('year').innerHTML = year;
dateContainer.innerHTML = date;
updateClock();
selectLang();


themeSwitcher.addEventListener('click', function () {
    pageContainer.classList.toggle("theme-dark");
    btnBigger.classList.toggle("theme-dark");
    btnSmaller.classList.toggle("theme-dark");
    themeSwitcher.classList.toggle("theme-dark");
    document.getElementById('frame').classList.toggle("frame-dark");
    document.getElementById('languageSelect').classList.toggle('theme-dark');
});