/* Kellaaja funktsioon */
function clock_time() {
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    document.getElementById('clock_time').innerHTML = hours + ":" + minutes + ":" + seconds;
 }

 
/* Kuupäeva funktsioon */
 function showDate(){
    var d = new Date();
    var days = ["Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"]
    var days = days[d.getDay()];
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var status = null;
    
    if(day < 10){
        day= "0" + day;
    }
    if(month < 10){
        month= "0" + month;
    }
    if (days > 0 && days < 6){
        status = "Koolipäev";
    } else {
        status = "Puhkepäev";
    }

    
    document.getElementById("date").innerHTML = days + " " + day + "/" + month + "/" + year;
    document.getElementById("day_status").innerHTML = status;
}

var bgPage = document.body;
var cTxt = document.getElementById("clock_container");
var r = 0, g = 0, b = 0;
var rt = 0, gt = 0, bt = 0;
var timeOutBg;
var timeoutTxt;

/* Tausta värvi vikerkaar */
document.getElementById("rainbow_bg").addEventListener("click", function bg(){
    
    if (r <= 255 && g == 0 && b == 0) {
		r ++;
	}

	if (r == 255 && b == 0 && g <= 255) {
		g ++;
	}

	if (r == 255 && g == 255 && b <= 255) {
		b ++;
	}

	if (b == 255 && g == 255 && r > 0) {
		r --;
	}

	if (r == 0 && b == 255 && g > 0) {
		g --;
	}

	if (r == 0 && g == 0 && b > 0) {
		b --;
	}
    timeOutBg = setTimeout(function() {
		bg();
	}, 10);

	bgPage.style.background = "rgb("+r+","+g+","+b+")";
});
/* Teksti värvi vikerkaar */
document.getElementById("rainbow_txt").addEventListener("click", function txt(){
    
    if (rt <= 255 && gt == 0 && bt == 0) {
		rt ++;
	}

	if (rt == 255 && bt == 0 && gt <= 255) {
		gt ++;
	}

	if (rt == 255 && gt == 255 && bt <= 255) {
		bt ++;
	}

	if (bt == 255 && gt == 255 && rt > 0) {
		rt --;
	}

	if (rt == 0 && bt == 255 && gt > 0) {
		gt --;
	}

	if (rt == 0 && gt == 0 && bt > 0) {
		bt --;
	}
    timeoutTxt = setTimeout(function() {
		txt();
	}, 10);

	cTxt.style.color = "rgb("+rt+","+gt+","+bt+")";
});
/* Värvivahetuse peataja */
document.getElementById("stop").addEventListener("click", function(){
    clearTimeout(timeoutTxt);
    clearTimeout(timeOutBg);
    
});
/* Värvide resetimine tagasi mustaks */
document.getElementById("reset_color").addEventListener("click", function(){
    clearTimeout(timeoutTxt);
    clearTimeout(timeOutBg);
    bgPage.style.background = "rgb(0,0,0)";
    cTxt.style.color = "rgb(0,0,0)";
    r = 0, g = 0, b = 0, rt = 0, gt = 0, bt = 0;
    
});




clock_time();
window.setInterval(clock_time, 1000);
showDate();
