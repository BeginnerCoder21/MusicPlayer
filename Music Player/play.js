const songName = document.querySelector("#song-name");//Not necessary
const audio = document.querySelector("#audio");
const coverArt = document.querySelector("#cover");

var  playPause=document.getElementById("playb");
var forward=document.getElementById("nextb");
var backward=document.getElementById("backb");
var Pause=document.getElementById("pauseb");


let playImg = "./Images/play.png";
let pauseImg = "./Images/pause.png";

playPause.src = playImg;
let isPlaying = true;

const songList = [
    {
        name: "Sun Sathiya",
        source: "./Songs/Sun_Saathiya.mp3",
        cover: "./Images/Sun_Saathiya.jpg"
    },
    {
        name: "Kabira",
        source: "./Songs/Kabira.mp3",
        cover: "./Images/Kabira.jpg"
    },
    {
        name: "Kaise Mujhe Tum",
        source: "./Songs/Kaise Mujhe.mp3",
        cover: "./Images/Kaise_mujhe.jpg"
    },
    {
        name: "Galliyan",
        source: "./Songs/Galliyan.mp3",
        cover: "./Images/Galliyan.jpg"
    },
    {
        name: "Behti Hawa Sa Tha Wo",
        source: "./Songs/behti-hawa-sa-tha-woh.mp3",
        cover: "./Images/Behti_hawa.jpg"
    },
    {
        name: "Cham Cham",
        source: "./Songs/Cham_Cham.mp3",
        cover: "./Images/Cham.jpg"
    },
    {
        name: "Agar Tum Saath Ho",
        source: "./Songs/Agar_tum.mp3",
        cover: "./Images/Agar_tum.jpg"
    },
    {
        name: "Aankh Marey",
        source: "./Songs/Aankh Marey.mp3",
        cover: "./Images/aankh.jpg"
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
//songs
loadMusic(songList[songIndex]);
function loadMusic() {
    coverArt.src = songList[songIndex].cover;
    audio.src = songList[songIndex].source;
}
function playSong() {
    playPause.src = pauseImg;
    //playPause.classList.toggle("fa-pause");
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
    isPlaying ? pauseSong() : playSong();
}
playPause.addEventListener("click", playHandler);
backward.addEventListener("click", backPlay);
forward.addEventListener("click", nextPlay);

createPlayList()
