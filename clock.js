let d = new Date();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let time = d.getTime();
let day = d.getDay();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();

let fontSize = 200;
let lang = "EST";

let monthsEST = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"]
let daysEST = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];

let monthsENG = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
let daysENG = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let dayContainer = document.getElementById('day');
let monthContainer = document.getElementById('month');
let dateContainer = document.getElementById('date');
let secondsContainer = document.getElementById('seconds');
let minutesContainer = document.getElementById('minutes');
let hoursContainer = document.getElementById('hours');

switchLanguage();

document.getElementById('year').innerHTML = year;
dateContainer.innerHTML = date + ".";
updateClock();

document.getElementById('EST').addEventListener("click", function(){
    lang = "EST";
    switchLanguage();
});

document.getElementById('ENG').addEventListener("click", function(){
    lang = "ENG";
    switchLanguage();
});

window.setInterval(updateClock, 1000);
document.getElementById('smaller').addEventListener("click", function(){
    fontSize-= 10;
    document.getElementById('container').style.fontSize = fontSize + "%";
});
document.getElementById('bigger').addEventListener("click", function(){
    fontSize+= 10;
    document.getElementById('container').style.fontSize = fontSize + "%";
});

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

function switchLanguage(){
    if(lang == "EST"){
        monthContainer.innerHTML = monthsEST[month];
        dayContainer.innerHTML = daysEST[day];
        document.getElementById('bigger').innerHTML = 'Suuremaks';
        document.getElementById('smaller').innerHTML = 'Väiksemaks';
        document.getElementById('author').innerHTML = 'Autor: Lika Berisvili';
    }
    
    if(lang == "ENG"){
        monthContainer.innerHTML = monthsENG[month];
        dayContainer.innerHTML = daysENG[day];
        document.getElementById('bigger').innerHTML = 'Bigger';
        document.getElementById('smaller').innerHTML = 'Smaller';
        document.getElementById('author').innerHTML = 'Author: Lika Berisvili';
    }
}

document.getElementById('time').addEventListener("click", function(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('time').style.backgroundColor = "#" + randomColor;
});