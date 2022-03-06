const lightStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=light]');
const darkStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]');
const darkSchemeMedia = matchMedia('(prefers-color-scheme: dark)');
const switcherRadios = document.querySelectorAll('.switcher__radio');
const formatButton = document.getElementById('format_button');
const leftButton = document.getElementById('left_button');
const rightButton = document.getElementById('right_button');


let formatChange = false;
let session = "";

if (formatButton != null) {
    formatButton.addEventListener("click", () => { formatChange = (formatChange ? false : true) });
}

$("#turn_right").on("click", function () {
    var angle = $("#time-container").data("angle") + 180 || 180;
    $("#time-container").css({ transform: "translate(100%)" });
    $("#time-container").css('transition-duration','2s');
    $("#time-container").data("angle", angle);
});

$("#turn_left").on("click", function () {
    var angle = $("#time-container").data("angle") - 180 || 180;
    $("#time-container").css({ transform: "translate(-100%)" });
    $("#time-container").css('transition-duration','2s');
    $("#time-container").data("angle", angle);
});

$("#reset").on("click", function () {
    var angle = $("#time-container").data("angle") - 180 || 180;
    $("#time-container").css({ transform: "translate(0)" });
    $("#time-container").css('transition-duration','2s');
    $("#time-container").data("angle", angle);
});


function currentTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (formatChange) {
        if (hours == 0) {
            hours = 12;
        }
        if (hours > 12) {
            hours -= 12;
            session = " PM"
        }
        else {
            session = " AM"
        }
    }
    else {
        session = "";
    }

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds + session;

    let time = hours + ":" + minutes + ":" + seconds;

    document.getElementById("clock").innerText = time;
    setTimeout(() => currentTime(), 1000);
}

function currentDate() {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const weekdays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let weekday = date.getDay();

    let dateString = `${day} ${months[month]} ${year}, ${weekdays[weekday]}`;
    document.getElementById("calender").innerText = dateString;
    setTimeout(() => currentDate(), 1000);
}

function setupSwitcher() {
    const savedScheme = getSavedScheme();

    if (savedScheme !== null) {
        const currentRadio = document.querySelector(`.switcher__radio[value=${savedScheme}]`);
        currentRadio.checked = true;
    }

    [...switcherRadios].forEach((radio) => {
        radio.addEventListener('change', (event) => {
            setScheme(event.target.value);
        });
    });
}

function setupScheme() {
    const savedScheme = getSavedScheme();
    const systemScheme = getSystemScheme();

    if (savedScheme === null) return;

    if (savedScheme !== systemScheme) {
        setScheme(savedScheme);
    }
}

function setScheme(scheme) {
    switchMedia(scheme);

    if (scheme === 'auto') {
        clearScheme();
    } else {
        saveScheme(scheme);
    }
}

function switchMedia(scheme) {
    let lightMedia;
    let darkMedia;

    if (scheme === 'auto') {
        lightMedia = '(prefers-color-scheme: light)';
        darkMedia = '(prefers-color-scheme: dark)';
    } else {
        lightMedia = (scheme === 'light') ? 'all' : 'not all';
        darkMedia = (scheme === 'dark') ? 'all' : 'not all';
    }

    [...lightStyles].forEach((link) => {
        link.media = lightMedia;
    });

    [...darkStyles].forEach((link) => {
        link.media = darkMedia;
    });
}

function getSystemScheme() {
    const darkScheme = darkSchemeMedia.matches;

    return darkScheme ? 'dark' : 'light';
}

function getSavedScheme() {
    return localStorage.getItem('color-scheme');
}

function saveScheme(scheme) {
    localStorage.setItem('color-scheme', scheme);
}

function clearScheme() {
    localStorage.removeItem('color-scheme');
}

setupSwitcher();
setupScheme();
currentTime();
currentDate();
