var onOff = document.getElementById("music_selector");
var songName = document.getElementById("song_name");
var nextSong = document.getElementById("next");
var prevSong = document.getElementById("prev");
var songCounter = 0;
var playCounter = 1;

var song1 = new Audio("/music/Kisnou - Invictus.mp3");
var song2 = new Audio("/music/Ori, Lost In the Storm.mp3");
var songs = [song1, song2];
var songNames = ["Kisnou - Invictus", "Ori, Lost In the Storm"];



function pauseSongs(){
    for(i=0; i<songs.length ;i++){
        songs[i].pause();
        songs[i].currentTime = 0;
        console.log(i);
    }
}

nextSong.onclick = function(){
    if(songCounter == songs.length - 1){
        songCounter = 0;
        console.log(songCounter);
        songName.innerHTML = songNames[songCounter];
        pauseSongs();
        songs[songCounter].play();
        onOff.className = "music_on";

    } else {
        songCounter++;
        songName.innerHTML = songNames[songCounter];
        pauseSongs();
        songs[songCounter].play();
        onOff.className = "music_on";
    }
};
prevSong.onclick = function(){
    if(songCounter < 1){
        songCounter = 0;
        songName.innerHTML = songNames[songCounter];
        pauseSongs();
        songs[songCounter].play();
        onOff.className = "music_on";
    } else {
        songCounter--;
        songName.innerHTML = songNames[songCounter];
        pauseSongs();
        songs[songCounter].play();
        onOff.className = "music_on";
    }
};
onOff.onclick = function(){
    if(playCounter==0){
        for(i=0; i<songs.length ;i++){
            songs[i].pause();
            onOff.className = "music_off";
    }
        playCounter = 1;
        console.log(playCounter);
    } else {
        songs[songCounter].play();
        songName.innerHTML = songNames[songCounter];
        playCounter = 0;
        onOff.className = "music_on";
    }
};