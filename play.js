const songName = document.querySelector("#song-name");//Not necessary
const audio = document.querySelector("#audio");
const coverArt = document.querySelector("#cover");
//const musicbox = document.querySelector("#musicbox");

var  playPause=document.getElementById("playb");
var forward=document.getElementById("nextb");
var backward=document.getElementById("backb");
var Pause=document.getElementById("pauseb");

let playImg = "play.png";
let pauseImg = "pause.png";

playPause.src = playImg;
let isPlaying = true;

const songList = [
    {
        name: "Sun Sathiya",
        source: "Sun_Saathiya.mp3",
        cover: "Sun_Saathiya.jpg"
    },
    {
        name: "Enni Soni",
        source: "Enni_Soni.mp3",
        cover: "Sun_Saathiya.jpg"
    },
    {
        name: "Kaise Mujhe Tum",
        source: "Kaise Mujhe.mp3",
        cover: "Sun_Saathiya.jpg"
    },
    {
        name: "Galliyan",
        source: "Galliyan.mp3",
        cover: "Sun_Saathiya.jpg"
    },
    {
        name: "Behti Hawa Sa Tha Wo",
        source: "behti-hawa-sa-tha-woh.mp3",
        cover: "Sun_Saathiya.jpg"
    },
    {
        name: "Cham Cham",
        source: "Cham_Cham.mp3",
        cover: "Sun_Saathiya.jpg"
    },
    {
        name: "Bol Do Na Zara",
        source: "Bol Do Na Zara.mp3",
        cover: "Sun_Saathiya.jpg"
    },
    {
        name: "Aankh Marey",
        source: "Aankh Marey.mp3",
        cover: "Sun_Saathiya.jpg"
    }
  ];
  function createEle(ele) {
      return document.createElement(ele);
  }
  function append(parent, child) {
    return parent.append(child);
}
// creating track list
const ul = createEle('ul')
let songIndex = 0;
// preloaded song
loadMusic(songList[songIndex]);
function loadMusic() {
    coverArt.src = songList[songIndex].cover;
    //songName.innerText = songList[songIndex].name;
    audio.src = songList[songIndex].source;
}
function playSong() {
    playPause.src = pauseImg;
    audio.play();
}
function pauseSong() {
    playPause.src = playImg;
    audio.pause();
}
function nextPlay() {
    songIndex++;
    if(songIndex > songList.length - 1) {
        songIndex = 0;
    }
    loadMusic(songList[songIndex]);
    playSong();
}
function backPlay() {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songList.length - 1;
    }
    loadMusic(songList[songIndex]);
    playSong();
}
function playHandler() {
    isPlaying = !isPlaying;
    //console.log("Change: ",isPlaying)
    isPlaying ? pauseSong() : playSong();
}
playPause.addEventListener("click", playHandler);
backward.addEventListener("click", backPlay);
forward.addEventListener("click", nextPlay);

createPlayList()
