let d = new Date();
let seconds = d.getSeconds();
let minutes = d.getMinutes();
let hours = d.getHours();
let date = d.getDate();
let day = d.getDay();
let month = d.getMonth();
let year = d.getFullYear();

let days = ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"]
let monthNames = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"]
let months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]

let secondsContainer = document.getElementById('seconds');
let minutesContainer = document.getElementById('minutes');
let hoursContainer = document.getElementById('hours');
let dateContainer = document.getElementById('date');
let dayContainer = document.getElementById('day');
let monthContainer = document.getElementById('month');
let yearContainer = document.getElementById('year');

let fontSize = 100;

/*secondsContainer.innerHTML = ":"+seconds;
minutesContainer.innerHTML = ":"+minutes;
hoursContainer.innerHTML = hours;*/
updateClock();
/*dayContainer.innerHTML = days[day];
dateContainer.innerHTML = date;
monthContainer.innerHTML = months[month];
yearContainer.innerHTML = year;*/
updateDate();


window.setInterval(updateClock, 100);
/*document.getElementById('smaller').addEventListener("click", function(){
    fontSize -= 10;
    document.getElementById('container').style.fontSize = fontSize + "px";
});
document.getElementById('bigger').addEventListener("click", function(){
    fontSize += 10;
    document.getElementById('container').style.fontSize = fontSize + "px";
});*/

function bigger(){
    fontSize += 10;
    document.getElementById('container').style.fontSize = fontSize + "px";
}

function smaller(){
    fontSize -= 10;
    document.getElementById('container').style.fontSize = fontSize + "px";
}

function updateClock(){
    d = new Date();
    seconds = (d.getSeconds()<10?'0':'') + d.getSeconds();
    minutes = (d.getMinutes()<10?'0':'') + d.getMinutes();
    hours = (d.getHours()<10?'0':'') + d.getHours();

    secondsContainer.innerHTML = ":" + seconds;
    minutesContainer.innerHTML = ":" + minutes;
    hoursContainer.innerHTML = hours;
}

function updateDate(){
    d = new Date();
    date = d.getDate();
    month = d.getMonth();
    year = d.getFullYear();

    dateContainer.innerHTML = date;
    monthContainer.innerHTML = "." + months[month];
    yearContainer.innerHTML = "." + year;
}

document.getElementById('hover').addEventListener("mouseover", function(){
    d = new Date();
    day = d.getDay();
    date = d.getDate();
    month = d.getMonth();
    year = d.getFullYear();

    dayContainer.innerHTML = days[day];
    dateContainer.innerHTML = ",&nbsp;" + date;
    monthContainer.innerHTML = ".&nbsp;" + monthNames[month];
    yearContainer.innerHTML = "&nbsp;" + year;
});

document.getElementById('hover').addEventListener("mouseout", function(){
    d = new Date();
    date = d.getDate();
    month = d.getMonth();
    year = d.getFullYear();

    dayContainer.innerHTML = "";
    dateContainer.innerHTML = date;
    monthContainer.innerHTML = "." + months[month];
    yearContainer.innerHTML = "." + year;
});

let container = document.getElementById('container');

window.addEventListener('keypress', selectColor);

function changeColor(){
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    container.style.backgroundColor = 'rgb(' + r + ', ' +g+','+b+')';
    container.innerHTML = "BREIGIME!";
}

function selectColor(){
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    container.style.borderColor = 'rgb(' + r + ', ' +g+','+b+')';
}