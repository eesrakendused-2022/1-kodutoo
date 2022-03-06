let d = new Date();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let time = d.getTime();
let day = d.getDay();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();

let timeSize = 90;
let dateSize = 15;
let lang = "EST";



let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"]
let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];

let dayContainer = document.getElementById('day');
let monthContainer = document.getElementById('month');
let dateContainer = document.getElementById('date');
let secondsContainer = document.getElementById('seconds');
let minutesContainer = document.getElementById('minutes');
let hoursContainer = document.getElementById('hours');

if(lang == "EST"){
    monthContainer.innerHTML = months[month];
    dayContainer.innerHTML = days[day];
}

if(lang == "ENG"){
	

}


dayContainer.innerHTML = days[day] + ",";
document.getElementById('year').innerHTML = year;
monthContainer.innerHTML = months[month] + ",";
dateContainer.innerHTML = date + ".";
updateClock();

window.setInterval(updateClock, 1000);

document.getElementById('small').addEventListener("click", function(){
    timeSize -= 6;
    dateSize --;
    document.getElementById('time').style.fontSize = timeSize + "px";
    document.getElementById('dateValue').style.fontSize = dateSize + "px";

});
document.getElementById('big').addEventListener("click", function(){
    timeSize += 6;
    dateSize ++;
    document.getElementById('time').style.fontSize = timeSize + "px";
    document.getElementById('dateValue').style.fontSize = dateSize + "px";
});

document.getElementById('plMusic').addEventListener("click", playMusic);
document.getElementById('bkColor').addEventListener("click", background);
document.getElementById('ukColor').addEventListener("click", ukrainaColor);
document.getElementById('usColor').addEventListener("click", usualColor);
document.getElementById('language').addEventListener("click", changeLanguage);

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
    //minutesContainer.innerHTML = "&nbsp;" + minutes;
    minutesContainer.innerHTML = ":" + minutes;
    hoursContainer.innerHTML = hours;
}

function playMusic(){
	const music = new Audio('eesti_humn.mp3');
	music.loop = false;
	music.play();
}

function background(){
	
        const r = Math.floor(Math.random()*255);
        const g = Math.floor(Math.random()*255);
        const b = Math.floor(Math.random()*255);
    
        body.style.backgroundColor = 'rgb('+r+','+ g+','+ b+')';
}

function ukrainaColor(){
    const r = 0;
    const g = 0;
    const b = 255;
	
	const e = 255;
	const f = 255;
	const t = 102;

    container.style.backgroundColor = 'rgb('+r+','+ g+','+ b+')';
	container.style.borderColor = 'rgb('+e+','+ f+','+ t+')';
}
function usualColor(){
	const r = 140;
    const g = 140;
    const b = 140;
	
	const e = 0;
	const f = 0;
	const t = 0;
	
	container.style.backgroundColor = 'rgb('+r+','+ g+','+ b+')';
	container.style.borderColor = 'rgb('+e+','+ f+','+ t+')';
}

	