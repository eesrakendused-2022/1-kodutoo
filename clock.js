let d = new Date();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let time = d.getTime();
let day = d.getDay();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();

let fontSize = 50;
let opacity = 1.0;

let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];
let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];

//varv
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
    document.getElementById('autor').style.color=thecolor;
    document.getElementById('repositoorium').style.color=thecolor;

    document.getElementById('bigger').style.background=thecolor;
    document.getElementById('smaller').style.background=thecolor;
    document.getElementById('changeColor').style.background=thecolor;
    document.getElementById('visible').style.background=thecolor;
    document.getElementById('invisible').style.background=thecolor;
    document.getElementById('font').style.background=thecolor;
})
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
updateClock();
/*secondsContainer.innerHTML = ":" + seconds;
minutesContainer.innerHTML = ":" + minutes;
hoursContainer.innerHTML = hours;*/

//suurus
window.setInterval(updateClock, 1000);
document.getElementById('smaller').addEventListener("click", function(){
    fontSize --;
    document.getElementById('container').style.fontSize = fontSize + "px";
});
document.getElementById('bigger').addEventListener("click", function(){
    fontSize ++;
    document.getElementById('container').style.fontSize = fontSize + "px";
});

//labipaistvus
document.getElementById('invisible').addEventListener("click", function(){
    opacity --;
    document.getElementById('container').style.opacity = opacity + "0.1";
});
document.getElementById('visible').addEventListener("click", function(){
    opacity ++;
    document.getElementById('container').style.opacity = opacity + "0.1";
});

//font
var fontType = ["Arial", "Verdana", "Courier", "Grafiti", "Roboto", "Franklin Gothic Medium", "sans-serif", "stencil", "Bradley Hand ITC", "Algerian", "Chiller", "Edwardian Script ITC", "Courier New"];

function myFunction(e) {
    document.getElementById('container').style.fontFamily = fontType[Math.floor(Math.random() * fontType.length)];
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
}
