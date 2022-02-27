let d = new Date();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let time = d.getTime();
let day = d.getDay();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();

let fontSize = 10;

//let bColor = "brown";

let monthsEST = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli","august", "september", "oktoober", "november", "detsember"];
let daysEST = ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];

let monthsENG = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];
let daysENG = ["Sunday", "Mondya", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let secondsContainer = document.getElementById('seconds');
let minutesContainer = document.getElementById('minutes');
let hoursContainer = document.getElementById('hours');
let dayContainer = document.getElementById('day');
let monthContainer = document.getElementById('month');
let dateContainer = document.getElementById('date');
let yearContainer = document.getElementById('year');

let lang = "EST";

/* let corner1 = document.getElementById('corner1');
let corner2 = document.getElementById('corner2');
let corner3 = document.getElementById('corner3');
let corner4 = document.getElementById('corner4'); */

dateContainer.innerHTML = date+".&nbsp;";
monthContainer.innerHTML = monthsEST[month]+"&nbsp;";
dayContainer.innerHTML = daysEST[day];
yearContainer.innerHTML = year;

/* secondsContainer.innerHTML = ":"+seconds;
minutesContainer.innerHTML = ":"+minutes;
hoursContainer.innerHTML = hours; */
updateClock();

window.setInterval(updateClock, 1000);

document.getElementById('smaller').addEventListener("click", function(){
    fontSize--;
    document.getElementById('container').style.fontSize = fontSize + "vh";
})
document.getElementById('bigger').addEventListener("click", function(){
    fontSize++;
    document.getElementById('container').style.fontSize = fontSize + "vh";
})

document.getElementById('langENG').addEventListener("click", function(){
    lang = "ENG";
	if (lang=="ENG"){
    dateContainer.innerHTML = date+"&nbsp;";
    monthContainer.innerHTML = monthsENG[month]+"&nbsp;";
    dayContainer.innerHTML = daysENG[day];
	}
})
document.getElementById('langEST').addEventListener("click", function(){
    lang = "EST";
	
	if (lang=="EST"){
    dateContainer.innerHTML = date+".&nbsp;";
    monthContainer.innerHTML = monthsEST[month]+"&nbsp;";
    dayContainer.innerHTML = daysEST[day];    
	}
})

document.getElementById('corner1').addEventListener("mouseover", function(){
	document.body.style.backgroundColor = "DarkOliveGreen";
})

document.getElementById('corner2').addEventListener("mouseover", function(){
	document.body.style.backgroundColor = "DimGrey";
})

document.getElementById('corner3').addEventListener("mouseover", function(){
	document.body.style.backgroundColor = "Chocolate";
})

document.getElementById('corner4').addEventListener("mouseover", function(){
	document.body.style.backgroundColor = "Khaki";
})

document.getElementById('container').addEventListener("mouseover", function(){
	document.body.style.backgroundColor = "SaddleBrown";
})

/*

document.getElementById('corner1').addEventListener("click", function(){
	//bColor = "pink";
	document.getElementById('corner2').style.backgroundColor = "green";
})
document.getElementById('corner2');
document.getElementById('corner3');
document.getElementById('corner4'); */

function updateClock(){
    d = new Date();
    hours = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();

    if(hours<10){
        hours = "0"+hours;
    }
    if(minutes<10){
        minutes = "0"+minutes;
    }
    if(seconds<10){
        seconds = "0"+seconds;
    }

    secondsContainer.innerHTML = ":"+seconds;
    minutesContainer.innerHTML = ":"+minutes;
    hoursContainer.innerHTML = hours;
}
