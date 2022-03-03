let d = new Date();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let time = d.getTime();
let day = d.getDay();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();

let timeFormat24 = true;

let fontSize = 150;

let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];

let dateContainer = document.getElementById('date');
let monthContainer = document.getElementById('month');
let dayContainer = document.getElementById('day');
let secondsContainer = document.getElementById('seconds');
let minutesContainer = document.getElementById('minutes');
let hoursContainer = document.getElementById('hours');

dayContainer.innerHTML = days[day];
document.getElementById('year').innerHTML = year;
monthContainer.innerHTML = months[month];
dateContainer.innerHTML = date;
updateClock();

document.getElementById('exitFullscreen').style.visibility = "hidden";

window.setInterval(updateClock, 1000);
document.getElementById('smaller').addEventListener("click", function(){
    fontSize --;
    document.getElementById('clock').style.fontSize = fontSize + "px";
});
document.getElementById('bigger').addEventListener("click", function(){
    fontSize ++;
    document.getElementById('clock').style.fontSize = fontSize + "px";
});
document.getElementById('fullscreen').addEventListener("click", function(){
    document.getElementById('container').requestFullscreen();
    document.getElementById('exitFullscreen').style.visibility = "visible";
});

document.getElementById('themeDay').addEventListener("click", function(){
    document.getElementById('pagestyle').setAttribute("href", "day.css");
})

document.getElementById('themeNight').addEventListener("click", function(){
    document.getElementById('pagestyle').setAttribute("href", "night.css");
})

document.getElementById('exitFullscreen').addEventListener("click", function(){
  document.exitFullscreen();
  document.getElementById('exitFullscreen').style.visibility = "hidden";
});

dragClock(document.getElementById('time'));

function dragClock(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

document.getElementById('format12h').addEventListener('click', function(){
  timeFormat24 = false;
})

document.getElementById('format24h').addEventListener('click', function(){
  timeFormat24 = true;
})

function updateClock(){
    d = new Date();
    if(timeFormat24==true){
    hours = d.getHours();
  }
    else{
    hours = d.getHours() - 12;
    }
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

    if(timeFormat24==true){
      secondsContainer.innerHTML = ":" + seconds;
    }
    else {
      if(d.getHours >= 0 && d.getHours < 12) {
        secondsContainer.innerHTML = ":" + seconds + " AM";
      }
      else {
        secondsContainer.innerHTML = ":" + seconds + " PM";
      }
    }

    minutesContainer.innerHTML = ":" + minutes;
    hoursContainer.innerHTML = hours;
}
