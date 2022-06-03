let d = new Date();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let time = d.getTime();
let day = d.getDay();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();

if(minutes < 10){
    minutes = "0" + minutes;
}
if(seconds < 10){
    seconds = "0" + seconds;
}
if(hours < 10){
    hours = "0" + hours;
}

let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"]
let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"]

let fulltime = document.getElementById('fulltime');
let fulldate = document.getElementById('fulldate');
let dayContainer = document.getElementById('day');

fulltime.innerHTML = hours+":"+minutes+":"+seconds
fulldate.innerHTML = date+". "+months[month]+" "+year
dayContainer.innerHTML = days[day]

let fontSelector = document.getElementById('fontSelector')
fontSelector.addEventListener('change', handleFontSelection)
let colorSelector = document.getElementById('colorPicker')
colorSelector.addEventListener('change', handleColorSelection)

document.getElementById('backgroundColor').addEventListener('click', handleBackgroundColor)

window.setInterval(updateClock, 1000);
handleFontSelection()

//1
function handleBackgroundColor(){
    var randColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementsByClassName('main')[0].style.background = '#'+randColor
}
//2
function handleColorSelection() {
    document.getElementsByClassName('main')[0].style.color = this.value
}
//3
function handleFontSelection(){
    document.getElementsByClassName('main')[0].style.fontFamily = fontSelector.options[fontSelector.selectedIndex].value
}

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

    if (d.getDate != date) {
        date = d.getDate()
        fulldate.innerHTML = date+". "+months[month]+" "+year
    }

    if (d.getMonth() != month) {
        month = d.getDate()
        fulldate.innerHTML = date+". "+months[month]+" "+year
    }

    if (d.getFullYear != year) {
        year = d.getFullYear()
        fulldate.innerHTML = date+". "+months[month]+" "+year
    }

    fulltime.innerHTML = hours+":"+minutes+":"+seconds
}


