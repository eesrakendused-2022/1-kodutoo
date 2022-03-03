let d = new Date();
let curr_value;

let days_ee=[
    "Pühapäev",
    "Esmaspäev",
    "Teisipäev",
    "Kolmapäev",
    "Neljapäev",
    "Reede",
    "Laupäev"
];

let months_ee=[
    "jaanuar",
    "veebruar",
    "märts",
    "aprill",
    "mai",
    "juuni",
    "juuli",
    "august",
    "september", 
    "oktoober",
    "november",
    "detsember"
];

function update_clock() {
    d = new Date();
    show_content(curr_value);
}

function new_button(arg) {
    curr_value = arg;
    document.getElementById("small_text").innerHTML =
    document.getElementById(curr_value + "_button").innerHTML + ":";
    show_content(curr_value);
}

function show_content(arg) {
    if(arg==undefined) {
        return;
    }
    let big_text;
    if(arg=="time") {
        let hour = d.getHours();
        let min = d.getMinutes();
        let sec = d.getSeconds();
        let msec = d.getMilliseconds();
        
        if(hour<10) {
            hour = "0" + hour;
        } 
        if(min<10) {
            min = "0" + min;
        }
        if(sec<10) {
            sec = "0" + sec;
        }
        big_text = hour + ":" + min + ":" + sec + "." + msec;
    } else if (arg=="date") {
        const day = d.getDate();
        const month = d.getMonth();
        const year = d.getFullYear();
        big_text = day + ". " + months_ee[month] + " " + year;
    } else if (arg=="day") {
        const day = d.getDay();
        big_text = days_ee[day];
    }
    document.getElementById("big_text").innerHTML=big_text;
}

function change_color(arg) {
    const element = document.getElementById(arg+"_color");
    if(arg=="bg"){
        document.getElementById("main_content").style.backgroundColor = element.value;
        document.getElementById("other_content").style.backgroundColor = element.value;
        document.getElementById("credits").style.backgroundColor = element.value;
    } else {
        document.getElementById("main_content").style.color = element.value;
        document.getElementById("credits").style.color = element.value;
    }
}

function change_size() {
    const size_btn = document.getElementById("text_size");
    const big_text = document.getElementById("big_text");
    const small_text = document.getElementById("small_text");
    big_text.style.fontSize = size_btn.value + "em";
    small_text.style.fontSize = parseFloat(size_btn.value)/2 + "em";
}

const time_button = document.getElementById("time_button");
time_button.addEventListener("click",function() {new_button("time")});
const date_button = document.getElementById("date_button");
date_button.addEventListener("click",function() {new_button("date")});
const day_button = document.getElementById("day_button");
day_button.addEventListener("click",function() {new_button("day")});

const text_color = document.getElementById("text_color");
text_color.addEventListener("change",function() {change_color("text")});
const bg_color = document.getElementById("bg_color");
bg_color.addEventListener("change",function() {change_color("bg")});
const text_size = document.getElementById("text_size");
text_size.addEventListener("change", change_size);

const timer_1 = setInterval(update_clock, 50);