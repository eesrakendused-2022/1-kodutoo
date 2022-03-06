let d = new Date();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let weekday = d.getDay();
let year = d.getFullYear();
let month = d.getMonth();
let time = d.getTime();
let date = d.getDate();

// fondisuurus alguses
let clock = document.getElementById('clock');
let fontSize = parseInt(clock.style.fontSize.slice(0, -2));

console.log(weekday); // nädal algab pühapäevast ja on 0
let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September",
    "Oktoober", "November", "Detsember"];

let clockContainer = document.getElementById('container');
let yearContainer = document.getElementById('year').innerHTML = year;
let weekdayContainer = document.getElementById('weekday').innerHTML = days[weekday];
let monthContainer = document.getElementById('month').innerHTML = months[month];
let dayContainer = document.getElementById('day').innerHTML = date;
let secondsContainer = document.getElementById('seconds');
let minutesContainer = document.getElementById('minutes');
let hoursContainer = document.getElementById('hours');
// muutujad numbritausta läbipaistvuse jaoks
let numbersContainer = document.getElementById('time');
let slider = document.getElementById('slider');
let rgb = numbersContainer.style.backgroundColor.split(",", 3);

updateClock();

// paneme kellaaja uuendama
window.setInterval(updateClock, 1000);
// lisame eventlistenerid fondi vähendamiseks ja suurendamiseks
document.getElementById('smaller').addEventListener("click", function () {
    fontSize--;
    clock.style.fontSize = fontSize + "px";
});
document.getElementById('bigger').addEventListener("click", function () {
    fontSize++;
    clock.style.fontSize = fontSize + "px";
});
// eventlistenerid kella tausta muutmiseks
document.getElementById('background-1').addEventListener("click", function () { changeBackground('1');});
document.getElementById('background-2').addEventListener("click", function () { changeBackground('2');});
document.getElementById('background-3').addEventListener("click", function () { changeBackground('3'); });
// eventlistener numbritausta läbipaistvuseks
slider.addEventListener('change', function () { changeOpacity(); });

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
    secondsContainer.innerHTML = ":" + seconds;
    minutesContainer.innerHTML = ":" + minutes;
    hoursContainer.innerHTML = hours;
}

function changeBackground(number) {
    // salvestame eelmise tausta toggle jaoks
    let previousBackground;
    if (clockContainer.className) {
        previousBackground = clockContainer.className;
    }
    // taastame CSS klassi
    clockContainer.className = '';
    // kella uus taust
    switch (number) {
        case '1':
            return (previousBackground === 'background-1' ? false : clockContainer.classList.add('background-1'));
        case '2':
            return (previousBackground === 'background-2' ? false : clockContainer.classList.add('background-2'));
        case '3':
            return (previousBackground === 'background-3' ? false : clockContainer.classList.add('background-3'));
        default: break;
    }  
}

function changeOpacity() {
    let sliderValue = parseInt(slider.value);
    let opacity = (sliderValue / 1000).toString();
    let newRgba = rgb + ", " + opacity + ")";
    numbersContainer.style.backgroundColor = newRgba;
}