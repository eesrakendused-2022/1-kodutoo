let d = new Date();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let day = d.getDay();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();


let fontSize = 42;
let lang = "EST";

let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"]
let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];


/*if(lang == "ENG"){
    let monthsENG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday ", "Wednesday", "Thursday", "Friday", "Saturday"];  
}*/


let dayContainer = document.getElementById('day');
let monthContainer = document.getElementById('month');
let dateContainer = document.getElementById('date');
let secondsContainer = document.getElementById('seconds');
let minutesContainer = document.getElementById('minutes');
let hoursContainer = document.getElementById('hours');


console.log(month);


dayContainer.innerHTML = days[day];
document.getElementById('year').innerHTML = year;
monthContainer.innerHTML = months[month];
dateContainer.innerHTML = date;
updateClock();

//fondi suuruse muutmine
window.setInterval(updateClock, 1000);
document.getElementById('smaller').addEventListener("click", function(){
    fontSize --;
    document.getElementById('container').style.fontSize = fontSize + "px";
});
document.getElementById('bigger').addEventListener("click", function(){
    fontSize ++;
    document.getElementById('container').style.fontSize = fontSize + "px";
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
    
    secondsContainer.innerHTML = ":" + seconds;
    minutesContainer.innerHTML = ":" +  minutes;
    hoursContainer.innerHTML = hours;

}


//taustapildi muutmine
document.getElementById('daypicture').addEventListener("click", function(){
    document.body.style.backgroundImage = "url('clockpicture10.png')";
});

document.getElementById('nightpicture').addEventListener("click", function(){
    document.body.style.backgroundImage = "url('clockpicture11blue.png')";
});


document.getElementById('languagechange').addEventListener("click", function(){
    dayContainer.innerHTML = days[day];
    document.getElementById('year').innerHTML = year;
    monthContainer.innerHTML = months[month];
    dateContainer.innerHTML = date;
});