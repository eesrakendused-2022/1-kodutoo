
function Kell(){
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    let day = d.getDay();
    let month = d.getMonth();
    let year = d.getFullYear();
    let date = d.getDate();

    let display = document.getElementById("time");
    let fulldate = document.getElementById("date");

    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    if(hours < 10){
        hours = "0" + hours;
    }
    display.innerHTML = hours + ":" + minutes + ":" + seconds;

    let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
    let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];

    fulldate.innerHTML = date + " " + months[month] + " " + year + " " + days[day];
    setTimeout("Kell()", 1000);
}


var imagesArray = ["space.jpg", "ban.jpg", "space3.jpg", "moon.jpg", "seal.jpg"];

function changeBackground(){
    document.body.style.backgroundImage = 'url(' + imagesArray[Math.floor(Math.random() *      imagesArray.length)] + ')';
}

document.getElementById('changeBackground').addEventListener("click", function(){
    changeBackground();
});
let height = 160;
let fontSize = 17;
let width = 530;
let default_font= "Arial, Helvetica, sans-serif";
    document.getElementById('smaller').addEventListener("click",function(){
        fontSize--;
        height= height-10;
        width= width - 20;
        document.getElementById('clock').style.fontSize = fontSize+"px";
        document.getElementById('clock').style.height = height+"px";
        document.getElementById('clock').style.width = width+"px";
        return height, width;
       
    });
    document.getElementById('bigger').addEventListener("click",function(){
        fontSize++;
        height = height + 10;
        width = width + 20;
        document.getElementById('clock').style.fontSize = fontSize+"px";
        document.getElementById('clock').style.height = height+"px";
        document.getElementById('clock').style.width = width+"px";
        return height, width;
    });
    document.getElementById('changefont').addEventListener("click",function(){
    var fontArray = ["Fantasy", "Impact", "Charcoal", "sans-serif", "Monaco"];
    document.getElementById('body').style.fontFamily= fontArray[Math.floor(Math.random() *      fontArray.length)];
    });

Kell();
