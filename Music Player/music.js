  const music = document.querySelector("audio");
  const img = document.querySelector("img");
  const play = document.getElementById("play");
  const artist = document.getElementById("artist");
  const title = document.getElementById("title");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  let progress = document.getElementById("progress");

  let total_duration = document.getElementById("duration");
  let total_currentTime = document.getElementById("current_time");

  const progress_div = document.getElementById("progress_div");

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
    img.classList.remove("anime");
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

  // progress part work
  music.addEventListener('timeupdate' , function (event){
     // console.log(event);

     //object destructuring
     const {currentTime , duration} = event.srcElement;

     // console.log(currentTime);
     // console.log(duration);

     //progress bar-width dynamically change in css
     let progress_time = (currentTime / duration) * 100;

     //template literals
     progress.style.width = `${progress_time}%`;

     //music duration update
     let min_duration = Math.floor(duration / 60);
     let sec_duration = Math.floor(duration % 60);

     // console.log(min_duration);
     //console.log(sec_duration);
     let tot_duration = `${min_duration}:${sec_duration}`;

     if(duration){
       total_duration.textContent = `${tot_duration}`;
     }

     //current duration update
     let min_currentTime = Math.floor(currentTime / 60);
     let sec_currentTime = Math.floor(currentTime % 60);

     // console.log(min_duration);
     //console.log(sec_duration);

     if(sec_currentTime < 10){
       sec_currentTime = `0${sec_currentTime}`;
     }

     let tot_currentTime = `${min_currentTime}:${sec_currentTime}`;
     total_currentTime.textContent = `${tot_currentTime}`;

  });

  // progress onclick function
  

 //if music end call next song function
  music.addEventListener("ended" , nextSong);

  next.addEventListener("click" , nextSong);
  prev.addEventListener("click" , prevSong);
