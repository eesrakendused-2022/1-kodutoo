let d = new Date();
console.log(d);
let day=d.getDay();
console.log(day);
let days = ["Pühapäev", "Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"];
let dayContainer=document.getElementById('day');
let year=d.getFullYear();
let date=d.getDate();
let hours=d.getHours();
let minutes=d.getMinutes();
let seconds=d.getSeconds();
let dateContainet=document.getElementById('date');
let hoursContainer=document.getElementById('hours');
let minutesContainer=document.getElementById('minutes');
let secondsContainer=document.getElementById('seconds');
let month=d.getMonth();
let months=["Jaanuar","Veebruar","Märts","Aprill","Mai","Juuni","Juuli","August","Semptember","Oktoober","November","Detsember"];
dayContainer.innerHTML=days[day];
let monthContainer=document.getElementById('month');
document.getElementById('year').innerHTML= year;
monthContainer.innerHTML=months[month];
dateContainet.innerHTML=date;

let fontSize=50;
let default_background="gray";
let default_font = "Comic Sans MS,cursive,sans-serif"
updateClock();
/*hoursContainer.innerHTML=hours;
minutesContainer.innerHTML=minutes;
secondsContainer.innerHTML=seconds;*/

window.setInterval(updateClock, 1000);
document.getElementById('smaller').addEventListener("click",function(){
    fontSize--;
    document.getElementById('container').style.fontSize = fontSize+"px";
});
document.getElementById('bigger').addEventListener("click",function(){
    fontSize++;
    document.getElementById('container').style.fontSize = fontSize+"px";
});

document.getElementById('changetheme').addEventListener("click",function(){
    document.getElementById('main').style.backgroundColor = "white";
});
document.getElementById('backtodefault').addEventListener("click",function(){
    document.getElementById('time').style.fontSize=fontSize+"px";
    document.getElementById('main').style.backgroundColor=default_background;
    document.getElementById('date2').style.fontSize=25+"px";
    document.getElementById('container').style.fontFamily=default_font;
});
document.getElementById('changefont').addEventListener("click",function(){
    document.getElementById('container').style.fontFamily="Impact,Charcoal,sans-serif";
});
function updateClock(){
    d = new Date();
    hours=d.getHours();
    minutes=d.getMinutes();
    seconds=d.getSeconds();
    if(hours<10){
        hours="0"+hours;
    }
    if(minutes<10){
        minutes="0"+minutes;
    }
    if(seconds<10){
       seconds ="0"+seconds;
    }
    secondsContainer.innerHTML=seconds;
    minutesContainer.innerHTML=minutes;
    hoursContainer.innerHTML=hours;
}