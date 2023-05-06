"use strict";

console.log("Welcome to Spotify"); // Initialize the variables

var songIndex = 0;
var audioElement = new Audio('songs/1.mp3');
var myProgressBar = document.getElementById('myProgressBar');
var gif = document.getElementById('gif');
letmasterSongName = document.getElementById('masterSongName');
var songItems = Array.from(document.getElementsByClassName('songItem'));
var songs = [{
  songName: "teri-to-sadi-ho-rahi-hai_Hindi",
  filepath: "songs/1.mp3",
  coverPath: "covers/1.jpg"
}, {
  songName: "Aadhi-aawe-ya-tufan_bhojpuri",
  filepath: "songs/2.mp3",
  coverPath: "covers/2.jpg"
}, {
  songName: "Kekara-se-puchhi-bhojpuri_song",
  filepath: "songs/3.mp3",
  coverPath: "covers/3.jpg"
}, {
  songName: "Tohara-dular-bina-bhojpuri_song",
  filepath: "songs/4.mp3",
  coverPath: "covers/4.jpg"
}, {
  songName: "Tohar-dil-h-ki-charjar_bhojpuri",
  filepath: "songs/5.mp3",
  coverPath: "covers/5.jpg"
}, {
  songName: "Mai-bina-jinagi-adhura_bhojpuri",
  filepath: "songs/6.mp3",
  coverPath: "covers/6.jpg"
}, {
  songName: "Ja-jaibu-ta-ja-ye-sanam_bhojpuri",
  filepath: "songs/7.mp3",
  coverPath: "covers/7.jpg"
}, {
  songName: "Kawne-badra-se-kajra-chorailu",
  filepath: "songs/8.mp3",
  coverPath: "covers/8.jpg"
}, {
  songName: "Bhulailo-pa-batiya-kawno",
  filepath: "songs/9.mp3",
  coverPath: "covers/9.jpg"
}, {
  songName: "Jinagi-jahar-banailu_bhojpuri",
  filepath: "songs/10.mp3",
  coverPath: "covers/10.jpg"
}];
songItems.forEach(function (element, i) {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
}); // audioElement.play();

var a = ""; //Handle play/pause click

var masterPlay = document.getElementById('masterPlay');
masterPlay.addEventListener('click', function () {
  if (audioElement.paused) {
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1; // a = audioElement.play
    // console.log(audioElement.pause)
    // audioElement.pause =false
  } else {
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
    console.log(audioElement.play);
  }
}); // Listen to Events

audioElement.addEventListener('timeupdate', function () {
  // update Seekbar
  progress = parseInt(audioElement.currentTime / audioElement.duration * 100);
  myProgressBar.value = progress;
});
myProgressBar.addEventListener('change', function () {
  audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

var makeAllPlays = function makeAllPlays() {
  Array.from(document.getElementsByClassName('songItemPlay')).forEach(function (element) {
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
  });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach(function (element) {
  element.addEventListener('click', function (e) {
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = "songs/".concat(songIndex + 1, ".mp3");
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  });
});
document.getElementById('next').addEventListener('click', function () {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }

  audioElement.src = "songs/".concat(songIndex + 1, ".mp3");
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
});
document.getElementById('previous').addEventListener('click', function () {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }

  audioElement.src = "songs/".concat(songIndex + 1, ".mp3");
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
});