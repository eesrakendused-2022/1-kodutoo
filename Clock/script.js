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
let theme  = document.querySelector("#toggleBtn");
let main = document.querySelector("#main");
let clock = document.querySelector("#clock");
let size = (localStorage.getItem("fontSize") === 30) ? 30 : localStorage.getItem("fontSize");
let textColor = document.querySelector("#textColor");
let bgColor = document.querySelector("#bgColor");

window.onload = ()=>{
    size.value = localStorage.getItem("fontSize");
    theme.value = localStorage.getItem("theme");
    textColor.value = localStorage.getItem("textColor");
    bgColor.value = localStorage.getItem("bgColor");
    changeTheme();
    changeText();
    changeBg();
    changeFont();
};
updateData();
window.setInterval(updateData, 1000);

document.querySelector("#textColor").addEventListener("input", changeText);
function changeText(){
    clock.style.color = textColor.value;
    localStorage.setItem("textColor", textColor.value);
};

document.querySelector("#bgColor").addEventListener("input", changeBg);
function changeBg(){
    clock.style.backgroundColor = bgColor.value;
    localStorage.setItem("bgColor", bgColor.value);

};

document.querySelector("#toggleBtn").addEventListener("click", changeTheme);
function changeTheme(){
    localStorage.setItem("theme", theme.value);
    if (theme.value === "night"){
        theme.value = "day";
        main.style.backgroundColor = "#303030";
    }else if(theme.value === "day"){
        main.style.backgroundColor = "#f7f7f7";
        theme.value = "night";
    }
};

function changeFont(){
    clock.style.fontSize = size+"px";
    localStorage.setItem("fontSize", size)
}

document.querySelector("#biggerFont").addEventListener("click", ()=>{
    size++;
    clock.style.fontSize = size+"px";
    localStorage.setItem("fontSize", size);
});

document.querySelector("#smallerFont").addEventListener("click", ()=>{
    size--;
    clock.style.fontSize = size+"px";
    localStorage.setItem("fontSize", size);
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