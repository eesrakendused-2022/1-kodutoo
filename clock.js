const timeContainer = document.querySelector('#time');
const dateContainer = document.querySelector('#date');
const timeAndDateContainer = document.querySelector('#timeAndDateContainer');
const weekdayContainer = document.querySelector('#weekday');
const weekdaysArray = ['pühapäev', 'esmaspäev', 'teisipäev', 'kolmapäev', 'neljapäev', 'reede', 'laupäev'];

const opentMyRepoLink = document.querySelector('#toMyRepo');
const changeColorButton = document.querySelector('#changeColor');
const resetButton = document.querySelector('#reset');
const changePicButton = document.querySelector('#changePic');
const canvas = document.querySelector('main');

let r, g, b;
const pic1 = 'url("pics/1.jpg")';
const pic2 = 'url("pics/2.jpg")';
const pic3 = 'url("pics/3.jpg")';
const pic4 = 'url("pics/4.jpg")';
let counter = 0;
let number = 0;

updateClock();
updateDate();

timeContainer.addEventListener('dblclick', changeFontSize);
changeColorButton.addEventListener('click', changeColor);
resetButton.addEventListener('click', resetChanges);
changePicButton.addEventListener('click', changePic);
weekdayContainer.addEventListener('mouseover', removeWeekday);

opentMyRepoLink.addEventListener('click', () => {
    window.open('https://github.com/mortenpaul/1-kodutoo')
});


function updateClock(){
    let date = new Date();
    let seconds = addZeroDigit(date.getSeconds());
    let minutes = addZeroDigit(date.getMinutes());
    let hours = addZeroDigit(date.getHours());
    
    timeContainer.innerHTML = hours + ':' + minutes + ':' + seconds;
    
    // To update shown date and weekday if the webpage is open at 00:00:00
    if(hours == 00 && minutes == 00 && seconds == 00){
        updateDate();
    }
    
    requestAnimationFrame(updateClock);
}

function updateDate(){
    let date = new Date();
    let day = addZeroDigit(date.getDate());
    let month = addZeroDigit(date.getMonth() + 1);

    dateContainer.innerHTML = day + '.' + month + '.' + date.getFullYear();
    weekdayContainer.innerHTML = weekdaysArray[date.getDay()];
}

function addZeroDigit(timeValue){
    if(timeValue > 9) {
        return timeValue;
    } else {
        return '0' + timeValue;
    }
}

function changeFontSize(){
    if(window.innerWidth > 615){
        if(number == 0){
            timeContainer.style.fontSize = '5.5em';
            number = 1;
        } else {
            timeContainer.style.fontSize = '2.3em';
            number = 0;
        }
    }
}

function changeColor(){
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);

    timeAndDateContainer.style.color = 'rgb('+ r +','+ g +',' + b + ')';
}

function changePic(){
    if(counter == 0){
        canvas.style.backgroundImage = pic1;
        counter++;
    } else if(counter == 1){
        canvas.style.backgroundImage = pic2;
        counter++;
    } else if(counter == 2){
        canvas.style.backgroundImage = pic3;
        counter++;
    } else if(counter == 3){
        canvas.style.backgroundImage = pic4;
        counter = 0;
    }
}

function removeWeekday(){
    weekdayContainer.style.display = 'none';
}

function resetChanges(){
    timeAndDateContainer.style.color = 'white';
    timeContainer.style.fontSize = '2.3em';
    canvas.style.backgroundImage = 'url("pics/bmw.jpg")';
    weekdayContainer.style.display = 'flex';
}