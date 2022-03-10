let d = new Date()

let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"]
let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
let hourNames = ["Null", "Üks", "Kaks", "Kolm", "Neli", "Viis", "Kuus", "Seitse", "Kaheksa", "Üheksa", "Kümme", "Üksteist", "Kaksteist",
		 "Kolmteist", "Neliteist", "Viisteist", "Kuusteist", "Seitseteist", "Kaheksateist", "Üheksateist", "Kakskümmend", "Kakskümmend üks",
		 "Kakskümmend kaks", "Kakskümmend kolm", "Kakskümmend neli" ];
let minuteNames = ["Null", "Üks", "Kaks", "Kolm", "Neli", "Viis", "Kuus", "Seitse", "Kaheksa", "Üheksa", "Kümme", "Üksteist", "Kaksteist",
		   "Kolmteist", "Neliteist", "Viisteist", "Kuusteist", "Seitseteist", "Kaheksateist", "Üheksateist", "Kakskümmend", "Kakskümmend üks",
		   "Kakskümmend kaks", "Kakskümmend kolm", "Kakskümmend neli", "Kakskümmend viis", "Kakskümmend kuus", "Kakskümmend seitse",
		   "Kakskümmend kaheksa", "Kakskümmend üheksa", "Kolmkümmend", "Kolmkümmend üks", "Kolmkümmend kaks", "Kolmkümmend kolm",
		   "Kolmkümmend neli", "Kolmkümmend viis", "Kolmkümmend kuus", "Kolmkümmend seitse", "Kolmkümmend üheksa", "Nelikümmend", 
		   "Nelikümmend üks", "Nelikümmend kaks", "Nelikümmend kolm", "Nelikümmend neli", "Nelikümmend viis", "Nelikümmend kuus", 
		   "Nelikümmend seitse", "Nelikümmend kaheksa", "Nelikümmend üheksa", "Viiskümmend", "Viiskümmend üks", "Viiskümmend kaks", 
		   "Viiskümmend kolm", "Viiskümmend neli", "Viiskümmend viis", "Viiskümmend kuus", "Viiskümmend seitse", "Viiskümmend kaheksa", 
		   "Viiskümmend üheksa", "Kuuskümmend"];

let monthsEng = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let daysEng = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let hourNamesEng = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", " Twelve "," Thirteen "," Fourteen ",
		    " Fifteen "," Sixteen "," Seventeen "," Eighteen "," Nineteen "," Twenty "," Twenty one "," Twenty two "," Twenty three ", "Twenty four"];
let minuteNamesEng = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", " Twelve "," Thirteen "," Fourteen ",
		      " Fifteen "," Sixteen "," Seventeen "," Eighteen "," Nineteen "," Twenty "," Twenty one "," Twenty two "," Twenty three ", "Twenty four",
		      "Twenty five", "Twenty six", "Twenty seven", "Twenty eight", "Twenty nine", "Thirty", "Thirty one", "Thirty two", "Thirty three",
		      " Thirty four "," Thirty five "," Thirty six "," Thirty seven "," thirty nine "," forty "," forty one "," forty two "," forty three ",
		      " forty four "," forty five", "forty-six", "forty-seven", "forty-eight", "forty-nine", "fifty", "fifty-one", "fifty-two", "fifty three", 
		      "fifty four", "fifty five "," Fifty six "," Fifty seven "," Fifty eight "," Fifty nine ", "Sixty"];

let day = d.getDay();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let year = d.getFullYear();
let month = d.getMonth();
let date = d.getDate();
let time = d.getTime();

let bgColor = "grey";
let brColor = "black";
let clockType = "written";
let boxColor = "#c4c4c4";
let textColor = "black";
let pageLang = "estonian";

let dayContainer = document.getElementById('day');
let monthContainer = document.getElementById('month');
let dateContainer = document.getElementById('date');
let secondsContainer= document.getElementById('seconds');
let minutesContainer = document.getElementById('minutes');
let hoursContainer = document.getElementById('hours');

let pageTitle = document.getElementById("title");
let xyz = document.getElementsByClassName('upperbox');
let upperBox1 = xyz[0];
let upperBox2 = xyz[1];
let upperBox3 = xyz[2];
let upperBox4 = xyz[3];
let idBody = document.getElementById('body');
let clockBox = document.getElementById('time');
let currMonth = monthContainer.innerHTML = months[month];
let currDay = dayContainer.innerHTML = days[day];

document.getElementById('year').innerHTML = year;
dateContainer.innerHTML = date;

/* if (pageLang == "english") {
	monthContainer.innerHTML = monthsEng[month];
	dayContainer.innerHTML = daysEng[day];
} else {
	monthContainer.innerHTML = months[month];
	dayContainer.innerHTML = days[day];
} */

updateClock();

window.setInterval(updateClock, 1000);

document.getElementById('date').addEventListener("click", function(){
	idBody.style.backgroundColor = bgColor;
	
	upperBox1.style.borderColor = brColor;
	upperBox2.style.borderColor = brColor;
	upperBox3.style.borderColor = brColor;
	upperBox4.style.borderColor = brColor;
	clockBox.style.borderColor = brColor;
	
	upperBox1.style.backgroundColor = boxColor;
	upperBox2.style.backgroundColor = boxColor;
	upperBox3.style.backgroundColor = boxColor;
	upperBox4.style.backgroundColor = boxColor;
	clockBox.style.backgroundColor = boxColor;
	
	upperBox1.style.color = textColor;
	upperBox2.style.color = textColor;
	upperBox3.style.color = textColor;
	upperBox4.style.color = textColor;
	clockBox.style.color = textColor;
	
	if (bgColor == "black") {
		bgColor = "grey";
		brColor = "black"; 
		boxColor = "#c4c4c4";
		textColor = "black";
	} else {
		bgColor = "black";
		brColor = "grey";
		boxColor = "#1c1c1c"
		textColor = "grey";
	}
	
	
});

document.getElementById('month').addEventListener("click", function(){
	if (clockType == "numbers") {
		clockBox.style.fontSize = 24+"px";
		clockBox.style.flexDirection = "column";
		clockType = "written";
	} else {
		clockType = "numbers";
		clockBox.style.fontSize = 48+"px";
		clockBox.style.flexDirection = "row";
	}
});

document.getElementById('day').addEventListener("click", function(){
	if (pageLang == "english"){
		pageLang = "estonian";
		monthContainer.innerHTML = months[month];
		dayContainer.innerHTML = days[day];
		pageTitle.innerHTML = "Kell";
	} else {
		pageLang = "english";
		monthContainer.innerHTML = monthsEng[month];
		dayContainer.innerHTML = daysEng[day];
		pageTitle.innerHTML = "Clock";
	}
});

function updateClock() {
    let d = new Date()
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    if(clockType == "numbers"){
		if(minutes < 10){
			minutes = "0" + minutes;
		}
		if(seconds < 10){
			seconds = "0" + seconds;
		}
		if(hours < 10){
			hours = "0" + hours;
		}
	}
	
	if(clockType == "numbers"){
		secondsContainer.innerHTML = ":" + seconds;
		minutesContainer.innerHTML = ":" + minutes;
		hoursContainer.innerHTML = hours;
	} else {
		if (pageLang == "estonian"){
		secondsContainer.innerHTML = minuteNames[seconds];
		minutesContainer.innerHTML = minuteNames[minutes];	
		hoursContainer.innerHTML = hourNames[hours];
		} else {
			secondsContainer.innerHTML = minuteNamesEng[seconds];
		minutesContainer.innerHTML = minuteNamesEng[minutes];	
		hoursContainer.innerHTML = hourNamesEng[hours];
		}
	}
}
