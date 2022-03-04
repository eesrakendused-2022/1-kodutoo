//keele valikud

//EST
let daysEST = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
let monthsEST = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];

//ENG

let daysENG = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let monthsENG = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]

//RUS
let daysRUS = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let monthsRUS = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];

//date time meetod
let d = new Date();
//console.log(d);

//päevad
let day = d.getDay();
let dayContainer = document.getElementById('day');
// dayContainer.innerHTML = days[day];

//aastad
let year = d.getFullYear();
document.getElementById('year').innerHTML = year;

//kuud
let month = d.getMonth();
// let monthConatiner = document.getElementById('month').innerHTML = months[month];

//kuupäev
let date = d.getDate();
document.getElementById('date').innerHTML = date;

//Keele filter

//lehel keele dropdown menu keele valik
let lang = 0; //def lang panek
setLang();

function setLang(){
    lang = document.getElementById("lang").value;
    if (lang == 0) {
        dayContainer.innerHTML = daysEST[day];
        let monthConatiner = document.getElementById('month').innerHTML = monthsEST[month];
    }else if (lang == 1) {
        dayContainer.innerHTML = daysENG[day];
        let monthConatiner = document.getElementById('month').innerHTML = monthsENG[month];
    } else {
        dayContainer.innerHTML = daysRUS[day];
        let monthConatiner = document.getElementById('month').innerHTML = monthsRUS[month];
    }
}

//kella aeg
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();

let secondsContainer = document.getElementById('seconds');
let minutesContainer = document.getElementById('minutes');
let hoursContainer = document.getElementById('hours');

////seda asendab update blokk
secondsContainer.innerHTML = seconds;
minutesContainer.innerHTML = minutes;
hoursContainer.innerHTML = hours;

//kella uuendamine siin selle fnc sees
function updateClock(){
    let d = new Date();
    hours = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();

    //kella õige formmat ehk 00 mitte 0
    if(hours <10){
        hours = '0' + hours;
    }
    if(minutes <10){
        minutes = '0' + minutes;
    }
    if(seconds < 10){
        seconds = '0' + seconds;
    }

    secondsContainer.innerHTML = seconds;
    minutesContainer.innerHTML = minutes;
    hoursContainer.innerHTML = hours;
}

//kella uuendamine iga teatud aja tagant, ehk teeb seda koguaeg
window.setInterval(updateClock, 100);

////zoom
let fontSize = 22;

//centre-box
let withDef = 600;
let HeightDef = 450;

//line
let lineDef = 4;

//väiksemaks
document.getElementById('smaller').addEventListener('click', function(){
    fontSize --;
    withDef -= 25;
    HeightDef -= 20;
    lineDef -= 0.2;
    document.getElementById('centre-box').style.fontSize = fontSize + 'px';
    document.getElementById('centre-box').style.width = withDef + 'px';
    document.getElementById('centre-box').style.height = HeightDef + 'px';
    document.getElementById('line').style.border = lineDef + 'px solid black';
})

//suuremaks
document.getElementById('bigger').addEventListener('click', function(){
    fontSize ++;
    withDef += 25;
    HeightDef += 20;
    lineDef += 0.2;
    document.getElementById('centre-box').style.fontSize = fontSize + 'px';
    document.getElementById('centre-box').style.width = withDef + 'px';
    document.getElementById('centre-box').style.height = HeightDef + 'px';
    document.getElementById('line').style.border = lineDef + 'px solid black';
})

document.getElementById('deafult').addEventListener('click', function () {
    fontSize = 22;
    withDef = 600;
    HeightDef = 450;
    lineDef = 4;
    document.getElementById('centre-box').style.fontSize = fontSize + 'px';
    document.getElementById('centre-box').style.width = withDef + 'px';
    document.getElementById('centre-box').style.height = HeightDef + 'px';
    document.getElementById('line').style.border = lineDef + 'px solid black';
})

//theme muutmine
let theme = 0;

function setTheme() {
    theme = document.getElementById("theme").value;

    if (theme == 0) {
        document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"style/style.css\" />");

    } else if (theme == 1) {
        document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"style/style_light.css\" />");
    }
}