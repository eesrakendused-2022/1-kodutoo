let d = new Date();
let day = d.getDay();
let year = d.getFullYear();
let month = d.getMonth();
let date = d.getDate();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();

let fontSize = 50;
let left = 50;
let tops = 50;


let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];
let months1 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


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

document.getElementById('est').addEventListener("click", function(){
    monthContainer.innerHTML = months[month];
});

document.getElementById('eng').addEventListener("click", function(){
    monthContainer.innerHTML = months1[month];
});

window.addEventListener('keypress', klavikas)

function klavikas(e){
    if (e.key == "-") {
        fontSize --;
        document.getElementById('container').style.fontSize = fontSize + "px";
    }
    else if (e.key == "+") {
        fontSize ++;
        document.getElementById('container').style.fontSize = fontSize + "px";
    }
    else if (e.key == "a") {
        left --;
        document.getElementById('container').style.left = left + "%";
    }
    else if (e.key == "d") {
        left ++;
        document.getElementById('container').style.left = left + "%";
    }
    else if (e.key == "s") {
        tops ++;
        document.getElementById('container').style.top = tops + "%";
    }
    else if (e.key == "w") {
        tops --;
        document.getElementById('container').style.top = tops + "%";
    }
}


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

    if(hours > 10 && hours < 19){
        document.body.style.backgroundColor = "white";
    }
    else if(hours > 19) {
        document.body.style.backgroundColor = "black";
    }
}

window.addEventListener('mouseover', changeColor)

function changeColor(){
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    document.getElementById('container').style.color = 'rgb(' + r + ',' + g + ',' + b + ')';
    

}