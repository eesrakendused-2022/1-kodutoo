let general = document.getElementById("general");
let general_date = document.getElementById("general_date");

let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];


function hickoryDickoryDock(){
    let d = new Date();
    
    let hours = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();

    let date_of_weekend = d.getDay();
    let month = d.getMonth();
    let year = d.getFullYear();
    let day = d.getDate();

    if(hours < 10){hours = "0" + hours}
    if(mins < 10){mins = "0" + mins }
    if(secs < 10){secs = "0" + secs}
    general.innerHTML = hours + ":" + mins + ":" + secs;

    general_date.innerHTML = day + " " + months[month] + " " + year + " " + days[date_of_weekend];
    setTimeout("hickoryDickoryDock()", 1000);
}

document.getElementById("style_select").addEventListener('change', function () {
    let box = document.getElementById("style_select");
    box = box.options[box.selectedIndex].value;
    if(box === "standart_mode"){
        document.body.style.backgroundColor = "#191970";
        document.getElementById("clock").style.color = "greenyellow";
        document.getElementById("general").style.border = "none";
        document.getElementById("general").style.backgroundColor = "#191970";
        document.getElementById("date").style.color="orange";
        document.body.style.backgroundImage = 'none';
        document.getElementById("general_date").style.backgroundColor="#191970";
    } else if(box === "dark_mode"){
        document.body.style.backgroundColor = "black";
        document.body.style.backgroundImage = 'none';
        document.getElementById("general").style.border = "solid";
        document.getElementById("general").style.borderRadius = "50px";
        document.getElementById("clock").style.color = "greenyellow";
        document.getElementById("general").style.backgroundColor = "#1c1100";
        document.getElementById("clock").style.borderColor = "#1c1100";
        document.getElementById("date").style.color="#00fff0";
        document.getElementById("general_date").style.backgroundColor="black";

    } else if (box === "light_mode"){
        document.getElementById("general").style.border = "none";
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundColor = "#E6D7E6";
        document.getElementById("clock").style.color = "#dd00ff";
        document.getElementById("general").style.backgroundColor = "#E6D7E6";
        document.getElementById("date").style.color="#ff0000";
        document.getElementById("general_date").style.backgroundColor="#E6D7E6";
    } else if (box === "lizard_mode"){
        document.getElementById("general").style.border = "none";
        document.getElementById("clock").style.color = "greenyellow";
        document.body.style.backgroundImage = 'url("Ocellated-Lizard.jpg")';
        document.getElementById("general").style.backgroundColor = "rgba(255,68,0,0)";
        document.getElementById("date").style.color="#ffffff";
        document.getElementById("general_date").style.backgroundColor="#110900";
    } else if (box === "solar_mode") {
        document.getElementById("general").style.border = "none";
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundColor = "#ffe56d";
        document.getElementById("clock").style.color = "#ff4400";
        document.getElementById("general").style.backgroundColor = "#ffe56d";
        document.getElementById("date").style.color = "#507953";
        document.getElementById("general_date").style.backgroundColor = "#ffe56d";
    }
});

// console.log(box);
