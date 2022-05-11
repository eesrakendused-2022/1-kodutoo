let d = new Date();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let time = d.getTime();
let day = d.getDay();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();

let fontSize = 60;

let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];
let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];

let dayContainer = document.getElementById('day');
let monthContainer = document.getElementById('month');
let dateContainer = document.getElementById('date');
let secondsContainer = document.getElementById('seconds');
let minutesContainer = document.getElementById('minutes');
let hoursContainer = document.getElementById('hours');


dayContainer.innerHTML = days[day];
document.getElementById('year').innerHTML = year;
monthContainer.innerHTML = months[month];
dateContainer.innerHTML = date;


//kellatüüp
let clockType = 2;
let engClock, estClock;
document.getElementById('changeType').addEventListener("click", function(){
    
    if(clockType == 1){
        clockType = 2;
    } else {
        clockType = 1;
    }

    if(clockType == 1){
        updateClockEuroopa();
        window.clearInterval(engClock);
        estClock = window.setInterval(updateClockEuroopa, 1000);
    
    } else {
        updateClockInglise();
        window.clearInterval(estClock);
        engClock = window.setInterval(updateClockInglise, 1000);

    }
});

//updateClockInglise();
//window.setInterval(updateClockInglise, 1000);

document.getElementById('smaller').addEventListener("click", function(){
    fontSize --;
    document.getElementById('container').style.fontSize = fontSize + "px";
});
document.getElementById('bigger').addEventListener("click", function(){
    fontSize ++;
    document.getElementById('container').style.fontSize = fontSize + "px";
});

//värv
function generateRandomColor(){
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}
document.getElementById('changeColor').addEventListener("click", function(){
    let thecolor=generateRandomColor();
    document.getElementById('year').style.color=thecolor;
    document.getElementById('day').style.color=thecolor;
    document.getElementById('month').style.color=thecolor;
    document.getElementById('date').style.color=thecolor;
    document.getElementById('hours').style.color=thecolor;
    document.getElementById('minutes').style.color=thecolor;
    document.getElementById('seconds').style.color=thecolor;

    document.getElementById('bigger').style.background=thecolor;
    document.getElementById('smaller').style.background=thecolor;
    document.getElementById('changeColor').style.background=thecolor;
    document.getElementById('changeType').style.background=thecolor;

    document.getElementById('nimi').style.color=thecolor;
    document.getElementById('viide').style.color=thecolor;
});


function updateClockEuroopa(){
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

function updateClockInglise(){
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let x = 0;

    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    if(hours > 12){
        if(hours == 13){
            x = list [0];
        } else if(hours == 0){
            x = list [11];
        } else{
            x = list [hours - 13];
        }
        otherHours = x + "PM";
    } else{
        otherHours = hours + "AM";
    }

    secondsContainer.innerHTML = ":" + seconds;
    minutesContainer.innerHTML = ":" + minutes;
    hoursContainer.innerHTML = otherHours;
}
