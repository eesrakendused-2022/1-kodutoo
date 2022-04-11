let date = new Date();
let day = date.getDay();
let year = date.getFullYear();
let month = date.getMonth();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let currentDate = date.getDate();
let days = ["Pühapäev", "Esmaspäev", "Teisipäev","Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];
const theme  = document.querySelector("#toggleBtn");
const main = document.querySelector("#main");
let clock = document.querySelector("#clock");
fontSize = 30;
let textColor = document.querySelector("#textColor");
let bgColor = document.querySelector("#bgColor");

updateData();
window.setInterval(updateData, 1000);

document.querySelector("#textColor").addEventListener("input", ()=>{
    clock.style.color = textColor.value;
});

document.querySelector("#bgColor").addEventListener("input", ()=>{
    clock.style.backgroundColor = bgColor.value;
});

document.querySelector("#toggleBtn").addEventListener("click", ()=>{
    if (theme.value === "day"){
        theme.value = "night";
        main.style.backgroundColor = "#303030";
    }else if(theme.value === "night"){
        main.style.backgroundColor = "#f7f7f7";
        theme.value = "day";
    }
});

document.querySelector("#biggerFont").addEventListener("click", ()=>{
    fontSize++;
    clock.style.fontSize = fontSize+"px";
});

document.querySelector("#smallerFont").addEventListener("click", ()=>{
    fontSize--;
    clock.style.fontSize = fontSize+"px";
});

function updateData() {
    date = new Date();
    day = date.getDay();
    year = date.getFullYear();
    month = date.getMonth();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    currentDate = date.getDate();
    if(hours<10){hours = "0"+hours;}
    if(minutes<10){minutes = "0"+minutes;}
    if(seconds<10){seconds = "0"+seconds;}
    if(date<10){date= "0"+date;}
    document.querySelector("#hours").innerHTML = hours+":";
    document.querySelector("#minutes").innerHTML = minutes+":";
    document.querySelector("#seconds").innerHTML = seconds;
    document.querySelector("#weekDay").innerHTML = days[day]+"\&nbsp";
    document.querySelector("#day").innerHTML = currentDate+".\&nbsp";
    document.querySelector("#month").innerHTML = months[month]+"\&nbsp";
    document.querySelector("#year").innerHTML = year;
}