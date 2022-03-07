let d = new Date();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
console.log(d);
let time = d.getTime();
let day = d.getDay();
let date = d.getDate();
let year = d.getFullYear();
let month = d.getMonth();

let sans = true;

let body = document.getElementById("body");
let container = document.getElementById("container");

let timeFontSize = 120;
let dateFontsize = 20;

let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "kolmapäev", "Neljapäev", "Reede", "Laupäev"];
let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];


let dateContainer = document.getElementById('date');
let monthContainer = document.getElementById('month');
let dayContainer = document.getElementById('day');
let secondContainer = document.getElementById('seconds');
let minutesContainer = document.getElementById('minutes');
let hoursContainer = document.getElementById('hours');



dayContainer.innerHTML = days[day] + ",";
document.getElementById('year').innerHTML = year;
monthContainer.innerHTML = months[month] + ",";
dateContainer.innerHTML = date + ".";
updateClock();

window.setInterval(updateClock, 1000);

document.getElementById('bgColor').addEventListener("click", setBodyColor);
document.getElementById('dialColor').addEventListener("click", setDialColor);
document.getElementById('changeFont').addEventListener("click", changeFont);


document.getElementById('smaller').addEventListener("click", function(){
    timeFontSize -= 6;
    dateFontsize --;
    document.getElementById('time').style.fontSize = timeFontSize + "px";
    document.getElementById('dateValue').style.fontSize = dateFontsize + "px";

});
document.getElementById('bigger').addEventListener("click", function(){
    timeFontSize += 6;
    dateFontsize ++;
    document.getElementById('time').style.fontSize = timeFontSize + "px";
    document.getElementById('dateValue').style.fontSize = dateFontsize + "px";
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



    secondContainer.innerHTML = ":" + seconds;
    minutesContainer.innerHTML = ":" + minutes;
    hoursContainer.innerHTML = hours;
}

function setBodyColor(){
    
        const r = Math.floor(Math.random()*255);
        const g = Math.floor(Math.random()*255);
        const b = Math.floor(Math.random()*255);
    
        body.style.backgroundColor = 'rgb('+r+','+ g+','+ b+')';
    
}

function setDialColor(){
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    container.style.backgroundColor = 'rgb('+r+','+ g+','+ b+')';
}

function changeFont(){
    if (sans == true){
        container.style.fontFamily = "serif";
        sans = false;
    }else{
        container.style.fontFamily = "fantasy";
        sans = true;
    }
}