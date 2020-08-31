  const music = document.querySelector("audio");
  const img = document.querySelector("img");
  const play = document.getElementById("play");
  const artist = document.getElementById("artist");
  const title = document.getElementById("title");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  const songs = [
    {
        imgname : "img1",
        songname : "song1",
        title : "chak lein de",
        artist : "kailesh khair"
    },
    {
        imgname : "img2",
        songname : "song2",
        title : "Brother anthem",
        artist : "Ajay-Atul and Vishal Dadlani"
    },
    {
        imgname : "img3",
        songname : "song3",
        title : "Pitah Se Naam Tera",
        artist : "Sonu Nigam"
    },
    {
        imgname : "img4",
        songname : "song4",
        title : "Bekhayali",
        artist : "Sachet Tandon"
    },
    {
        imgname : "img5",
        songname : "song5",
        title : "Happy Ending",
        artist : "Abhijit Sawant and Debojit Saha"
    }
  ];

  let isPlaying = false;
  function playMusic(){
    isPlaying = true;    //it means that the song was clicked

    music.play();
    play.classList.replace("fa-play" , "fa-pause");
    img.classList.add("anime");
  }

  // for pause function
  function pauseMusic(){
    isPlaying = false;    //it means that the song was clicked
    music.pause();
    play.classList.replace("fa-pause" , "fa-play");
    img.classList.add("anime");
  }

  play.addEventListener("click" , function (event){
     if(isPlaying){   //if its true that means song was played so just stop the song
       pauseMusic();
     }else {
       playMusic();
     }
  });

  //changing the music data
 function loadSong(songs){
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.songname + ".mp3";
    img.src = "images/" + songs.imgname + ".jpeg";
 }

  //loadSong(songs[1]);
  songIndex = 0;


  function nextSong(){
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
  }

  function prevSong(){
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
  }

  next.addEventListener("click" , nextSong);

  prev.addEventListener("click" , prevSong);
