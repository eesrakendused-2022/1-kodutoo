let d = new Date();
let tallinnInterval, NYInterval, perInterval;
let fontSize = 20;

//päev
let day = d.getDay();
let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
let dayContainer = document.getElementById('day');
dayContainer.innerHTML = days[day];

//aasta
let year = d.getFullYear();
document.getElementById('year').innerHTML = year;
//kuu
let month = d.getMonth();
let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];
document.getElementById('month').innerHTML = months[month];
//kuupäev
let date = d.getDate();
document.getElementById('date').innerHTML = date;

//tund
let hourContainer = document.getElementById('hours');
//minut
let minutesContainer = document.getElementById('minutes');
//sekund
let secondsContainer = document.getElementById('seconds');

window.onload = function(){
    updateClock();
    tallinnInterval = setInterval(updateClock, 1000);
    console.log("First time");
}

//muuda väiksemaks
document.getElementById('smaller').addEventListener('click', function(){
    fontSize--;
    document.getElementById('container').style.fontSize = fontSize + "px";
});

//muuda suuremaks
document.getElementById('bigger').addEventListener('click', function(){
    fontSize++;
    document.getElementById('container').style.fontSize = fontSize + "px";
});

//muuda inglise keelseks
document.getElementById('ENG').addEventListener('click', function(){
    monthsEnglish = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    document.getElementById('month').innerHTML = monthsEnglish[month];
    daysEnglish = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    document.getElementById('day').innerHTML = daysEnglish[day];
});

//muuda eesti keelseks
document.getElementById('EST').addEventListener('click', function(){
    document.getElementById('month').innerHTML = months[month];
    document.getElementById('day').innerHTML = days[day];
});

//muuda vene keelseks
document.getElementById('RUS').addEventListener('click', function(){
    monthsRussian = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    document.getElementById('month').innerHTML = monthsRussian[month];
    daysRussian = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    document.getElementById('day').innerHTML = daysRussian[day];
});

//muuda saksa keelseks
document.getElementById('GER').addEventListener('click', function(){
    monthsGerman = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    document.getElementById('month').innerHTML = monthsGerman[month];
    daysGerman = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    document.getElementById('day').innerHTML = daysGerman[day];
});

//muuda ajatsooni New York UTC-05:00
document.getElementById('new-york').addEventListener('click', function(){
    clearInterval(tallinnInterval);
    clearInterval(perInterval);
    updateClockNY();
    NYInterval = setInterval(updateClockNY, 1000);
});

//muuda ajatsoon Tallinn UTC+02:00
document.getElementById('tallinn').addEventListener('click', function(){
    clearInterval(NYInterval);
    clearInterval(perInterval);
    updateClock();
    tallinnInterval = setInterval(updateClock, 1000);
});

//muuda ajatsoon Perth UTC+08:00
document.getElementById('perth').addEventListener('click', function(){
    clearInterval(tallinnInterval);
    clearInterval(NYInterval);
    updateClockPer();
    perInterval = setInterval(updateClockPer, 1000);
});

function updateClock(){
    let d = new Date();
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
    
    hourContainer.innerHTML = hours;
    minutesContainer.innerHTML = ":" + minutes;
    secondsContainer.innerHTML = "." + seconds;
    
}

function updateClockNY(){
    let dt = new Date();
    dt.setTime(dt.getTime() - (5 * 60 * 60 * 1000));
    hoursNY = dt.getUTCHours();
    minutesNY = dt.getUTCMinutes();
    secondsNY = dt.getUTCSeconds();
    
    if(minutesNY < 10){
        minutesNY = "0" + minutesNY;
    }
    
    if(secondsNY < 10){
        secondsNY = "0" + secondsNY;
    }
    
    if(hoursNY < 10){
        hoursNY = "0" + hoursNY;
    }
    
    hourContainer.innerHTML = hoursNY;
    minutesContainer.innerHTML = ":" + minutesNY;
    secondsContainer.innerHTML = "." + secondsNY;
}

function updateClockPer(){
    let dt = new Date();
    dt.setTime(dt.getTime() + (8 * 60 * 60 * 1000));
    hoursPer = dt.getUTCHours();
    minutesPer = dt.getUTCMinutes();
    secondsPer = dt.getUTCSeconds();
    
    if(minutesPer < 10){
        minutesPer = "0" + minutesPer;
    }
    
    if(secondsPer < 10){
        secondsPer = "0" + secondsPer;
    }
    
    if(hoursPer < 10){
        hoursPer = "0" + hoursPer;
    }
    
    hourContainer.innerHTML = hoursPer;
    minutesContainer.innerHTML = ":" + minutesPer;
    secondsContainer.innerHTML = "." + secondsPer;
}