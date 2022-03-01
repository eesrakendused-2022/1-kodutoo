let d = new Date();
let seconds = d.getSeconds();
let minutes = d.getMinutes();
let hours = d.getHours();
let date = d.getDate();
let day = d.getDay();
let month = d.getMonth();
let year = d.getFullYear();

let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"]
let englishDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let monthNames = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"]
let englishMonthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]

let secondsContainer = document.getElementById('seconds');
let minutesContainer = document.getElementById('minutes');
let hoursContainer = document.getElementById('hours');
let dateContainer = document.getElementById('date');
let dayContainer = document.getElementById('day');
let monthContainer = document.getElementById('month');
let yearContainer = document.getElementById('year');
let hoverContainer = document.getElementById('hover');
let biggerContainer = document.getElementById('bigger');
let smallerContainer = document.getElementById('smaller');

let fontSize = 100;

updateClock();
updateDate();

window.setInterval(updateClock, 100);

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
    date = (d.getDate()<10?'0':'') + d.getDate();
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
    date = (d.getDate()<10?'0':'') + d.getDate();
    month = d.getMonth();
    year = d.getFullYear();

    dayContainer.innerHTML = "";
    dateContainer.innerHTML = date;
    monthContainer.innerHTML = "." + months[month];
    yearContainer.innerHTML = "." + year;
});

function english() {
    document.getElementById("hover").innerHTML = "Specific date";
    document.getElementById("bigger").innerHTML = "Bigger";
    document.getElementById("smaller").innerHTML = "Smaller";
    document.getElementById("break").innerHTML = "Wanna break dance?";
    document.getElementById("random").innerHTML = "Push a random button!";
    document.getElementById('hover').addEventListener("mouseover", function(){
        d = new Date();
        day = d.getDay();
        month = d.getMonth();
        date = d.getDate();
        year = d.getFullYear();

        dayContainer.innerHTML = englishDays[day];
        dateContainer.innerHTML = ",&nbsp;" + englishMonthNames[month];
        monthContainer.innerHTML = "&nbsp;" + date;
        yearContainer.innerHTML = ",&nbsp;" + year;
    });

    document.getElementById('hover').addEventListener("mouseout", function(){
        d = new Date();
        date = (d.getDate()<10?'0':'') + d.getDate();
        month = d.getMonth();
        year = d.getFullYear();

        dayContainer.innerHTML = "";
        dateContainer.innerHTML = date;
        monthContainer.innerHTML = "." + months[month];
        yearContainer.innerHTML = "." + year;
    });
}

function estonian(){
    document.getElementById("hover").innerHTML = "Täpsem kuupäev";
    document.getElementById("bigger").innerHTML = "Suuremaks";
    document.getElementById("smaller").innerHTML = "Väiksemaks";
    document.getElementById("break").innerHTML = "Breigime?";
    document.getElementById("random").innerHTML = "Vajuta suvalist nuppu!";
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
        date = (d.getDate()<10?'0':'') + d.getDate();
        month = d.getMonth();
        year = d.getFullYear();

        dayContainer.innerHTML = "";
        dateContainer.innerHTML = date;
        monthContainer.innerHTML = "." + months[month];
        yearContainer.innerHTML = "." + year;
    });
}

let container = document.getElementById('container');

window.addEventListener('keypress', selectColor);

function changeColor(){
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    container.style.backgroundColor = 'rgb(' + r + ', ' +g+','+b+')';
}

function selectColor(){
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    container.style.borderColor = 'rgb(' + r + ', ' +g+','+b+')';
}
