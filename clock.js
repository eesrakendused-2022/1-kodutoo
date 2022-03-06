let d = new Date();
let day = d.getDay();
let month = d.getMonth();
let year = d.getFullYear();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let date = d.getDate();

//eesti keel
let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];
let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
//inglise keel
let monthsEng = ["January", "February", "March", "April"];
let daysEng  = ["Sunday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let monthContainer = document.getElementById('month');
let dayContainer = document.getElementById('day');
let dateContainer = document.getElementById('date');
let secondsContainer = document.getElementById('seconds');
let minutesContainer = document.getElementById('minutes');
let hoursContainer = document.getElementById('hours');

let fontSize = 13;
let lang = "EST";


dayContainer.innerHTML = days[day];
document.getElementById('year').innerHTML = year;
monthContainer.innerHTML = "."+months[month]+"&nbsp";
dateContainer.innerHTML = "&nbsp"+date;

updateClock();
window.setInterval(updateClock, 1000);


//Taustavärvi muutja
document.getElementById('nightColor').addEventListener("click", function(){
    document.body.style.backgroundColor = '#10101E';
    
});

document.getElementById('dayColor').addEventListener("click", function(){
    document.body.style.backgroundColor = 'white';
    
});


//Kuupäeva teksti suuruse muutja
document.getElementById('smaller').addEventListener("click", function(){
    fontSize --;
    document.getElementById('container').style.fontSize = fontSize + "px";
});

document.getElementById('bigger').addEventListener("click", function(){
    fontSize ++;
    document.getElementById('container').style.fontSize = fontSize + "px";
});


//Keele muutja
document.getElementById('estonian').addEventListener("click", function(){
    lang = "EST"
    if (lang=="EST"){
        dateContainer.innerHTML = "&nbsp"+date;
        monthContainer.innerHTML =  "."+months[month]+"&nbsp";
        dayContainer.innerHTML =  days[day];
    }
});

document.getElementById('english').addEventListener("click", function(){
    lang = "ENG"
    if (lang=="ENG"){
        dateContainer.innerHTML = "&nbsp"+date;
        monthContainer.innerHTML =  "."+monthsEng[month]+"&nbsp";
        dayContainer.innerHTML =  daysEng[day];
    }
});



function updateClock(){
    d = new Date();
    minutes = d.getMinutes();
    seconds = d.getSeconds();
    date = d.getDate();

    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    if(hours < 10){
        minutes = "0" + hours;
    }
    secondsContainer.innerHTML = ":"+seconds;
    minutesContainer.innerHTML =  ":"+minutes;
    hoursContainer.innerHTML = hours;
}
