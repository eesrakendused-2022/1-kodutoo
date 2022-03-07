
let d = new Date();
let day = d.getDay();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let time = d.getTime();
let date = d.getDate();
let year = d.getFullYear();
let month = d.getMonth();

let fontSize = 26;
let lang = "EST";

let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];
let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];

console.log("Testin console logi");

let dayContainer = document.getElementById('day');
let monthContainer = document.getElementById('month');
let dateContainer = document.getElementById('date');
let secondsContainer = document.getElementById('seconds');
let minutesContainer = document.getElementById('minutes');
let hoursContainer = document.getElementById('hours');

document.body.style.backgroundColor = "green";
document.getElementById('container').style.backgroundColor = "lightblue";

dayContainer.innerHTML = days[day];
document.getElementById('year').innerHTML = year;
monthContainer.innerHTML = months[month];
dateContainer.innerHTML = date;
updateClock();

window.setInterval(updateClock, 1000);

document.getElementById('languagechoice').addEventListener("click", function(){
    if(lang == "EST") {
        lang = "ENG";
        months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"];
        
    } else {
        lang = "EST";
        months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];
        days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
    }
    document.getElementById('month').innerHTML = months[month];
    console.log("111111");
});


document.getElementById('color').addEventListener("click", function(){
    document.getElementById('container').style.color = "red";
});

document.getElementById('controls').style.backgroundColor = "red";

document.getElementById('smaller').addEventListener("click", function(){
    fontSize --;
    document.getElementById('container').style.fontSize = fontSize + "px";
});
document.getElementById('bigger').addEventListener("click", function(){
    fontSize ++;
    console.log("222222");
    document.getElementById('container').style.fontSize = fontSize + "px";
});

function updateClock(){
    d = new Date();
    hours = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();

    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    if(hours < 10) {
        hours = "0" + hours;
    }
    secondsContainer.innerHTML = ":" + seconds;
    minutesContainer.innerHTML = ":" + minutes;
    hoursContainer.innerHTML = hours;
}