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

let monthsEST = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli","august", "september", "oktoober", "november", "detsember"];
let daysEST = ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];

let monthsENG = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];
let daysENG = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let workURLs =["images/Metsat66_1947.jpg", "images/Yrgkogukondlik_1949.jpg", "images/Suitsutare_1948.jpg", "images/M6isnikud_1947.jpg", "images/P6levkivit66stus_1947.jpg"];
let workCaptionsEST = ["Metsatöö. 1947", "Põllumajandus ürgkogukondlikul ajastul. 1949", "Õhtu suitsutares. 1948", "Mõisnikud tõllas. 1947", "Eesti põlevkivitööstuse areng. 1947"];
let workCaptionsENG = ["Forestry. 1947", "Agriculture in the prehistoric era. 1949", "Evening in the smokehouse. 1948", "Landlords in the chariot. 1947", "Development of the Estonian oil shale industry. 1947"];
let work=0; 

let secondsContainer = document.getElementById('seconds');
let minutesContainer = document.getElementById('minutes');
let hoursContainer = document.getElementById('hours');
let dayContainer = document.getElementById('day');
let monthContainer = document.getElementById('month');
let dateContainer = document.getElementById('date');
let yearContainer = document.getElementById('year');

let container = document.getElementById('container');
let corner1 = document.getElementById('corner1');
let corner2 = document.getElementById('corner2');
let corner3 = document.getElementById('corner3');
let corner4 = document.getElementById('corner4');
let caption = document.getElementById('caption');

let lang = "EST";

dateContainer.innerHTML = date+".&nbsp;";
monthContainer.innerHTML = monthsEST[month]+"&nbsp;";
dayContainer.innerHTML = daysEST[day];
yearContainer.innerHTML = year;

updateClock();

window.setInterval(updateClock, 1000);

document.getElementById('langENG').addEventListener("click", function(){
    lang = "ENG";
	if (lang=="ENG"){
		dateContainer.innerHTML = date+"&nbsp;";
		monthContainer.innerHTML = monthsENG[month]+"&nbsp;";
		dayContainer.innerHTML = daysENG[day];
		caption.innerHTML = workCaptionsENG[work];
	}
})
document.getElementById('langEST').addEventListener("click", function(){
    lang = "EST";
	
	if (lang=="EST"){
		dateContainer.innerHTML = date+".&nbsp;";
		monthContainer.innerHTML = monthsEST[month]+"&nbsp;";
		dayContainer.innerHTML = daysEST[day];
		caption.innerHTML = workCaptionsEST[work];
	}
})

corner1.addEventListener("mouseover", function(){
	document.body.style.backgroundColor = "DarkOliveGreen";
})

corner2.addEventListener("mouseover", function(){
	document.body.style.backgroundColor = "DimGrey";
})

corner3.addEventListener("mouseover", function(){
	document.body.style.backgroundColor = "Chocolate";
})

corner4.addEventListener("mouseover", function(){
	document.body.style.backgroundColor = "Peru";
})

container.addEventListener("mouseover", function(){
	document.body.style.backgroundColor = "SaddleBrown";
})

corner1.addEventListener("click", function(){
	work=1;
	container.style.backgroundImage = "url('"+workURLs[work]+"')";
	if (lang=="EST"){
		caption.innerHTML = workCaptionsEST[work];	
	} else {
		caption.innerHTML = workCaptionsENG[work];
	}
})

corner2.addEventListener("click", function(){
	work=2;
	container.style.backgroundImage = "url('"+workURLs[work]+"')";
	if (lang=="EST"){
		caption.innerHTML = workCaptionsEST[work];	
	} else {
		caption.innerHTML = workCaptionsENG[work];
	}
})

corner3.addEventListener("click", function(){
	work=3;
	container.style.backgroundImage = "url('"+workURLs[work]+"')";
	if (lang=="EST"){
		caption.innerHTML = workCaptionsEST[work];	
	} else {
		caption.innerHTML = workCaptionsENG[work];
	}
})

corner4.addEventListener("click", function(){
	work=4;
	container.style.backgroundImage = "url('"+workURLs[work]+"')";
	if (lang=="EST"){
		caption.innerHTML = workCaptionsEST[work];	
	} else {
		caption.innerHTML = workCaptionsENG[work];
	}	
})

container.addEventListener("click", function(){
	work=0;
	container.style.backgroundImage = "url('"+workURLs[work]+"')";
	if (lang=="EST"){
		caption.innerHTML = workCaptionsEST[work];	
	} else {
		caption.innerHTML = workCaptionsENG[work];
	}	
})



function updateClock(){
    d = new Date();
	hours = d.getHours();
	minutes = d.getMinutes();
	seconds = d.getSeconds();	
    if (lang=="EST"){
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
	} else {
		let ampm = hours >= 12 ? 'pm' : 'am';
		hours = hours % 12;

		if(hours<10){
			hours = "0"+hours;
		}
		if(minutes<10){
			minutes = "0"+minutes;
		}
		if(seconds<10){
			seconds = "0"+seconds;
		}

		hoursContainer.innerHTML = hours;
		minutesContainer.innerHTML = ":"+minutes;
		secondsContainer.innerHTML = ":"+seconds+ampm;
	}
}